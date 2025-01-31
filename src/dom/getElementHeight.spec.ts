import { createElement } from '../test-helpers/createElement.spec';
import { getElementHeight } from './getElementHeight';

describe('getElementHeight', () => {
  it('should return the height of an element as a number', () => {
    const element = createElement('div', { height: '100px' });

    expect(getElementHeight(element)).toEqual(100);
  });
});
