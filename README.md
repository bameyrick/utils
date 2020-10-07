# @qntm-code/utils

A collection of useful utility functions with associated TypeScript types.

[![GitHub release](https://img.shields.io/github/release/bameyrick/utils.svg)](https://github.com/bameyrick/utils/releases)
[![Travis tests](https://img.shields.io/travis/bameyrick/utils.svg)](https://travis-ci.org/bameyrick/utils)
[![codecov](https://codecov.io/gh/bameyrick/utils/branch/master/graph/badge.svg)](https://codecov.io/gh/bameyrick/utils)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2bbbe04a25494ebf900bb71f9d6af98f)](https://www.codacy.com/manual/bameyrick/utils)

- [@qntm-code/utils](#qntm-codeutils)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Documentation](#documentation)
    - [Generic Helpers](#generic-helpers)
      - [isNullOrUndefined](#isnullorundefined)
      - [isEmpty](#isempty)
      - [isEqual](#isequal)
        - [EqualityType](#equalitytype)
        - [IndividualEqualityType](#individualequalitytype)
    - [Async helpers](#async-helpers)
      - [asyncForEach](#asyncforeach)
      - [delay](#delay)
    - [Date helpers](#date-helpers)
      - [convertTimeUnit](#converttimeunit)
      - [msToUnit](#mstounit)
      - [unitToMs](#unittoms)
      - [TimeUnit](#timeunit)
      - [getToday](#gettoday)
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

### Generic Helpers

---

#### isNullOrUndefined

Detects whether a given value is null or undefined.

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example**

```typescript
import { isNullOrUndefined } from '@qntm-code/utils';

const value = getTheValue();

if (isNullOrUndefined(value)) {
  // Do something
}
```

---

#### isEmpty

Checks if a given string is empty.

Method arguments:

| Parameter | Type   | Optional | Description         |
| --------- | ------ | -------- | ------------------- |
| value     | string | false    | The string to check |

Return type: `boolean`

**Example**

```typescript
import { isEmpty } from '@qntm-code/utils';

const value: string = getName();

if (isEmpty(value)) {
  // Do something
}
```

---

#### isEqual

Performs a deep comparison between two values to determine if they are equivalent.

**Note:** This method supports comparing nulls, undefineds, booleans, numbers, strings, Dates, objects, Functions, and Arrays.

Object objects are compared by their own, not inherited, enumerable properties.

Functions and DOM nodes are compared by strict equality, i.e. ===.

The order of the array items must be the same for the arrays to be equal.

Method arguments:

| Parameter | Type                          | Optional | Description                 |
| --------- | ----------------------------- | -------- | --------------------------- |
| a         | [EqualityType](#equalitytype) | false    | The first value to compare  |
| b         | [EqualityType](#equalitytype) | false    | The second value to compare |

Return type: `boolean`

**Example**

```typescript
import { isEqual } from '@qntm-code/utils';

const a: Array<number> = getSensorAReadings();
const b: Array<number> = getSensorBReadings();

if (isEqual(a, b)) {
  // Do a thing
}
```

##### EqualityType

An EqualityType can be an [IndividualEqualityType](#individualequalitytype) or an array of mixed[IndividualEqualityType](#individualequalitytype)s

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

### Async helpers

---

#### asyncForEach

Allows you to iterate over an array asynchronously.

Method arguments:

| Parameter | Type     | Optional | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| items     | Array<T> | false    | The items to iterate over                |
| callback  | Function | false    | A callback function to run for each item |

Callback arguments:

| Parameter | Type     | Optional | Description                           |
| --------- | -------- | -------- | ------------------------------------- |
| item      | T        | true     | The current item from the loop        |
| index     | number   | true     | The index of the current in the array |
| array     | Array<T> | true     | The array provided                    |

Return type:

```typescript
Promise<void>
```

**Example**

```typescript
import { asyncForEach } from '@qntm-code/utils';

async function doAThing(): Promise<void> {
  // Array of items to iterate over
  const items: Array<string> = ['a', 'b', 'c'];

  await asyncForEach(items, async item => {
    const result = await someAsynchronousOperation(item);
  });

  functionToRunWhenAllItemsAreProcessed();
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
Promise<void>
```

**Example**

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

| Parameter  | Type                  | Optional | Description                                     |
| ---------- | --------------------- | -------- | ----------------------------------------------- |
| value      | number                | false    | The value to convert                            |
| sourceUnit | [TimeUnit](#timeunit) | false    | The time unit the provided value is in          |
| resultUnit | [TimeUnit](#timeunit) | false    | The time unit you wish to convert your value to |

Return type: `number`

**Example**

```typescript
import { convertTimeUnit, TimeUnit } from '@qntm-code/utils';

const weeks: number = 24;
const minutes: number = convertTimeUnit(weeks, TimeUnit.Weeks, TimeUnit.Minutes);
```

**Vanilla JS Example**

```javascript
import { convertTimeUnit } from '@qntm-code/utils';

const weeks = 24;
const minutes = convertTimeUnit(weeks, 'weeks', 'minutes');
```

---

#### msToUnit

Converts milliseconds into a [TimeUnit](#timeunit).

Method arguments:

| Parameter | Type                  | Optional | Description                                     |
| --------- | --------------------- | -------- | ----------------------------------------------- |
| value     | number                | false    | The value in milliseconds                       |
| unit      | [TimeUnit](#timeunit) | false    | The time unit you wish to convert your value to |

Return type: `number`

**Example**

```typescript
import { msToUnit, TimeUnit } from '@qntm-code/utils';

const milliseconds: number = 4567876;
const hours: number = msToUnit(milliseconds, TimeUnit.Hours);
```

**Example**

```javascript
import { msToUnit } from '@qntm-code/utils';

const milliseconds = 4567876;
const hours = msToUnit(milliseconds, 'hours');
```

---

#### unitToMs

Converts a [TimeUnit](#timeunit) into milliseconds.

Method arguments:

| Parameter | Type                  | Optional | Description                             |
| --------- | --------------------- | -------- | --------------------------------------- |
| value     | number                | false    | The value to convert                    |
| unit      | [TimeUnit](#timeunit) | false    | The time unit of the value you provided |

Return type: `number`

**Example**

```typescript
import { unitToMs, TimeUnit } from '@qntm-code/utils';

const days: number = 10;
const milliseconds: number = unitToMs(days, TimeUnit.Days);
```

**Example**

```javascript
import { unitToMs } from '@qntm-code/utils';

const days = 10;
const milliseconds = unitToMs(days, 'days');
```

---

#### TimeUnit

A TypeScript enum of available options to provide to time unit conversion functions. For vanilla JS just use the string values from the value column.

| Enum Key     | Value          |
| ------------ | -------------- |
| Milliseconds | `milliseconds` |
| Seconds      | `seconds`      |
| Minutes      | `minutes`      |
| Hours        | `hours`        |
| Days         | `days`         |
| Weeks        | `weeks`        |

---

#### getToday

Gets a Date for the start of the current day.

Return type: `Date`

**Example**

```typescript
import { getToday } from '@qntm-code/utils';

const today: Date = getToday();
```

---

#### setEndOfDay

Takes a given date and changes it to the end of the current day.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfDay } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentDay: Date = setEndOfDay(now);
```

---

#### setEndOfHour

Takes a given date and changes it to the end of the current hour.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfHour } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentHour: Date = setEndOfHour(now);
```

---

#### setEndOfMinute

Takes a given date and changes it to the end of the current minute.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfMinute } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentMinute: Date = setEndOfMinute(now);
```

---

#### setEndOfMonth

Takes a given date and changes it to the end of the current month.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfMonth } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentMonth: Date = setEndOfMonth(now);
```

---

#### setEndOfSecond

Takes a given date and changes it to the end of the current second.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfSecond } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentSecond: Date = setEndOfSecond(now);
```

---

#### setEndOfWeek

Takes a given date and changes it to the end of the current week.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfWeek } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentWeek: Date = setEndOfWeek(now);
```

---

#### setEndOfYear

Takes a given date and changes it to the end of the current Year.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setEndOfYear } from '@qntm-code/utils';

const now: Date = new Date();
const endOfCurrentYear: Date = setEndOfYear(now);
```

---

#### setStartOfDay

Takes a given date and changes it to the start of the current day.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfDay } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentDay: Date = setStartOfDay(now);
```

---

#### setStartOfHour

Takes a given date and changes it to the start of the current hour.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfHour } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentHour: Date = setStartOfHour(now);
```

---

#### setStartOfMinute

Takes a given date and changes it to the start of the current minute.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfMinute } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentMinute: Date = setStartOfMinute(now);
```

---

#### setStartOfMonth

Takes a given date and changes it to the start of the current month.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfMonth } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentMonth: Date = setStartOfMonth(now);
```

---

#### setStartOfSecond

Takes a given date and changes it to the start of the current second.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfSecond } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentSecond: Date = setStartOfSecond(now);
```

---

#### setStartOfWeek

Takes a given date and changes it to the start of the current week.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfWeek } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentWeek: Date = setStartOfWeek(now);
```

---

#### setStartOfYear

Takes a given date and changes it to the start of the current Year.

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| date      | Date | false    | The date to modify |

Return type: `Date`

**Example**

```typescript
import { setStartOfYear } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentYear: Date = setStartOfYear(now);
```
