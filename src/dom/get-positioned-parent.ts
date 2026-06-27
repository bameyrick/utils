/**
 * Gets the first parent element with a relative or absolute position
 *
 *  @param element - The element to get the positioned parent of.
 *  @returns The first parent element with a relative or absolute position, or the document's root element if no such parent is found.
 */
export function getPositionedParent(element: HTMLElement): HTMLElement {
  let parent: HTMLElement | null = element.parentElement;

  while (parent) {
    const position = window.getComputedStyle(parent).position;

    if (position === 'relative' || position === 'absolute') {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}
