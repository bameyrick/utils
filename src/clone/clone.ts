import { isPlainObject } from '../type-predicates/is-plain-object.js';

type InstanceClone<T> = ((value: T) => T) | boolean;

/**
 * Performs a deep clone of the provided value.
 *
 * - Plain objects are deeply cloned by default.
 * - Arrays, Maps, Sets, and typed arrays are deeply cloned.
 * - Class instances are returned as-is unless `instanceClone` is `true` (clone own enumerable
 *   properties while preserving the prototype) or a custom cloner function is provided.
 * - Primitives and functions are returned as-is.
 */
export function clone<T>(value: T, instanceClone: InstanceClone<T> = false): T {
  return instanceClone ? (cloneWith(value, instanceClone as InstanceClone<unknown>) as T) : (cloneFast(value) as T);
}

// ─── Fast path (no instanceClone) ────────────────────────────────────────────

function cloneFast(value: unknown): unknown {
  if (value === null || value === undefined) {
    return value;
  }

  const t = typeof value;

  if (t === 'symbol') {
    return cloneSymbol(value as symbol);
  }

  if (t !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return cloneArrayFast(value);
  }

  // Check for plain objects before the instanceof chain — most common non-array object type.
  const proto = Object.getPrototypeOf(value) as object | null;
  if (proto === Object.prototype || proto === null) {
    return cloneObjectFast(value as Record<PropertyKey, unknown>, proto);
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    return cloneRegExp(value);
  }

  if (value instanceof Map) {
    return cloneMapFast(value as Map<unknown, unknown>);
  }

  if (value instanceof Set) {
    return cloneSetFast(value as Set<unknown>);
  }

  if (value instanceof Error) {
    return cloneError(value);
  }

  if (Buffer.isBuffer(value)) {
    return cloneBuffer(value);
  }

  if (ArrayBuffer.isView(value)) {
    return cloneTypedArray(value);
  }

  // Non-standard prototype — check if it's still plain-ish
  return isPlainObject(value) ? cloneObjectFast(value as Record<PropertyKey, unknown>, proto) : value;
}

function cloneObjectFast(source: Record<PropertyKey, unknown>, proto: object | null): unknown {
  // For proto === Object.prototype / null, for..in only visits own enumerable string keys
  // (Object.prototype has no enumerable properties) so hasOwnProperty is not needed, and
  // we avoid the array allocation that Object.keys() would require.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const cloned: Record<PropertyKey, unknown> = proto === Object.prototype ? {} : Object.create(proto);

  for (const k in source) {
    cloned[k] = cloneFast(source[k]);
  }

  const symKeys = Object.getOwnPropertySymbols(source);
  if (symKeys.length) {
    for (let i = 0, len = symKeys.length; i < len; i++) {
      const sym = symKeys[i];
      if (Object.prototype.propertyIsEnumerable.call(source, sym)) {
        (cloned as Record<symbol, unknown>)[sym] = cloneFast((source as Record<symbol, unknown>)[sym]);
      }
    }
  }

  return cloned;
}

function cloneArrayFast(value: unknown[]): unknown[] {
  const { length } = value;
  const cloned = new Array<unknown>(length);

  for (let i = 0; i < length; i++) {
    cloned[i] = cloneFast(value[i]);
  }

  return cloned;
}

function cloneMapFast(value: Map<unknown, unknown>): Map<unknown, unknown> {
  const cloned = new (value.constructor as typeof Map)<unknown, unknown>();

  for (const [k, v] of value) {
    cloned.set(cloneFast(k), cloneFast(v));
  }

  return cloned;
}

function cloneSetFast(value: Set<unknown>): Set<unknown> {
  const cloned = new (value.constructor as typeof Set)<unknown>();

  for (const item of value) {
    cloned.add(cloneFast(item));
  }

  return cloned;
}

// ─── Slow path (with instanceClone) ──────────────────────────────────────────

