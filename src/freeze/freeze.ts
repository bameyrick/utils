import { typeOf, ValueType } from '../type-predicates';

/**
 * Recursively (deep) freezes objects/arrays and freezes nested values (best-effort).
 *
 * Important: JavaScript cannot universally enforce deep immutability for every built-in.
 * This function makes the *returned value* behave as readonly where possible.
 *
 * Notes on exotic built-ins:
 * - `Map`/`Set` internal entries are not made immutable by `Object.freeze`, so this function returns a readonly `Proxy`
 *   that throws on mutating operations.
 * - `Date` and ArrayBuffer views (TypedArrays/DataView/Buffer) have mutating APIs that bypass `Object.freeze`, so this
 *   function returns a readonly `Proxy` that throws on common mutators.
 * - If other code still holds a reference to the original mutable object, it can mutate it directly; `freeze()` cannot
 *   prevent that.
 */
export function freeze<T>(value: T): Readonly<T> {
  const ctx: FreezeContext = {
    seen: new WeakSet<object>(),
    cache: new WeakMap<object, unknown>(),
  };

  return freezeInternal(value, ctx) as Readonly<T>;
}

type FreezeContext = {
  seen: WeakSet<object>;
  cache: WeakMap<object, unknown>;
};

function isObjectLike(value: unknown): value is object {
  return (typeof value === 'object' && value !== null) || typeof value === 'function';
}

function freezeInternal<T>(value: T, ctx: FreezeContext): unknown {
  if (!isObjectLike(value)) {
    return value;
  }

  const cached = ctx.cache.get(value);
  if (cached) {
    return cached;
  }

  if (ctx.seen.has(value)) {
    return value;
  }

  ctx.seen.add(value);
  ctx.cache.set(value, value);

  const valueType = typeOf(value);

  switch (valueType) {
    case ValueType.array: {
      return freezeArrayDeep(value as unknown as unknown[], ctx);
    }
    case ValueType.object: {
      return freezeObjectDeep(value as unknown as Record<PropertyKey, unknown>, ctx);
    }
    case ValueType.map: {
      return freezeMapDeep(value as unknown as Map<unknown, unknown>, ctx);
    }
    case ValueType.set: {
      return freezeSetDeep(value as unknown as Set<unknown>, ctx);
    }
    case ValueType.date: {
      return freezeDate(value as unknown as Date, ctx);
    }
    case ValueType.regexp: {
      return Object.freeze(value);
    }
    case ValueType.error: {
      return freezeObjectDeep(value as unknown as Record<PropertyKey, unknown>, ctx);
    }
    case ValueType.weakmap: {
      return freezeWeakMap(value as unknown as WeakMap<object, unknown>, ctx);
    }
    case ValueType.weakset: {
      return freezeWeakSet(value as unknown as WeakSet<object>, ctx);
    }
    case ValueType.buffer:
    case ValueType.int8array:
    case ValueType.uint8array:
    case ValueType.uint8clampedarray:
    case ValueType.int16array:
    case ValueType.uint16array:
    case ValueType.int32array:
    case ValueType.uint32array:
    case ValueType.float32array:
    case ValueType.float64array:
    case ValueType.bigint64array:
    case ValueType.biguint64array: {
      return freezeArrayBufferView(value as unknown as ArrayBufferView, ctx);
    }
    default: {
      // Best-effort: freeze any other object-like value (e.g. Promise, iterators, functions with props)
      return freezeObjectDeep(value as unknown as Record<PropertyKey, unknown>, ctx);
    }
  }
}

