import { isEqual } from '../src';
import { isEqualTests } from './isEqualTestDefinitions.spec';

describe('isEqual', () => {
  describe('types', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const types = [undefined, null, true, 1, '', new Date(), {}, Symbol(), () => {}];

    it(`Should return true if the types are the same`, () => {
      types.forEach(type => {
        expect(isEqual(type, type)).toBeTrue();
      });
    });

    it(`Should return false if the types aren't the same`, () => {
      types.forEach((aType, aIndex) =>
        types.forEach((bType, bIndex) => {
          if (aIndex !== bIndex) {
            if (isEqual(aType, bType)) {
              console.log(aType, bType);
            }
            expect(isEqual(aType, bType)).toBeFalse();
          }
        })
      );
    });
  });

  for (const suite of isEqualTests) {
    describe(suite.description, () => {
      for (const test of suite.tests) {
        if (test.only) {
          fit(test.description, () => expect(isEqual(test.a, test.b)).toBe(test.expected));
        } else {
          it(test.description, () => expect(isEqual(test.a, test.b)).toBe(test.expected));
        }
      }
    });
  }
});