function cloneWith(value: unknown, instanceClone: InstanceClone<unknown>): unknown {
  if (value === null || value === undefined) {
    return value;
  }

  const t = typeof value;

  if (t === 'symbol') {
    return cloneSymbol(value as symbol);
  }

  if (t !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return cloneArrayWith(value, instanceClone);
  }

  const proto = Object.getPrototypeOf(value) as object | null;
  if (proto === Object.prototype || proto === null) {
    return cloneObjectWith(value as Record<PropertyKey, unknown>, instanceClone, proto);
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    return cloneRegExp(value);
  }

  if (value instanceof Map) {
    return cloneMapWith(value as Map<unknown, unknown>, instanceClone);
  }

  if (value instanceof Set) {
    return cloneSetWith(value as Set<unknown>, instanceClone);
  }

  if (value instanceof Error) {
    return cloneError(value);
  }

  if (Buffer.isBuffer(value)) {
    return cloneBuffer(value);
  }

  if (ArrayBuffer.isView(value)) {
    return cloneTypedArray(value);
  }

  if (isPlainObject(value)) {
    return cloneObjectWith(value as Record<PropertyKey, unknown>, instanceClone, proto);
  }

  return cloneObjectWith(value as Record<PropertyKey, unknown>, instanceClone, proto);
}

function cloneObjectWith(source: Record<PropertyKey, unknown>, instanceClone: InstanceClone<unknown>, proto: object | null): unknown {
  if (typeof instanceClone === 'function') {
    return instanceClone(source);
  }

  if (!instanceClone && proto !== null && proto !== Object.prototype && !isPlainObject(source)) {
    return source;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const cloned: Record<PropertyKey, unknown> = proto === Object.prototype ? {} : Object.create(proto);

  for (const k in source) {
    cloned[k] = cloneWith(source[k], instanceClone);
  }

  const symKeys = Object.getOwnPropertySymbols(source);
  if (symKeys.length) {
    for (let i = 0, len = symKeys.length; i < len; i++) {
      const sym = symKeys[i];
      if (Object.prototype.propertyIsEnumerable.call(source, sym)) {
        (cloned as Record<symbol, unknown>)[sym] = cloneWith((source as Record<symbol, unknown>)[sym], instanceClone);
      }
    }
  }

  return cloned;
}

function cloneArrayWith(value: unknown[], instanceClone: InstanceClone<unknown>): unknown[] {
  const { length } = value;
  const cloned = new Array<unknown>(length);

  for (let i = 0; i < length; i++) {
    cloned[i] = cloneWith(value[i], instanceClone);
  }

  return cloned;
}

function cloneMapWith(value: Map<unknown, unknown>, instanceClone: InstanceClone<unknown>): Map<unknown, unknown> {
  const cloned = new (value.constructor as typeof Map)<unknown, unknown>();

  for (const [k, v] of value) {
    cloned.set(cloneWith(k, instanceClone), cloneWith(v, instanceClone));
  }

  return cloned;
}

function cloneSetWith(value: Set<unknown>, instanceClone: InstanceClone<unknown>): Set<unknown> {
  const cloned = new (value.constructor as typeof Set)<unknown>();

  for (const item of value) {
    cloned.add(cloneWith(item, instanceClone));
  }

  return cloned;
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function cloneRegExp(value: RegExp): RegExp {
  const cloned = new RegExp(value.source, value.flags);
  cloned.lastIndex = value.lastIndex;
  return cloned;
}

function cloneBuffer(value: Buffer): Buffer {
  const cloned = Buffer.allocUnsafe(value.length);
  value.copy(cloned);
  return cloned;
}

function cloneTypedArray(value: ArrayBufferView): ArrayBufferView {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const v = value as any;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return new v.constructor(v.buffer.slice(v.byteOffset, v.byteOffset + v.byteLength)) as ArrayBufferView;
}

function cloneError(value: Error): Error {
  const cloned = new (value.constructor as typeof Error)(value.message);
  cloned.stack = value.stack;

  for (const key of Object.getOwnPropertyNames(value)) {
    if (key !== 'message' && key !== 'stack') {
      Object.defineProperty(cloned, key, Object.getOwnPropertyDescriptor(value, key)!);
    }
  }

  return cloned;
}

// Precomputed at module load — avoids scanning Object.getOwnPropertyNames(Symbol) on every clone.
const WELL_KNOWN_SYMBOLS: ReadonlySet<symbol> = new Set(
  Object.getOwnPropertyNames(Symbol)
    .map(k => (Symbol as unknown as Record<string, unknown>)[k])
    .filter((v): v is symbol => typeof v === 'symbol')
);

function cloneSymbol(value: symbol): symbol {
  return WELL_KNOWN_SYMBOLS.has(value) ? value : Symbol(value.description);
}
