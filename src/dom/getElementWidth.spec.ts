import { createElement } from '../test-helpers/createElement.spec';
import { getElementWidth } from './getElementWidth';

describe('getElementWidth', () => {
  it('should return the width of an element as a number', () => {
    const element = createElement('div', { width: '100px' });

    expect(getElementWidth(element)).toEqual(100);
  });
});
