import { getAncestors } from '../../src';

describe('getAncestors', () => {
  it('should get ancestors for a given element', () => {
    const a = document.createElement('div');
    const b = document.createElement('p');
    const c = document.createElement('strong');

    b.appendChild(c);
    a.appendChild(b);

    expect(getAncestors(c)).toEqual([b, a]);
  });
});
