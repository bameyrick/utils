import { insertAtIndex } from '..';

describe(`insertAtIndex`, () => {
  it(`should insert a string value at a given index in a source string`, () => {
    const source = `<strong>`;
    const value = `/`;
    const index = 1;

    expect(insertAtIndex(source, value, index)).toBe(`</strong>`);
  });
});