function freezeObjectDeep(obj: Record<PropertyKey, unknown>, ctx: FreezeContext): unknown {
  const propKeys = Reflect.ownKeys(obj);

  for (const key of propKeys) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);

    if (!desc) {
      continue;
    }

    if ('value' in desc) {
      const frozenChild = freezeInternal(desc.value, ctx);

      if (frozenChild !== desc.value) {
        if (desc.writable) {
          Reflect.set(obj, key, frozenChild);
        } else if (desc.configurable) {
          Object.defineProperty(obj, key, {
            ...desc,
            value: frozenChild,
          });
        }
      }

      continue;
    }

    // Accessors: nothing to traverse without invoking the getter.
    // Still freeze the descriptor via Object.freeze(obj) below.
  }

  return Object.freeze(obj);
}

function freezeArrayDeep(array: unknown[], ctx: FreezeContext): ReadonlyArray<unknown> {
  for (let i = 0; i < array.length; i++) {
    const frozenChild = freezeInternal(array[i], ctx);

    if (frozenChild !== array[i]) {
      Reflect.set(array, String(i), frozenChild);
    }
  }

  // Handle custom properties on arrays too (including symbols)
  const extraKeys = Reflect.ownKeys(array).filter(k => {
    return typeof k !== 'string' || !/^\d+$/.test(k);
  });

  for (const key of extraKeys) {
    const desc = Object.getOwnPropertyDescriptor(array, key);

    if (!desc || !('value' in desc)) {
      continue;
    }

    const frozenChild = freezeInternal(desc.value, ctx);

    if (frozenChild !== desc.value) {
      if (desc.writable) {
        Reflect.set(array, key, frozenChild);
      } else if (desc.configurable) {
        Object.defineProperty(array, key, {
          ...desc,
          value: frozenChild,
        });
      }
    }
  }

  return Object.freeze(array);
}

function freezeMapDeep(map: Map<unknown, unknown>, ctx: FreezeContext): ReadonlyMap<unknown, unknown> {
  const proxy = createReadonlyProxy(map, ctx, {
    throwOnMethodNames: ['set', 'delete', 'clear'],
  });

  const updates: Array<{ key: unknown; value: unknown }> = [];

  map.forEach((value, key) => {
    // Do not replace keys (would break lookups); still freeze deeply.
    freezeInternal(key, ctx);

    const frozenValue = freezeInternal(value, ctx);
    if (frozenValue !== value) {
      updates.push({ key, value: frozenValue });
    }
  });

  for (const { key, value } of updates) {
    map.set(key, value);
  }

  defineThrowingMethods(map, ['set', 'delete', 'clear']);
  Object.freeze(map);
  return proxy;
}

function freezeSetDeep(set: Set<unknown>, ctx: FreezeContext): ReadonlySet<unknown> {
  const proxy = createReadonlyProxy(set, ctx, {
    throwOnMethodNames: ['add', 'delete', 'clear'],
  });

  set.forEach(value => {
    // Do not replace elements (would break membership semantics); still freeze deeply.
    freezeInternal(value, ctx);
  });

  defineThrowingMethods(set, ['add', 'delete', 'clear']);
  Object.freeze(set);
  return proxy;
}

function freezeWeakMap(map: WeakMap<object, unknown>, ctx: FreezeContext): WeakMap<object, unknown> {
  const proxy = createReadonlyProxy(map, ctx, {
    throwOnMethodNames: ['set', 'delete'],
  });

  Object.freeze(map);
  return proxy;
}

function freezeWeakSet(set: WeakSet<object>, ctx: FreezeContext): WeakSet<object> {
  const proxy = createReadonlyProxy(set, ctx, {
    throwOnMethodNames: ['add', 'delete'],
  });

  Object.freeze(set);
  return proxy;
}

function freezeDate(date: Date, ctx: FreezeContext): Date {
  const proxy = createReadonlyProxy(date, ctx, {
    throwOnMethodNamePredicate: name => name.startsWith('set'),
  });

  defineThrowingMethodsByPrototype(date, Date.prototype, name => name.startsWith('set'));
  Object.freeze(date);
  return proxy;
}

