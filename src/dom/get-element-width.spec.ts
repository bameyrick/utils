import { createElement } from '../test-helpers/create-element.spec';
import { getElementWidth } from './get-element-width';

describe('getElementWidth', () => {
  it('should return the width of an element as a number', () => {
    const element = createElement('div', { width: '100px' });

    expect(getElementWidth(element)).toEqual(100);
  });
});
