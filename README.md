# @qntm-code/utils

A collection of useful utility functions with associated TypeScript types.

[![GitHub release](https://img.shields.io/github/release/bameyrick/utils.svg)](https://github.com/bameyrick/utils/releases)
[![Build Status](https://travis-ci.com/bameyrick/utils.svg?branch=master)](https://travis-ci.com/bameyrick/utils)
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
      - [isNumber](#isnumber)
      - [isString](#isstring)
      - [isEqual](#isequal)
        - [EqualityType](#equalitytype)
        - [IndividualEqualityType](#individualequalitytype)
      - [randomNumberBetweenRange](#randomnumberbetweenrange)
    - [Async helpers](#async-helpers)
      - [asyncForEach](#asyncforeach)
      - [delay](#delay)
    - [Date helpers](#date-helpers)
      - [convertTimeUnit](#converttimeunit)
      - [msToUnit](#mstounit)
      - [unitToMs](#unittoms)
      - [TimeUnit](#timeunit)
      - [getToday](#gettoday)
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
      - [getAncestors](#getancestors)
      - [getNonInlineParent](#getnoninlineparent)
      - [getPositionedParent](#getpositionedparent)
      - [getScrollParent](#getscrollparent)
      - [isDisplayInline](#isdisplayinline)
      - [isVisible](#isvisible)
    - [Types](#types)
      - [Dictionary](#dictionary)

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

Checks if a given value is empty.

Method arguments:

| Parameter | Type                       | Optional | Description        |
| --------- | -------------------------- | -------- | ------------------ |
| value     | string, Array<any>, object | false    | The value to check |

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

#### isNumber

Detects whether a given value is a number

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example**

```typescript
import { isNumber } from '@qntm-code/utils';

const value = getTheValue();

if (isNumber(value)) {
  // Do something
}
```

---

#### isString

Detects whether a given value is a string

Method arguments:

| Parameter | Type | Optional | Description        |
| --------- | ---- | -------- | ------------------ |
| value     | any  | false    | The value to check |

Return type: `boolean`

**Example**

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

#### randomNumberBetweenRange

Returns a random whole number between a given range

Method arguments:

| Parameter | Type   | Optional | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| min       | number | false    | The minimum number the function can return |
| max       | number | false    | The maximum number the function can return |

Return type: `number`

**Example**

```typescript
import { randomNumberBetweenRange } from '@qntm-code/utils';

const random = randomNumberBetweenRange(2, 10);
```

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

| Parameter | Type     | Optional | Description                         |
| --------- | -------- | -------- | ----------------------------------- |
| item      | T        | true     | The current item from the loop      |
| index     | number   | true     | The index of the given in the array |
| array     | Array<T> | true     | The array provided                  |

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

Gets a Date for the start of the given day.

Return type: `Date`

**Example**

```typescript
import { getToday } from '@qntm-code/utils';

const today: Date = getToday();
```

---

#### getEndOfDay

Takes an optional date and returns a new Date object set to the end of the given/current day.

| Parameter | Type | Optional | Default value | Description        |
| --------- | ---- | -------- | ------------- | ------------------ |
| date      | Date | true     | new Date()    | The date to modify |

Return type: `Date`

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

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

**Example**

```typescript
import { setStartOfYear } from '@qntm-code/utils';

const now: Date = new Date();
const startOfCurrentYear: Date = setStartOfYear(now);
```

### DOM helpers

---

#### getAncestors

Gets all the elements that a given element is nested within

| Parameter | Type        | Optional | Default value | Description                                         |
| --------- | ----------- | -------- | ------------- | --------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to find the ancestors for |

**Example**

```typescript
import { getAncestors } from '@qntm-code/utils';

const ancestors: HTMLElement[] = getAncestors(document.getElementById('my-element'));
```

#### getNonInlineParent

Gets the first parent of an element that isn't `display: inline`. Returns null if no matching element

| Parameter | Type        | Optional | Default value | Description                                                   |
| --------- | ----------- | -------- | ------------- | ------------------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to non `display: inline` parent for |

**Example**

```typescript
import { getNonInlineParent } from '@qntm-code/utils';

const nonInlineParent: HTMLElement | null = getNonInlineParent(document.getElementById('my-element'));
```

#### getPositionedParent

Gets the first parent element with a relative or absolute position

| Parameter | Type        | Optional | Default value | Description                                         |
| --------- | ----------- | -------- | ------------- | --------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to find the ancestors for |

**Example**

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

**Example**

```typescript
import { getScrollParent } from '@qntm-code/utils';

const scrollParent: HTMLElement | null = getScrollParent(document.getElementById('my-element'));
```

#### isDisplayInline

Return whether an element is `display: inline`

| Parameter | Type        | Optional | Default value | Description                                              |
| --------- | ----------- | -------- | ------------- | -------------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to check for `display: inline` |

**Example**

```typescript
import { isDisplayInline } from '@qntm-code/utils';

const inline: boolean = isDisplayInline(document.getElementById('my-element'));
```

#### isVisible

Return whether an element is practically visible, considering things like dimensions of 0, opacity, `visibility: hidden` and `overflow: hidden`, and whether the item is scrolled off screen

| Parameter | Type        | Optional | Default value | Description                                       |
| --------- | ----------- | -------- | ------------- | ------------------------------------------------- |
| element   | HTMLElement | false    |               | The HTML element you want to check for visibility |

**Example**

```typescript
import { isVisible } from '@qntm-code/utils';

const visible: boolean = isVisible(document.getElementById('my-element'));
```

### Types

---

#### Dictionary

Reusable dictionary type for typed maps

**Example**

```typescript
import { Dictionary } from '@qntm-code/utils';

const dictionary: Dictionary<string> = {
  a: 'yes',
  b: 'no',
};
```