function freezeArrayBufferView(view: ArrayBufferView, ctx: FreezeContext): ArrayBufferView {
  const isDataView = Object.prototype.toString.call(view) === '[object DataView]';

  defineThrowingMethods(view as unknown as object, ['set', 'copyWithin', 'fill', 'reverse', 'sort', 'write', 'copy']);
  defineThrowingMethodsByPrototype(
    view as unknown as object,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (view as any).constructor?.prototype as object | undefined,
    name => {
      if (name.startsWith('write')) {
        return true;
      }
      if (isDataView && name.startsWith('set')) {
        return true;
      }
      return false;
    }
  );

  const proxy = createReadonlyProxy(view, ctx, {
    throwOnMethodNamePredicate: name => {
      // TypedArray mutators
      if (name === 'set' || name === 'copyWithin' || name === 'fill' || name === 'reverse' || name === 'sort') {
        return true;
      }

      // Buffer mutators (best-effort)
      if (name === 'write' || name === 'copy') {
        return true;
      }
      if (name.startsWith('write')) {
        return true;
      }

      // DataView mutators
      if (isDataView && name.startsWith('set')) {
        return true;
      }

      return false;
    },
  });

  // Some runtimes (notably browsers) throw when calling Object.freeze on typed arrays.
  // The proxy already blocks indexed writes and common mutator methods.
  return proxy;
}

function defineThrowingMethods(target: object, methodNames: string[]): void {
  for (const name of methodNames) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (typeof (target as any)[name] !== 'function') {
        continue;
      }

      Object.defineProperty(target, name, {
        value: () => {
          throw new TypeError('Cannot modify a frozen value');
        },
        configurable: false,
        writable: false,
        enumerable: false,
      });
    } catch {
      // Ignore if defineProperty fails for this target/method.
    }
  }
}

function defineThrowingMethodsByPrototype(target: object, prototype: object | undefined, predicate: (methodName: string) => boolean): void {
  if (!prototype) {
    return;
  }

  for (const key of Object.getOwnPropertyNames(prototype)) {
    if (!predicate(key)) {
      continue;
    }

    defineThrowingMethods(target, [key]);
  }
}

type ReadonlyProxyOptions = {
  throwOnMethodNames?: string[];
  throwOnMethodNamePredicate?: (methodName: string) => boolean;
};

function createReadonlyProxy<T extends object>(target: T, ctx: FreezeContext, options: ReadonlyProxyOptions): T {
  const cached = ctx.cache.get(target);
  if (cached && cached !== target) {
    return cached as T;
  }

  const throwOnMethodNames = new Set(options.throwOnMethodNames ?? []);
  const shouldThrow = (prop: PropertyKey): boolean => {
    if (typeof prop !== 'string') {
      return false;
    }

    if (throwOnMethodNames.has(prop)) {
      return true;
    }

    return options.throwOnMethodNamePredicate ? options.throwOnMethodNamePredicate(prop) : false;
  };

  const proxy = new Proxy(target, {
    defineProperty() {
      throw new TypeError('Cannot modify a frozen value');
    },
    deleteProperty() {
      throw new TypeError('Cannot modify a frozen value');
    },
    set() {
      throw new TypeError('Cannot modify a frozen value');
    },
    setPrototypeOf() {
      throw new TypeError('Cannot modify a frozen value');
    },
    preventExtensions() {
      // Allow Object.isFrozen/Object.preventExtensions checks without throwing.
      try {
        Object.preventExtensions(target);
      } catch {
        // Some exotic objects (e.g. certain ArrayBuffer views) can throw here.
      }
      return true;
    },
    isExtensible() {
      return Object.isExtensible(target);
    },
    get(t, prop, receiver) {
      if (shouldThrow(prop)) {
        return () => {
          throw new TypeError('Cannot modify a frozen value');
        };
      }

      const value = Reflect.get(t, prop, receiver);

      if (typeof value === 'function') {
        // Bind to the real target so built-in methods see the right internal slots.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value.bind(t);
      }

      return value;
    },
  });

  ctx.cache.set(target, proxy);
  return proxy;
}
