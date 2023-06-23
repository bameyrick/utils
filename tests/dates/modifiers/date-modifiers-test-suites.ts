import * as moment from 'moment';
import { TimeUnit } from '../../../src';

interface DateModifierTestDefinition {
  description: string;
  date: string;
  amount: number;
}

interface DateModifierTestUnit {
  unit: TimeUnit;
  tests: DateModifierTestDefinition[];
}

interface DateModifierTestSuite {
  description: string;
  units: DateModifierTestUnit[];
}

// GMT - BST changeover 1am -> 2am
const GMT_TO_BST_CHANGEOVER = '2023-03-26T01:00:00.000';
// BST - GMT changeover 2am -> 1am
const BST_TO_GMT_CHANGEOVER = '2023-10-29T02:00:00.000';
// For going forward 1 month to from 31st Jan to 28th Feb
const JAN_31 = '2023-01-31T00:00:00.000';

const FEB_28 = '2023-02-28T00:00:00.000';
// For going back 1 month to from 31st Mar to 28th Feb
const MAR_31 = '2023-03-31T23:00:00.000';
// For going back 1 year to from 29 Feb to 28th Feb
const FEB_29 = '2024-02-29T00:00:00.000';

const dateModifierTestSuites: DateModifierTestSuite[] = [
  {
    description: 'GMT - BST changeover 1am -> 2am',
    units: generateTestsForDate(GMT_TO_BST_CHANGEOVER),
  },
  {
    description: 'BST - GMT changeover 2am -> 1am',
    units: generateTestsForDate(BST_TO_GMT_CHANGEOVER),
  },
  {
    description: 'Month dates 31st Jan',
    units: generateTestsForDate(JAN_31),
  },
  {
    description: 'Month dates 28th Feb',
    units: generateTestsForDate(FEB_28),
  },
  {
    description: 'Month dates 31st Mar',
    units: generateTestsForDate(MAR_31),
  },
  {
    description: 'Month dates 29th Feb',
    units: generateTestsForDate(FEB_29),
  },
];

export function generateDateModifierTestSuites(
  fn: (date: Date, amount: number, unit: TimeUnit) => Date,
  type: string,
  toFrom: string
): void {
  dateModifierTestSuites.forEach(({ description, units }) =>
    describe(description, () => {
      units.forEach(({ unit, tests }) => {
        describe(unit, () => {
          tests.forEach(({ description, date, amount }) => {
            const displayDescription = description.replace('%type%', type).replace('%to_from%', toFrom);

            it(displayDescription, () => {
              const result = fn(new Date(date), amount, unit);

              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
              expect(result).toEqual(moment(date)[type](amount, unit).toDate());

              // console.log(`${displayDescription}: Result ${result.toISOString().slice(0, -1)}`);
            });
          });
        });
      });
    })
  );
}

function generateTestsForDate(date: string): DateModifierTestUnit[] {
  const hourBefore = momentToISO(moment(date).subtract(1, 'hour'));
  const hourAfter = momentToISO(moment(date).add(1, 'hour'));

  const result = Object.values(TimeUnit)
    .filter(unit => !unit.endsWith('s'))
    .map(unit => {
      const hour = /T(\d{2}):/.exec(date)![1];

      const unitBefore = momentToISOMaintainingHour(moment(date).subtract(1, unit), hour);
      const unitAfter = momentToISOMaintainingHour(moment(date).add(1, unit), hour);

      return {
        unit,
        tests: [
          {
            description: `%type% 1 ${unit} %to_from% ${date}`,
            date,
            amount: 1,
          },
          {
            description: `%type% 1 ${unit} %to_from% hour before ${date} (${hourBefore})`,
            date: hourBefore,
            amount: 1,
          },
          {
            description: `%type% 1 ${unit} %to_from% hour after ${date} (${hourAfter})`,
            date: hourAfter,
            amount: 1,
          },
          {
            description: `%type% 1 ${unit} %to_from% ${unit} before ${date} (${unitBefore})`,
            date: unitBefore,
            amount: 1,
          },
          {
            description: `%type% 1 ${unit} %to_from% ${unit} after ${date} (${unitAfter})`,
            date: unitAfter,
            amount: 1,
          },
        ],
      };
    });

  return result;
}

function momentToISO(date: moment.Moment): string {
  return date.toISOString().slice(0, -1);
}

function momentToISOMaintainingHour(date: moment.Moment, hour: string): string {
  return momentToISO(date).replace(/T(\d{2}):/, `T${hour}:`);
}
