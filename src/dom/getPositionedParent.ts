/**
 * Gets the first parent element with a relative or absolute position
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
