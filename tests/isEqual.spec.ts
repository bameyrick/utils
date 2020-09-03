import { isEqual } from '../src';

describe(`isEqual`, () => {
  describe(`Single values`, () => {
    describe(`null and null`, () => {
      it(`null and null are equal`, () => {
        const a = null;
        const b = null;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`null and 'null' are not equal`, () => {
        const a = null;
        const b = 'null';

        expect(isEqual(a, b)).toBe(false);
      });

      it(`null and undefined are not equal`, () => {
        const a = null;
        const b = undefined;

        expect(isEqual(a, b)).toBe(false);
      });
    });

    describe(`undefined and undefined`, () => {
      it(`undefined and undefined are equal`, () => {
        const a = undefined;
        const b = undefined;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`undefined and 'undefined' are not equal`, () => {
        const a = undefined;
        const b = 'undefined';

        expect(isEqual(a, b)).toBe(false);
      });
    });

    describe(`strings`, () => {
      it(`abc and abc are equal`, () => {
        const a = `abc`;
        const b = `abc`;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`abc and cba are not equal`, () => {
        const a = `abc`;
        const b = `cba`;

        expect(isEqual(a, b)).toBe(false);
      });

      it(`empty strings are equal`, () => {
        const a = ``;
        const b = ``;

        expect(isEqual(a, b)).toBe(true);
      });
    });

    describe(`numbers`, () => {
      it(`123 and 123 are equal`, () => {
        const a = 123;
        const b = 123;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`123 and 321 are not equal`, () => {
        const a = 123;
        const b = 321;

        expect(isEqual(a, b)).toBe(false);
      });

      it(`123 and '123' are not equal`, () => {
        const a = 123;
        const b = '123';

        expect(isEqual(a, b)).toBe(false);
      });
    });

    describe(`booleans`, () => {
      it(`true and true are equal`, () => {
        const a = true;
        const b = true;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`true and false are not equal`, () => {
        const a = true;
        const b = false;

        expect(isEqual(a, b)).toBe(false);
      });

      it(`true and 1 are not equal`, () => {
        const a = true;
        const b = 1;

        expect(isEqual(a, b)).toBe(false);
      });

      it(`true and empty string are not equal`, () => {
        const a = true;
        const b = '';

        expect(isEqual(a, b)).toBe(false);
      });
    });

    describe(`dates`, () => {
      it(`two matching dates are equal`, () => {
        const a = new Date(2020, 8, 3, 0, 0, 0, 0);
        const b = new Date(2020, 8, 3, 0, 0, 0, 0);

        expect(isEqual(a, b)).toBe(true);
      });

      it(`two non  matching dates are not equal`, () => {
        const a = new Date(2020, 8, 3, 0, 0, 0, 0);
        const b = new Date(2020, 8, 21, 0, 0, 0, 0);

        expect(isEqual(a, b)).toBe(true);
      });
    });

    describe(`functions`, () => {
      it(`two matching functions are equal`, () => {
        const a = () => true;
        const b = a;

        expect(isEqual(a, b)).toBe(true);
      });

      it(`two matching functions created separately are not equal`, () => {
        const a = () => true;
        const b = () => true;

        expect(isEqual(a, b)).toBe(false);
      });
    });
  });

  describe(`arrays`, () => {
    it(`matching arrays in same order are equal`, () => {
      const a = [1, 'a', { key: 'value' }];
      const b = [1, 'a', { key: 'value' }];

      expect(isEqual(a, b)).toBe(true);
    });

    it(`matching arrays in width different order are not equal`, () => {
      const a = [1, 'a', { key: 'value' }];
      const b = [1, { key: 'value' }, 'a'];

      expect(isEqual(a, b)).toBe(false);
    });

    it(`non matching arrays in width different order are not equal`, () => {
      const a = [1, 'a', { key: 'value' }];
      const b = [4, 5, 6];

      expect(isEqual(a, b)).toBe(false);
    });

    it(`arrays of differing length are not equal`, () => {
      const a = [1, 'a', { key: 'value' }, 4];
      const b = [1, 'a', { key: 'value' }];

      expect(isEqual(a, b)).toBe(false);
    });
  });

  describe('objects', () => {
    it(`matching objects with properties in same order are equal`, () => {
      const a = { a: 'yes', b: 0, c: [1, 'b', [3, 4]] };
      const b = { a: 'yes', b: 0, c: [1, 'b', [3, 4]] };
      expect(isEqual(a, b)).toBe(true);
    });

    it(`matching objects with properties in different order are equal`, () => {
      const a = { a: 'yes', b: 0 };
      const b = { b: 0, a: 'yes' };

      expect(isEqual(a, b)).toBe(true);
    });

    it(`non matching objects with properties in same order are not equal`, () => {
      const a = { a: 'yes', b: 0, c: [1, 'a'] };
      const b = { a: 'no', b: 1 };

      expect(isEqual(a, b)).toBe(false);
    });
  });
});
