import { createElement } from '../test-helpers/createElement.spec';
import { getComputedStyleAsNumber } from './getComputedStyleAsNumber';

describe('getComputedStyleAsNumber', () => {
  it('should return the height of an element as a number', () => {
    const element = createElement('div', { height: '100px' });

    expect(getComputedStyleAsNumber(element, 'height')).toEqual(100);
  });

  it('should return the width of an element as a number', () => {
    const element = createElement('div', { width: '100px' });

    expect(getComputedStyleAsNumber(element, 'width')).toEqual(100);
  });

  it('should throw an error if the element does not have a computed height', () => {
    const element = createElement('div', { width: '100px' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    expect(() => (getComputedStyleAsNumber as any)(element, 'sausage')).toThrowError('Element does not have a computed "sausage');
  });
});
