/**
 * Gets the first parent element with a relative or absolute position
 *
 *  @param element - The element to get the positioned parent of.
 *  @returns The first parent element with a relative or absolute position, or the document's root element if no such parent is found.
 */
export function getPositionedParent(element: HTMLElement): HTMLElement {
  const parent: HTMLElement | null = element.parentElement;

  if (parent) {
    const style: CSSStyleDeclaration = window.getComputedStyle(parent);

    if (['relative', 'absolute'].includes(style.position)) {
      return parent;
    } else {
      return getPositionedParent(parent);
    }
  }

  return document.documentElement;
}
