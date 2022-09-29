import { getScrollParent } from '../../src';

describe('getScrollParent', () => {
  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent(child)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent(child)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent(child)).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent(child)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent(child, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent(child, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent(child, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent(child, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent(child, true, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent(child, true, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent(child, true, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent(child, true, false)).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { child } = createScrollElements(true, true, true);

    expect(getScrollParent(child)).toEqual(document.body);
  });

  it('should return null when null provided as element', () => {
    expect(getScrollParent(null)).toEqual(null);
  });
});

function createScrollElements(x: boolean, y: boolean, noScroll?: boolean): { parent: HTMLElement; child: HTMLElement } {
  const child = document.createElement('div');
  const parent = document.createElement('div');

  if (!noScroll) {
    parent.style.overflow = 'auto';
  }
  parent.style.width = '200px';
  parent.style.height = '200px';

  child.style.width = x ? '400px' : '100px';
  child.style.height = y ? '400px' : '100px';

  parent.append(child);

  document.body.append(parent);

  return {
    parent,
    child,
  };
}
