import { getScrollParent } from './get-scroll-parent.js';

describe('getScrollParent', () => {
  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent({ element: child })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent({ element: child })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent({ element: child })).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent({ element: child })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent({ element: child, x: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent({ element: child, x: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent({ element: child, x: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent({ element: child, x: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { parent, child } = createScrollElements(true, true);

    expect(getScrollParent({ element: child, x: true, y: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x axis', () => {
    const { parent, child } = createScrollElements(true, false);

    expect(getScrollParent({ element: child, x: true, y: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the y axis', () => {
    const { parent, child } = createScrollElements(false, true);

    expect(getScrollParent({ element: child, x: true, y: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element that smaller than the scroll area', () => {
    const { parent, child } = createScrollElements(false, false);

    expect(getScrollParent({ element: child, x: true, y: false })).toEqual(parent);
  });

  it('should get the scroll parent for an element with scrolling on the x and y axis', () => {
    const { child } = createScrollElements(true, true, true);

    expect(getScrollParent({ element: child })?.tagName).toEqual(document.body.tagName);
  });

  it('should return null when null provided as element', () => {
    expect(getScrollParent({ element: null })).toEqual(null);
  });
});

function createScrollElements(x: boolean, y: boolean, noScroll?: boolean): { parent: HTMLElement; child: HTMLElement } {
  const child = document.createElement('div');
  const parent = document.createElement('div');

  if (!noScroll) {
    parent.style.overflowX = 'auto';
    parent.style.overflowY = 'auto';
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
