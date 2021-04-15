import { getPositionedParent } from '../../src';
import { createElement } from '../test-helpers/createElement.spec';

describe(`getPositionedParent`, () => {
  it('should return the first position relative parent (no nesting)', () => {
    const element = createElement('div', { position: 'absolute' });
    const parent = createElement('div', { position: 'relative' });

    parent.appendChild(element);

    expect(getPositionedParent(element)).toEqual(parent);
  });

  it('should return the first position relative parent (nested)', () => {
    const element = createElement('div', { position: 'absolute' }, false);
    const parent = createElement('div', {}, false);
    const grandparent = createElement('div', { position: 'relative' });

    parent.appendChild(element);
    grandparent.appendChild(parent);

    expect(getPositionedParent(element)).toEqual(grandparent);
  });

  it('should return the first position absolute parent (no nesting)', () => {
    const element = createElement('div', { position: 'absolute' });
    const parent = createElement('div', { position: 'absolute' });

    parent.appendChild(element);

    expect(getPositionedParent(element)).toEqual(parent);
  });

  it('should return the first position absolute parent (nested)', () => {
    const element = createElement('div', { position: 'absolute' }, false);
    const parent = createElement('div', {}, false);
    const grandparent = createElement('div', { position: 'absolute' });

    parent.appendChild(element);
    grandparent.appendChild(parent);

    expect(getPositionedParent(element)).toEqual(grandparent);
  });

  it('should return the document element if no parent has a position', () => {
    const element = createElement('div', {}, false);
    const parent = createElement('div', {}, false);
    const grandparent = createElement('div');

    parent.appendChild(element);
    grandparent.appendChild(parent);

    expect(getPositionedParent(element)).toEqual(document.documentElement);
  });
});
