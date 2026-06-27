import { isEqualTests } from './is-equal-test-definitions.spec.js';
import { isEqual } from './is-equal.js';

describe('isEqual', () => {
  describe('types', () => {
    const types = [undefined, null, true, 1, '', new Date(), {}, Symbol(), () => {}];

    it(`Should return true if the types are the same`, () => {
      types.forEach(type => {
        expect(isEqual(type, type)).toBe(true);
      });
    });

    it(`Should return false if the types aren't the same`, () => {
      types.forEach((aType, aIndex) =>
        types.forEach((bType, bIndex) => {
          if (aIndex !== bIndex) {
            expect(isEqual(aType, bType)).toBe(false);
          }
        })
      );
    });
  });

  isEqualTests.forEach(suite => {
    describe(suite.description, () => {
      suite.tests.forEach(test => {
        it(test.description, () => {
          expect(isEqual(test.a, test.b)).toBe(test.expected);
        });
      });
    });
  });

  describe('circular references', () => {
    it('should handle self-referencing objects', () => {
      const a: Record<string, unknown> = {};
      a['self'] = a;
      const b: Record<string, unknown> = {};
      b['self'] = b;
      expect(isEqual(a, b)).toBe(true);
    });

    it('should detect inequality in self-referencing objects with different keys', () => {
      const a: Record<string, unknown> = { x: 1 };
      a['self'] = a;
      const b: Record<string, unknown> = { x: 2 };
      b['self'] = b;
      expect(isEqual(a, b)).toBe(false);
    });

    it('should handle mutually referencing objects', () => {
      const a1: Record<string, unknown> = {};
      const a2: Record<string, unknown> = { ref: a1 };
      a1['ref'] = a2;
      const b1: Record<string, unknown> = {};
      const b2: Record<string, unknown> = { ref: b1 };
      b1['ref'] = b2;
      expect(isEqual(a1, b1)).toBe(true);
    });

    it('should handle self-referencing arrays', () => {
      const a: unknown[] = [];
      a.push(a);
      const b: unknown[] = [];
      b.push(b);
      expect(isEqual(a, b)).toBe(true);
    });
  });
});
