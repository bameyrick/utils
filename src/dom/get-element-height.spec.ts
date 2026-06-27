import { createElement } from '../test-helpers/create-element.spec';
import { getElementHeight } from './get-element-height';

describe('getElementHeight', () => {
  it('should return the height of an element as a number', () => {
    const element = createElement('div', { height: '100px' });

    expect(getElementHeight(element)).toEqual(100);
  });
});
