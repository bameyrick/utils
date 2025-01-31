import { isDisplayInline } from '..';
import { createElement } from '../test-helpers/createElement.spec';

describe('isDisplayInline', () => {
  it('should return true for a text node', () => {
    const element = createElement('div');

    element.innerHTML = 'text';

    expect(isDisplayInline(element.childNodes[0] as Element)).toEqual(true);
  });

  it('should return true for a natively inline element', () => {
    const element = createElement('span');

    expect(isDisplayInline(element)).toEqual(true);
  });

  it('should return false for a natively inline element styled as anything other than display inline', () => {
    const element = createElement('span', { display: 'inline-block ' });

    expect(isDisplayInline(element)).toEqual(false);
  });

  it('should return false for a natively non-inline element', () => {
    const element = createElement('div');

    expect(isDisplayInline(element)).toEqual(false);
  });
});
