# @qntm-code/utils

A collection of useful utility functions with associated TypeScript types.

[![GitHub release](https://img.shields.io/github/release/bameyrick/utils.svg)](https://github.com/bameyrick/utils/releases)
[![Tests](https://github.com/bameyrick/utils/actions/workflows/tests.yml/badge.svg)](https://github.com/bameyrick/utils/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/bameyrick/utils/branch/main/graph/badge.svg)](https://codecov.io/gh/bameyrick/utils)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=bameyrick_utils&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=bameyrick_utils)

- [@qntm-code/utils](#qntm-codeutils)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Documentation](#documentation)
    - [Type Predicates](#type-predicates)
      - [isNullOrUndefined](#isnullorundefined)
      - [isBoolean](#isboolean)
      - [isDate](#isdate)
      - [isEmpty](#isempty)
      - [isNaNStrict](#isnanstrict)
      - [isNumber](#isnumber)
      - [isObject](#isobject)
      - [isString](#isstring)
      - [isEqual](#isequal)
        - [isEqual performance comparison](#isequal-performance-comparison)
        - [EqualityType](#equalitytype)
        - [IndividualEqualityType](#individualequalitytype)
      - [isRegExp](#isregexp)
      - [isArguments](#isarguments)
      - [isBuffer](#isbuffer)
      - [isError](#iserror)
      - [isGeneratorObject](#isgeneratorobject)
      - [isPlainObject](#isplainobject)
      - [isReactElement](#isreactelement)
      - [typeOf](#typeof)
    - [clone](#clone)
      - [instanceClone](#instanceclone)
      - [clone performance comparison](#clone-performance-comparison)
    - [merge](#merge)
      - [merge options](#merge-options)
        - [arrayMerge](#arraymerge)
        - [isMergableObject](#ismergableobject)
        - [customMerge](#custommerge)
      - [Merge performance comparison](#merge-performance-comparison)
    - [Strings](#strings)
      - [capitalise](#capitalise)
        - [CapitaliseOptions](#capitaliseoptions)
    - [CapitaliseFirst](#capitalisefirst)
      - [CapitaliseLast](#capitaliselast)
    - [kebabToPascal](#kebabtopascal)
    - [difference](#difference)
    - [formatTime](#formattime)
      - [FormatTimeOptions](#formattimeoptions)
    - [insertAtIndex](#insertatindex)
    - [Math](#math)
      - [sum](#sum)
      - [randomNumberBetweenRange](#randomnumberbetweenrange)
    - [Async helpers](#async-helpers)
      - [asyncEvery](#asyncevery)
      - [asyncFilter](#asyncfilter)
      - [asyncForEach](#asyncforeach)
      - [asyncSome](#asyncsome)
      - [delay](#delay)
    - [Date helpers](#date-helpers)
      - [convertTimeUnit](#converttimeunit)
      - [msToUnit](#mstounit)
      - [unitToMs](#unittoms)
      - [compareDates](#comparedates)
      - [DateComparator](#datecomparator)
      - [TimeUnit](#timeunit)
      - [isSameDate](#issamedate)
      - [addToDate](#addtodate)
        - [Special considerations for months and years](#special-considerations-for-months-and-years)
      - [subtractFromDate](#subtractfromdate)
      - [getToday](#gettoday)
      - [getWeekOfYear](#getweekofyear)
      - [getMonthNames](#getmonthnames)
        - [GetMonthNamesOptions](#getmonthnamesoptions)
      - [getEndOfDay](#getendofday)
      - [getEndOfHour](#getendofhour)
      - [getEndOfMinute](#getendofminute)
      - [getEndOfMonth](#getendofmonth)
      - [getEndOfSecond](#getendofsecond)
      - [getEndOfWeek](#getendofweek)
      - [getEndOfYear](#getendofyear)
      - [getStartOfDay](#getstartofday)
      - [getStartOfHour](#getstartofhour)
      - [getStartOfMinute](#getstartofminute)
      - [getStartOfMonth](#getstartofmonth)
      - [getStartOfSecond](#getstartofsecond)
      - [getStartOfWeek](#getstartofweek)
      - [getStartOfYear](#getstartofyear)
      - [setEndOfDay](#setendofday)
      - [setEndOfHour](#setendofhour)
      - [setEndOfMinute](#setendofminute)
      - [setEndOfMonth](#setendofmonth)
      - [setEndOfSecond](#setendofsecond)
      - [setEndOfWeek](#setendofweek)
      - [setEndOfYear](#setendofyear)
      - [setStartOfDay](#setstartofday)
      - [setStartOfHour](#setstartofhour)
      - [setStartOfMinute](#setstartofminute)
      - [setStartOfMonth](#setstartofmonth)
      - [setStartOfSecond](#setstartofsecond)
      - [setStartOfWeek](#setstartofweek)
      - [setStartOfYear](#setstartofyear)
    - [DOM helpers](#dom-helpers)
      - [getComputedStyleAsNumber](#getcomputedstyleasnumber)
      - [getElementHeight](#getelementheight)
      - [getElementWidth](#getelementwidth)
      - [getAncestors](#getancestors)
      - [getNonInlineParent](#getnoninlineparent)
      - [getPositionedParent](#getpositionedparent)
      - [getScrollParent](#getscrollparent)
      - [isDisplayInline](#isdisplayinline)
      - [isVisible](#isvisible)
    - [Types](#types)
      - [Dictionary](#dictionary)
    - [Constants](#constants)
      - [isJsdom](#isjsdom)
  - [Attribution](#attribution)

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save @qntm-code/utils
```

### yarn

```bash
yarn add @qntm-code/utils
```

## Documentation

This documentation is written in TypeScript, however this library works fine in vanilla JavaScript too.

### Type Predicates

---

#### isNullOrUndefined

Determines whether a given value is null or undefined.

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isNullOrUndefined } from '@qntm-code/utils';

const value = getTheValue();

if (isNullOrUndefined(value)) {
  // Do something
}
```

---

#### isBoolean

Checks if a given value is a boolean.

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isBoolean } from '@qntm-code/utils';

const value = getBoolean();

if (isBoolean(value)) {
  // Do something
}
```

---

#### isDate

Checks if a given value is a Date object.

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isDate } from '@qntm-code/utils';

const value = getDate();

if (isDate(value)) {
  // Do something
}
```

---

#### isEmpty

Checks if a given value is empty.

Method arguments:

| Parameter | Type                       | Optional | Description        |
| --------- | -------------------------- | -------- | ------------------ |
| value     | string, Array<any>, object | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isEmpty } from '@qntm-code/utils';

const value: string = getName();

if (isEmpty(value)) {
  // Do something
}
```

---

#### isNaNStrict

Determines whether a given value is a `NaN` instance

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isNaNStrict } from '@qntm-code/utils';

const value = getTheValue();

if (isNaNStrict(value)) {
  // Do something
}
```

---

#### isNumber

Determines whether a given value is a number

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isNumber } from '@qntm-code/utils';

const value = getTheValue();

if (isNumber(value)) {
  // Do something
}
```

---

#### isObject

Determines whether a given value is an object

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isObject } from '@qntm-code/utils';

const value = getTheValue();

if (isObject(value)) {
  // Do something
}
```

---

#### isString

Determines whether a given value is a string

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isString } from '@qntm-code/utils';

const value = getTheValue();

if (isString(value)) {
  // Do something
}
```

---

#### isEqual

Performs a deep comparison between two values to determine if they are equivalent.

**Note:** This method supports comparing nulls, undefineds, booleans, numbers, strings, Dates, objects, Functions, Arrays, RegExs, Maps, Sets, Typed Arrays, and [Moments](https://momentjs.com).

Object objects are compared by their own, not inherited, enumerable properties.

Functions and DOM nodes are compared by strict equality, i.e. ===.

The order of the array items must be the same for the arrays to be equal.

Method arguments:

| Parameter | Type                          | Optional | Description                 |
| --------- | ----------------------------- | -------- | --------------------------- |
| a         | [EqualityType](#equalitytype) | false    | The first value to compare  |
| b         | [EqualityType](#equalitytype) | false    | The second value to compare |

Return type: `boolean`

**Example:**

```typescript
import { isEqual } from '@qntm-code/utils';

const a: Array<number> = getSensorAReadings();
const b: Array<number> = getSensorBReadings();

if (isEqual(a, b)) {
  // Do a thing
}
```

##### isEqual performance comparison

The following benchmarks go through the [isEqual test suite](tests/isEqualTestDefinitions.spec.ts) and were run on a 2023 Macbook Pro with a M2 Pro chip and 32GB of RAM.

| Package                  | Operations per second |
| ------------------------ | --------------------- |
| @qntm-code/utils.isEqual | 218781                |
| fast-deep-equal          | 192329                |
| underscore.isEqual       | 65518                 |
| util.isDeepStrictEqual   | 39740                 |
| lodash.isEqual           | 18842                 |
| ramda.equals             | 10231                 |
| assert.deepStrictEqual   | 215                   |

To run the benchmarks yourself, clone the repo, install the dependencies and run `yarn benchmark`.

##### EqualityType

An EqualityType can be an [IndividualEqualityType](#individualequalitytype) or an array of mixed [IndividualEqualityTypes](#individualequalitytype)

##### IndividualEqualityType

The equality types allowed are:

- `null`
- `undefined`
- `boolean`
- `number`
- `string`
- `Date`
- `object`
- `Function`

---

#### isRegExp

Determines whether a given value is a regular expression

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isRegExp } from '@qntm-code/utils';

const value = getTheValue();

if (isRegExp(value)) {
  // Do something
}
```

---

#### isArguments

Determines whether a given value is an arguments object

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isArguments } from '@qntm-code/utils';

const value = getTheValue();

if (isArguments(value)) {
  // Do something
}
```

---

#### isBuffer

Determines whether a given value is a buffer

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isBuffer } from '@qntm-code/utils';

const value = getTheValue();

if (isBuffer(value)) {
  // Do something
}
```

---

#### isError

Determines whether a given value is an error

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isError } from '@qntm-code/utils';

const value = getTheValue();

if (isError(value)) {
  // Do something
}
```

#### isGeneratorObject

Determines whether a given value is a generator object

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isGeneratorObject } from '@qntm-code/utils';

const value = getTheValue();

if (isGeneratorObject(value)) {
  // Do something
}
```

---

#### isPlainObject

Determines whether a given value is a plain object

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isPlainObject } from '@qntm-code/utils';

const value = getTheValue();

if (isPlainObject(value)) {
  // Do something
}
```

---

#### isReactElement

Determines whether a given value is a React element

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example:**

```typescript
import { isReactElement } from '@qntm-code/utils';

const value = getTheValue();

if (isReactElement(value)) {
  // Do something
}
```

---

#### typeOf

Returns the type of a given value

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `ValueType` | `string`

**Example:**

```typescript
import { typeOf, ValueType } from '@qntm-code/utils';

const value = getTheValue();

if (typeOf(value) === ValueType.string) {
  // Do something
}
```

---

### clone

Recursively (deep) clones native types, like Object, Array, RegExp, Date, Map, Set, Symbol, Error, [moment](https://momentjs.com/) as well as primitives.

Method arguments:

| Parameter     | Type                           | Optional | Description                             |
| ------------- | ------------------------------ | -------- | --------------------------------------- |
| value         | any                            | false    | The value to clone                      |
| instanceClone | `((value: T) => T) or boolean` | true     | [See description below](#instanceclone) |

Return type: `T`

#### instanceClone

This paramater specifies whether or not to clone instances (objects that are from a custom class or are not created by the Object constructor. This value may be true or the function use for cloning instances.

When an instanceClone function is provided, it will be invoked to clone objects that are not "plain" objects (as defined by [isPlainObject](#isplainobject)). If instanceClone is not specified, the function will not attempt to clone non-plain objects, and will simply copy the object reference.

**Example:**

```typescript
import { clone } from '@qntm-code/utils';

const value: number[] = [1, 2, 3];
const clonedValues = clone(value);
```

#### clone performance comparison

The following benchmarks were run on a 2023 Macbook Pro with a M2 Pro chip and 32GB of RAM.

| Package                | Operations per second |
| ---------------------- | --------------------- |
| @qntm-code/utils.clone | 127338                |
| clone-deep             | 115475                |
| lodash.cloneDeep       | 73027                 |

---

### merge

Merges two objects x and y deeply, returning a new merged object with the elements from both x and y.

If an element at the same key is present for both x and y, the value from y will appear in the result.

Merging creates a new object, so that neither x or y is modified.

Note: By default, arrays are merged by concatenating them.

Method arguments:

| Parameter | Type | Optional | Description                             |
| --------- | ---- | -------- | --------------------------------------- |
| x         | any  | false    | The first object to merge               |
| y         | any  | false    | The second object to merge              |
| options   | any  | true     | [See description below](#merge-options) |

#### merge options

##### arrayMerge

There are multiple ways to merge two arrays, below are a few examples but you can also create your own custom function.

Your `arrayMerge` function will be called with three arguments: a `target` array, the `source` array, and an `options` object with these properties:

- `isMergeableObject(value)`
- `cloneUnlessOtherwiseSpecified(value, options)`

**example: overwrite target array:**

Overwrites the existing array values completely rather than concatenating them:

```typescript
import { merge } from '@qntm-code/utils';

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

merge([1, 2, 3], [3, 2, 1], { arrayMerge: overwriteMerge }); // => [3, 2, 1]
```

**example: combine arrays:**

Combines objects at the same index in the two arrays.

```typescript
import { merge } from '@qntm-code/utils';

const combineMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
};

merge([{ a: true }], [{ b: true }, 'ah yup'], { arrayMerge: combineMerge }); // => [{ a: true, b: true }, 'ah yup']
```

##### isMergableObject

By default, `merge` clones every property from almost every kind of object.

You may not want this, if your objects are of special types, and you want to copy the whole object instead of just copying its properties.

You can accomplish this by passing in a function for the `isMergeableObject` option.

If you only want to clone properties of plain objects, and ignore all "special" kinds of instantiated objects, you probably want to drop in [`isPlainObject`](#isplainobject).

```typescript
import { merge, isPlainObject } from '@qntm-code/utils';

function SuperSpecial() {
  this.special = 'oh yeah man totally';
}

const instantiatedSpecialObject = new SuperSpecial();

const target = {
  someProperty: {
    cool: 'oh for sure',
  },
};

const source = {
  someProperty: instantiatedSpecialObject,
};

const defaultOutput = merge(target, source);

defaultOutput.someProperty.cool; // => 'oh for sure'
defaultOutput.someProperty.special; // => 'oh yeah man totally'
defaultOutput.someProperty instanceof SuperSpecial; // => false

const customMergeOutput = merge(target, source, {
  isMergeableObject: isPlainObject,
});

customMergeOutput.someProperty.cool; // => undefined
customMergeOutput.someProperty.special; // => 'oh yeah man totally'
customMergeOutput.someProperty instanceof SuperSpecial; // => true
```

##### customMerge

Specifies a function which can be used to override the default merge behaviour for a property, based on the property name.

The `customMerge` function will be passed the key for each property, and should return the function which should be used to merge the values for that property.

It may also return undefined, in which case the default merge behaviour will be used.

```typescript
const alex = {
  name: {
    first: 'Alex',
    last: 'Alexson',
  },
  pets: ['Cat', 'Parrot'],
};

const tony = {
  name: {
    first: 'Tony',
    last: 'Tonison',
  },
  pets: ['Dog'],
};

const mergeNames = (nameA, nameB) => `${nameA.first} and ${nameB.first}`;

const options = {
  customMerge: key => {
    if (key === 'name') {
      return mergeNames;
    }
  },
};

const result = merge(alex, tony, options);

result.name; // => 'Alex and Tony'
result.pets; // => ['Cat', 'Parrot', 'Dog']
```

#### Merge performance comparison

The following benchmarks go through the [merge test suite](tests/mergeTestDefinitions.spec.ts) and were run on a 2023 Macbook Pro with a M2 Pro chip and 32GB of RAM.

| Package                | Operations per second |
| ---------------------- | --------------------- |
| @qntm-code/utils.merge | 28332                 |
| deepmerge              | 23497                 |

---

### Strings

---

#### capitalise

Capitalises the characters of a provided string between the given start and end indexes.

Method arguments:

| Parameter | Type                         | Optional | Description                         |
| --------- | ---------------------------- | -------- | ----------------------------------- |
| value     | string                       | false    | The string to capitalise            |
| options   | `Partial<CapitaliseOptions>` | true     | The options to use for capitalising |

Return type: `string`

**Example:**

```typescript
import { capitalise } from '@qntm-code/utils';

const value = 'hello world';

const capitalised = capitalise(value, { start: 0, end: 5 });

// capitalised = 'HELL0 world'
```

##### CapitaliseOptions

| Parameter | Type   | Default          | Description                        |
| --------- | ------ | ---------------- | ---------------------------------- |
| start     | number | 0                | The start index to capitalise from |
| end       | number | length of string | The end index to capitalise to     |

---

### CapitaliseFirst

Capitalises the first n characters of a string.

Method arguments:

| Parameter | Type   | Optional | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| value     | string | false    | The string to capitalise               |
| number    | number | false    | The number of characters to capitalise |

Return type: `string`

**Example:**

```typescript
import { capitaliseFirst } from '@qntm-code/utils';

const value = 'hello world';

const capitalised = capitaliseFirst(value, 2);

// capitalised = 'HEllo world'
```

---

#### CapitaliseLast

Capitalises the last n characters of a string.

Method arguments:

| Parameter | Type   | Optional | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| value     | string | false    | The string to capitalise               |
| number    | number | false    | The number of characters to capitalise |

Return type: `string`

**Example:**

```typescript
import { capitaliseLast } from '@qntm-code/utils';

const value = 'hello world';

const capitalised = capitaliseLast(value, 2);

// capitalised = 'hello worLD'
```

---

### kebabToPascal

Converts a kebab-case word to PascalCase.

Method arguments:

| Parameter | Type   | Optional | Description           |
| --------- | ------ | -------- | --------------------- |
| value     | string | false    | The string to convert |

Return type: `string`

**Example:**

```typescript
import { kebabToPascal } from '@qntm-code/utils';

const value = 'hello-world';

const pascal = kebabToPascal(value);

// pascal = 'HelloWorld'
```

---

### difference

Creates an array of array values not included in the other given array using isEqual for equality comparisons. The order and references of result values are determined by the first array.

Method arguments:

| Parameter | Type       | Optional | Description                |
| --------- | ---------- | -------- | -------------------------- |
| array     | Array<any> | false    | The array to check         |
| values    | Array<any> | false    | The array to check against |

Return type: `Array<any>`

**Example:**

```typescript
import { difference } from '@qntm-code/utils';

const diff = difference([1, 2], [2, 3]);
// returns [1]
```

---

### formatTime

Formats a given time to a human readable string.

Method arguments:

| Parameter | Type                                    | Optional | Description                       |
| --------- | --------------------------------------- | -------- | --------------------------------- |
| time      | number                                  | false    | The time to format                |
| options   | [FormatTimeOptions](#formattimeoptions) | true     | The options to use for formatting |

Return type: `string`

**Example:**

```typescript
import { formatTime } from '@qntm-code/utils';

const formattedTime = formatTime(71000, {
  hourSuffix: ' HOURS',
  minuteSuffix: ' MINUTES',
  secondSuffix: ' SECONDS',
});

// formattedTime = '00 HOUR 01 MINUTE 11 SECONDS'
```

#### FormatTimeOptions

| Parameter            | Type                  | Default               | Description                                                                           |
| -------------------- | --------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| forceAllUnits        | boolean               | true                  | Whether to force all units to be displayed                                            |
| timeUnit             | [TimeUnit](#timeunit) | TimeUnit.Milliseconds | The time unit that is being provided                                                  |
| secondsDecimalPlaces | number                | 0                     | The number of decimal places to display for seconds                                   |
| padDecimals          | boolean               | false                 | Whether to pad decimals with 0s to match the number provided for secondsDecimalPlaces |
| hourSuffix           | string                | `h`                   | The suffix to use for hours                                                           |
| minuteSuffix         | string                | `m`                   | The suffix to use for minutes                                                         |
| secondSuffix         | string                | `s`                   | The suffix to use for seconds                                                         |

---

### insertAtIndex

Inserts a string value at a given index in a source string.

Method arguments:

| Parameter | Type   | Optional | Description            |
| --------- | ------ | -------- | ---------------------- |
| source    | string | false    | The source string      |
| value     | string | false    | The value to insert    |
| index     | number | false    | The index to insert at |

Return type: `string`

```typescript
import { insertAtIndex } from '@qntm-code/utils';

insertAtIndex('<strong>', '/', 1);

// returns '</strong>'
```

---

### Math

---

#### sum

Calculates the sum of an array of numbers.

| Parameter | Type          | Optional | Description                 |
| --------- | ------------- | -------- | --------------------------- |
| values    | Array<number> | false    | The array of numbers to sum |

Return type: `number`

**Example:**

```typescript
import { sum } from '@qntm-code/utils';

const values: Array<number> = [1, 2, 3, 4, 5];

const total: number = sum(values);
```

---

#### randomNumberBetweenRange

Returns a random whole number between a given range

Method arguments:

| Parameter | Type   | Optional | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| min       | number | false    | The minimum number the function can return |
| max       | number | false    | The maximum number the function can return |

Return type: `number`

**Example:**

```typescript
import { randomNumberBetweenRange } from '@qntm-code/utils';

const random = randomNumberBetweenRange(2, 10);
```

---

### Async helpers

---

#### asyncEvery

Allows you to run Array.every() with an async predicate function and await the result.

Method arguments:

| Parameter | Type     | Optional | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| items     | Array<T> | false    | The items to iterate over                 |
| predicate | Function | false    | A predicate function to run for each item |

Callback arguments:

| Parameter | Type     | Optional | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| item      | T        | true     | The current item from the loop      |
| index     | number   | true     | The index of the given in the array |
| array     | Array<T> | true     | The array provided                  |

Return type:

```typescript
Promise<boolean>;
```

**Example:**

```typescript
import { asyncEvery } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  // Array of items to iterate over
  const items: Array<string> = ['a', 'b', 'c'];

  const result = await asyncEvery(items, async item => await someAsynchronousOperation(item));

  functionToRunWhenAllItemsAreProcessed(result);
}
```

---

#### asyncFilter

Allows you to run Array.filter() with an async predicate function and await the result.

Method arguments:

| Parameter | Type     | Optional | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| items     | Array<T> | false    | The items to iterate over                 |
| predicate | Function | false    | A predicate function to run for each item |

Callback arguments:

| Parameter | Type     | Optional | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| item      | T        | true     | The current item from the loop      |
| index     | number   | true     | The index of the given in the array |
| array     | Array<T> | true     | The array provided                  |

Return type:

```typescript
Promise<T[]>;
```

**Example:**

```typescript
import { asyncFilter } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  // Array of items to iterate over
  const items: Array<string> = ['a', 'b', 'c'];

  const results = await asyncFilter(items, async item => await someAsynchronousOperation(item));

  functionToRunWhenAllItemsAreProcessed(results);
}
```

---

#### asyncForEach

Allows you to iterate over an array asynchronously.

Method arguments:

| Parameter | Type     | Optional | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| items     | Array<T> | false    | The items to iterate over                |
| callback  | Function | false    | A callback function to run for each item |

Callback arguments:

| Parameter | Type     | Optional | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| item      | T        | true     | The current item from the loop      |
| index     | number   | true     | The index of the given in the array |
| array     | Array<T> | true     | The array provided                  |

Return type:

```typescript
Promise<void>;
```

**Example:**

```typescript
import { asyncForEach } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  // Array of items to iterate over
  const items: Array<string> = ['a', 'b', 'c'];

  await asyncForEach(items, async item => await someAsynchronousOperation(item));

  functionToRunWhenAllItemsAreProcessed();
}
```

---

#### asyncSome

Allows you to run Array.some() with an async predicate function and await the result.

Method arguments:

| Parameter | Type     | Optional | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| items     | Array<T> | false    | The items to iterate over                 |
| predicate | Function | false    | A predicate function to run for each item |

Callback arguments:

| Parameter | Type     | Optional | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| item      | T        | true     | The current item from the loop      |
| index     | number   | true     | The index of the given in the array |
| array     | Array<T> | true     | The array provided                  |

Return type:

```typescript
Promise<boolean>;
```

**Example:**

```typescript
import { asyncSome } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  // Array of items to iterate over
  const items: Array<string> = ['a', 'b', 'c'];

  const result = await asyncSome(items, async item => await someAsynchronousOperation(item));

  functionToRunWhenAllItemsAreProcessed(result);
}
```

---

#### delay

Delays an async function using await given an optionally provided duration.

Method arguments:

| Parameter | Type   | Optional | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| duration  | number | true     | The number of milliseconds to delay by |

Return type:

```typescript
Promise<void>;
```

**Example:**

```typescript
import { delay } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  const value = calculateAThing();

  await delay(200);

  operateOnCalculatedValue(value);
}
```

### Date helpers

---

#### convertTimeUnit

Converts a value of a given [TimeUnit](#timeunit) into another [TimeUnit](#timeunit).

Method arguments:

| Parameter  | Type                                                          | Optional | Description                                     |
| ---------- | ------------------------------------------------------------- | -------- | ----------------------------------------------- |
| value      | number                                                        | false    | The value to convert                            |
| sourceUnit | [TimeUnit](#timeunit) (Excluding Month/Months and Year/Years) | false    | The time unit the provided value is in          |
| resultUnit | [TimeUnit](#timeunit) (Excluding Month/Months and Year/Years) | false    | The time unit you wish to convert your value to |

Return type: `number`

**Example:**

```typescript
import { convertTimeUnit, TimeUnit } from '@qntm-code/utils';

const weeks: number = 24;
const minutes: number = convertTimeUnit(weeks, TimeUnit.Weeks, TimeUnit.Minutes);
```

**Vanilla JS Example:**

```javascript
import { convertTimeUnit } from '@qntm-code/utils';

const weeks = 24;
const minutes = convertTimeUnit(weeks, 'weeks', 'minutes');
```

---

#### msToUnit

Converts milliseconds into a [TimeUnit](#timeunit).

Method arguments:

| Parameter | Type                                                          | Optional | Description                                     |
| --------- | ------------------------------------------------------------- | -------- | ----------------------------------------------- |
| value     | number                                                        | false    | The value in milliseconds                       |
| unit      | [TimeUnit](#timeunit) (Excluding Month/Months and Year/Years) | false    | The time unit you wish to convert your value to |

Return type: `number`

**Example:**

```typescript
import { msToUnit, TimeUnit } from '@qntm-code/utils';

const milliseconds: number = 4567876;
const hours: number = msToUnit(milliseconds, TimeUnit.Hours);
```

**Example:**

```javascript
import { msToUnit } from '@qntm-code/utils';

const milliseconds = 4567876;
const hours = msToUnit(milliseconds, 'hours');
```

---

#### unitToMs

Converts a [TimeUnit](#timeunit) into milliseconds.

Method arguments:

| Parameter | Type                                                          | Optional | Description                             |
| --------- | ------------------------------------------------------------- | -------- | --------------------------------------- |
| value     | number                                                        | false    | The value to convert                    |
| unit      | [TimeUnit](#timeunit) (Excluding Month/Months and Year/Years) | false    | The time unit of the value you provided |

Return type: `number`

**Example:**

```typescript
import { unitToMs, TimeUnit } from '@qntm-code/utils';

const days: number = 10;
const milliseconds: number = unitToMs(days, TimeUnit.Days);
```

**Example:**

```javascript
import { unitToMs } from '@qntm-code/utils';

const days = 10;
const milliseconds = unitToMs(days, 'days');
```

---

#### compareDates

Determines if date a is before/before or same/same/after or same/or after to date b. If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year, or if passing in day will check day, month, and year.

| Parameter                           | Type                              | Optional | Description                               |
| ----------------------------------- | --------------------------------- | -------- | ----------------------------------------- |
| a                                   | Date                              | false    | The first date to compare                 |
| comparator                          | [DateComparator](#datecomparator) | false    | The comparator to use for the comparison  |
| b                                   | Date                              | false    | The second date to compare                |
| unit                                | [TimeUnit](#timeunit)             | true     | The time unit to limit the comparison to. |
| Defaults to milliseconds if omitted |

Return type: `boolean`

**Example:**

```typescript
import { compareDates, DateComparator, TimeUnit } from '@qntm-code/utils';

const a: Date = new Date(2023, 0, 1, 12, 0, 0, 0);
const b: Date = new Date(2023, 0, 1, 9, 0, 1, 12);

compareDates(a, DateComparator.Before, b, TimeUnit.Year); // false
compareDates(a, DateComparator.BeforeOrSame, b, TimeUnit.Day); // true
compareDates(a, DateComparator.Same, b, TimeUnit.Month); // true
compareDates(a, DateComparator.AfterOrSame, b, TimeUnit.Hour); // true
compareDates(a, DateComparator.After, b, TimeUnit.Minute); // false
```

---

#### DateComparator

A TypeScript enum of available options to provide to date comparison functions. For vanilla JS just use the string values from the value column.

| Enum Key     | Value |
| ------------ | ----- |
| Before       | `<`   |
| BeforeOrSame | `<=`  |
| Same         | `===` |
| AfterOrSame  | `>=`  |
| After        | `>`   |

#### TimeUnit

A TypeScript enum of available options to provide to time unit conversion functions. For vanilla JS just use the string values from the value column.

| Enum Key     | Value          |
| ------------ | -------------- |
| Millisecond  | `millisecond`  |
| Milliseconds | `milliseconds` |
| Second       | `second`       |
| Seconds      | `seconds`      |
| Minute       | `minute`       |
| Minutes      | `minutes`      |
| Hour         | `hour`         |
| Hours        | `hours`        |
| Day          | `day`          |
| Days         | `days`         |
| Week         | `week`         |
| Weeks        | `weeks`        |
| Month        | `month`        |
| Months       | `months`       |
| Year         | `year`         |
| Years        | `years`        |

---

#### isSameDate

Determines if two dates are the same. If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

When including a second parameter, it will match all units equal or larger. For example, if passing in month will check month and year, or if passing in day will check day, month, and year.

Method arguments:

| Parameter | Type                  | Optional | Description                                                                   |
| --------- | --------------------- | -------- | ----------------------------------------------------------------------------- |
| a         | Date                  | false    | The first date to compare                                                     |
| b         | Date                  | false    | The second date to compare                                                    |
| unit      | [TimeUnit](#timeunit) | true     | The time unit to limit the comparison to. Defaults to milliseconds if omitted |

Return type: `boolean`

**Example:**

```typescript
import { isSameDate, TimeUnit } from '@qntm-code/utils';

const a: Date = new Date(2023, 0, 1, 12, 0, 0, 0);
const b: Date = new Date(2023, 0, 1, 9, 0, 1, 12);
const c: Date = new Date(2023, 6, 1, 0, 0, 0, 0);

if (isSameDate(a, b)) {
  // This will not run as the dates are not the same
}

if (isSameDate(a, b, TimeUnit.Day)) {
  // This will run as the dates are the same day
}

if (isSameDate(a, b, TimeUnit.Hour)) {
  // This will not run as the dates are not the same hour
}

if (isSameDate(a, c, TimeUnit.Day)) {
  // This will not run because even though the dates are the same day, the months are not the same
}
```

#### addToDate

Returns a new date object with a given amount of a given [TimeUnit](#timeunit) added to it.

| Parameter | Type                  | Description        |
| --------- | --------------------- | ------------------ |
| date      | Date                  | The date to add to |
| amount    | any                   | The amount to add  |
| unit      | [TimeUnit](#timeunit) | The unit to add    |

**Example:**

```typescript
import { addToDate, TimeUnit } from '@qntm-code/utils';

const date: Date = new Date();

const thisTimeTomorrow: Date = addToDate(date, 1 TimeUnit.Day);
```

##### Special considerations for months and years

If the day of the month on the original date is greater than the number of days in the final month, the day of the month will change to the last day in the final month.

```typescript
import { addToDate, TimeUnit } from '@qntm-code/utils';

const date: Date = new Date('2023-01-31'); // 31 January

const nextMonth: Date = addToDate(date, 1, TimeUnit.Month); // 28 February
```

There are also special considerations to keep in mind when adding time that crosses over daylight saving time. If you are adding years, months, weeks, or days, the original hour will always match the added hour.

Adding a month will add the specified number of months to the date.

```typescript
const date = new Date('2023-02-28'); // February 28
const newDate = addToDate(date, 1, TimeUnit.Month); // March 28
```

```typescript
const date = new Date('2023-03-25T06:00:00.000Z'); // The day before BST in the UK
date.getHours(); // 6
const newDate = addToDate(date, 1, TimeUnit.Day).getHours(); // 6
```

If you are adding hours, minutes, seconds, or milliseconds, the assumption is that you want precision to the hour, and will result in a different hour.

```typescript
const date = new Date('2023-03-25T06:00:00.000Z'); // The day before BST in the UK
date.getHours(); // 6
const newDate = addToDate(date, 24, TimeUnit.Hours).getHours(); // 7
```

---

#### subtractFromDate

Returns a new date object with a given amount of a given [TimeUnit](#timeunit) subracted from it.

This is exactly the same as moment#add, only instead of [addToDate](#addtodate), it subtracts time.

| Parameter | Type                  | Description               |
| --------- | --------------------- | ------------------------- |
| date      | Date                  | The date to subtract from |
| amount    | any                   | The amount to subtract    |
| unit      | [TimeUnit](#timeunit) | The unit to subtract      |

**Example:**

```typescript
import { subtractFrom, TimeUnit } from '@qntm-code/utils';

const date: Date = new Date();

const thisTimeTomorrow: Date = subtractFrom(date, 1 TimeUnit.Day);
```

#### getToday

Gets a Date for the start of the given day.

Return type: `Date`

**Example:**

```typescript
import { getToday } from '@qntm-code/utils';

const today: Date = getToday();
```

---

#### getWeekOfYear

Gets the week number of the year for the given date. It will use today's date if no date is provided.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `number`

**Example:**

```typescript
import { getWeekOfYear } from '@qntm-code/utils';

const weekNumber: number = getWeekOfYear(new Date('2023-12-30')); // 52
```

---

#### getMonthNames

Gets the month names for the provided locale.

| Parameter | Type                                          | Optional                                       | Default value                                   | Description |
| --------- | --------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- | ----------- |
| options   | [GetMonthNamesOptions](#getmonthnamesoptions) | { locale: navigator.language, format: 'long' } | The options to use when getting the month names |

Return type: `Array<string>`

**Example:**

```typescript
import { getMonthNames, GetMonthNamesOptions } from '@qntm-code/utils';

const options: GetMonthNamesOptions = {
  locale: 'en-GB',
  format: 'short',
};

const monthNames: Array<string> = getMonthNames(options); // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', Dec']
```

##### GetMonthNamesOptions

| Parameter | Type   | Optional | Default value      | Description                                                                                                    |
| --------- | ------ | -------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| locale    | string | true     | navigator.language | The locale to use when getting the month names                                                                 |
| format    | string | true     | `long`             | The format to use when getting the month names. Options are `numeric`, `2-digit`, `long`, `short`, or `narrow` |

---

#### getEndOfDay

Takes an optional date and returns a new Date object set to the end of the given/current day.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfDay } from '@qntm-code/utils';

const endOfCurrentDay: Date = getEndOfDay();
```

---

#### getEndOfHour

Takes an optional date and returns a new Date object set to the end of the given/current hour.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfHour } from '@qntm-code/utils';

const endOfCurrentHour: Date = getEndOfHour();
```

---

#### getEndOfMinute

Takes an optional date and returns a new Date object set to the end of the given/current minute.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfMinute } from '@qntm-code/utils';

const endOfCurrentMinute: Date = getEndOfMinute();
```

---

#### getEndOfMonth

Takes an optional date and returns a new Date object set to the end of the given/current month.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfMonth } from '@qntm-code/utils';

const endOfCurrentMonth: Date = getEndOfMonth();
```

---

#### getEndOfSecond

Takes an optional date and returns a new Date object set to the end of the given/current second.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfSecond } from '@qntm-code/utils';

const endOfCurrentSecond: Date = getEndOfSecond();
```

---

#### getEndOfWeek

Takes an optional date and returns a new Date object set to the end of the given/current week.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfWeek } from '@qntm-code/utils';

const endOfCurrentWeek: Date = getEndOfWeek();
```

---

#### getEndOfYear

Takes an optional date and returns a new Date object set to the end of the given/current year.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getEndOfYear } from '@qntm-code/utils';

const endOfCurrentYear: Date = getEndOfYear();
```

---

#### getStartOfDay

Takes an optional date and returns a new Date object set to the start of the given/current day.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfDay } from '@qntm-code/utils';

const startOfCurrentDay: Date = getStartOfDay();
```

---

#### getStartOfHour

Takes an optional date and returns a new Date object set to the start of the given/current hour.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfHour } from '@qntm-code/utils';

const startOfCurrentHour: Date = getStartOfHour();
```

---

#### getStartOfMinute

Takes an optional date and returns a new Date object set to the start of the given/current minute.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfMinute } from '@qntm-code/utils';

const startOfCurrentMinute: Date = getStartOfMinute();
```

---

#### getStartOfMonth

Takes an optional date and returns a new Date object set to the start of the given/current month.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfMonth } from '@qntm-code/utils';

const startOfCurrentMonth: Date = getStartOfMonth();
```

---

#### getStartOfSecond

Takes an optional date and returns a new Date object set to the start of the given/current second.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfSecond } from '@qntm-code/utils';

const startOfCurrentSecond: Date = getStartOfSecond();
```

---

#### getStartOfWeek

Takes an optional date and returns a new Date object set to the start of the given/current week.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfWeek } from '@qntm-code/utils';

const startOfCurrentWeek: Date = getStartOfWeek();
```

---

#### getStartOfYear

Takes an optional date and returns a new Date object set to the start of the given/current year.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { getStartOfYear } from '@qntm-code/utils';

const startOfCurrentYear: Date = getStartOfYear();
```

---

#### setEndOfDay

Takes a given date and mutates it to the end of the given day.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfDay } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentDay: Date = setEndOfDay(now);
```

---

#### setEndOfHour

Takes a given date and mutates it to the end of the given hour.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfHour } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentHour: Date = setEndOfHour(now);
```

---

#### setEndOfMinute

Takes a given date and mutates it to the end of the given minute.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfMinute } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentMinute: Date = setEndOfMinute(now);
```

---

#### setEndOfMonth

Takes a given date and mutates it to the end of the given month.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfMonth } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentMonth: Date = setEndOfMonth(now);
```

---

#### setEndOfSecond

Takes a given date and mutates it to the end of the given second.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfSecond } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentSecond: Date = setEndOfSecond(now);
```

---

#### setEndOfWeek

Takes a given date and mutates it to the end of the given week.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfWeek } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentWeek: Date = setEndOfWeek(now);
```

---

#### setEndOfYear

Takes a given date and mutates it to the end of the given year.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setEndOfYear } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentYear: Date = setEndOfYear(now);
```

---

#### setStartOfDay

Takes a given date and mutates it to the start of the given day.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfDay } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentDay: Date = setStartOfDay(now);
```

---

#### setStartOfHour

Takes a given date and mutates it to the start of the given hour.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfHour } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentHour: Date = setStartOfHour(now);
```

---

#### setStartOfMinute

Takes a given date and mutates it to the start of the given minute.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfMinute } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentMinute: Date = setStartOfMinute(now);
```

---

#### setStartOfMonth

Takes a given date and mutates it to the start of the given month.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfMonth } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentMonth: Date = setStartOfMonth(now);
```

---

#### setStartOfSecond

Takes a given date and mutates it to the start of the given second.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfSecond } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentSecond: Date = setStartOfSecond(now);
```

---

#### setStartOfWeek

Takes a given date and mutates it to the start of the given week.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfWeek } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentWeek: Date = setStartOfWeek(now);
```

---

#### setStartOfYear

Takes a given date and mutates it to the start of the given year.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example:**

```typescript
import { setStartOfYear } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentYear: Date = setStartOfYear(now);
```

### DOM helpers

---

#### getComputedStyleAsNumber

Gets the computed style of an element as a number.

| Parameter | Type        | Optional | Default value | Description                                    |
| --------- | ----------- | -------- | ------------- | ---------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to get the style for |
| property  | string      | false    |               | The CSS property you want to get the value for |

Return type: `number`

**Example:**

```typescript
import { getComputedStyleAsNumber } from '@qntm-code/utils';

const element: HTMLElement = document.getElementById('my-element');

const width: number = getComputedStyleAsNumber(element, 'width');
```

#### getElementHeight

Gets the height of an element, including padding and border, but not margin.

| Parameter | Type        | Optional | Default value | Description                                     |
| --------- | ----------- | -------- | ------------- | ----------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to get the height for |

Return type: `number`

**Example:**

```typescript
import { getElementHeight } from '@qntm-code/utils';

const element: HTMLElement = document.getElementById('my-element');

const height: number = getElementHeight(element);
```

---

#### getElementWidth

Gets the width of an element, including padding and border, but not margin.

| Parameter | Type        | Optional | Default value | Description                                    |
| --------- | ----------- | -------- | ------------- | ---------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to get the width for |

Return type: `number`

**Example:**

```typescript
import { getElementWidth } from '@qntm-code/utils';

const element: HTMLElement = document.getElementById('my-element');

const width: number = getElementWidth(element);
```

---

#### getAncestors

Gets all the elements that a given element is nested within

| Parameter | Type        | Optional | Default value | Description                                         |
| --------- | ----------- | -------- | ------------- | --------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to find the ancestors for |

**Example:**

```typescript
import { getAncestors } from '@qntm-code/utils';

const ancestors: HTMLElement[] = getAncestors(document.getElementById('my-element'));
```

#### getNonInlineParent

Gets the first parent of an element that isn't `display: inline`. Returns null if no matching element

| Parameter | Type        | Optional | Default value | Description                                                   |
| --------- | ----------- | -------- | ------------- | ------------------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to non `display: inline` parent for |

**Example:**

```typescript
import { getNonInlineParent } from '@qntm-code/utils';

const nonInlineParent: HTMLElement | null = getNonInlineParent(document.getElementById('my-element'));
```

#### getPositionedParent

Gets the first parent element with a relative or absolute position

| Parameter | Type        | Optional | Default value | Description                                         |
| --------- | ----------- | -------- | ------------- | --------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to find the ancestors for |

**Example:**

```typescript
import { getPositionedParent } from '@qntm-code/utils';

const ancestors: HTMLElement = getPositionedParent(document.getElementById('my-element'));
```

#### getScrollParent

Gets the scrollable parent element of a given element

| Parameter | Type        | Optional | Default value | Description                                              |
| --------- | ----------- | -------- | ------------- | -------------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to find the scroll parent for  |
| x         | boolean     | true     | true          | Whether to check if the element can scroll on the x axis |
| y         | boolean     | true     | true          | Whether to check if the element can scroll on the y axis |

**Example:**

```typescript
import { getScrollParent } from '@qntm-code/utils';

const scrollParent: HTMLElement | null = getScrollParent(document.getElementById('my-element'));
```

#### isDisplayInline

Return whether an element is `display: inline`

| Parameter | Type        | Optional | Default value | Description                                              |
| --------- | ----------- | -------- | ------------- | -------------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to check for `display: inline` |

**Example:**

```typescript
import { isDisplayInline } from '@qntm-code/utils';

const inline: boolean = isDisplayInline(document.getElementById('my-element'));
```

#### isVisible

Return whether an element is practically visible, considering things like dimensions of 0, opacity, `visibility: hidden` and `overflow: hidden`, and whether the item is scrolled off screen

| Parameter | Type        | Optional | Default value | Description                                       |
| --------- | ----------- | -------- | ------------- | ------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to check for visibility |

**Example:**

```typescript
import { isVisible } from '@qntm-code/utils';

const visible: boolean = isVisible(document.getElementById('my-element'));
```

### Types

---

#### Dictionary

Reusable dictionary type for typed maps

**Example:**

```typescript
import { Dictionary } from '@qntm-code/utils';

const dictionary: Dictionary<string> = {
  a: 'yes',
  b: 'no',
};
```

---

### Constants

---

#### isJsdom

A boolean value that is true if the current environment is jsdom.

**Example:**

```typescript
import { isJsdom } from '@qntm-code/utils';

if (isJsdom) {
  console.log('Running in jsdom');
}
```

---

## Attribution

- [isArguments](#isarguments), [isBuffer](#isbuffer), [isError](#iserror), [isGeneratorObject](#isgeneratorobject), [isRegExp](#isregexp), [typeOf](#typeof) initially based off Jon Schlinkert's [kind-of](https://github.com/jonschlinkert/kind-of)
- [isPlainObject](#isplainobject) based off Jonschlinkert's [is-plain-object](https://github.com/jonschlinkert/is-plain-object)
- [clone](#clone) initially based off Jonschlinkert's [clone-deep](https://github.com/jonschlinkert/clone-deep) and [shallow-clone](https://github.com/jonschlinkert/shallow-clone)
- [isEqual](#isequal) initially based off Evgeny Poberezkin's [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)
- [merge](#merge) initially based off Josh Duff's [deepmerge](https://github.com/TehShrike/deepmerge) and [is-mergeable-object](https://github.com/TehShrike/is-mergeable-object)
