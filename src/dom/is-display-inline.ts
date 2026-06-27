/**
 * Return whether an element is `display: inline`
 *
 * @param element - The element to check.
 * @returns True if the element is `display: inline`, false otherwise.
 */
export function isDisplayInline(element: Element): boolean {
  if (element.nodeType === 3) {
    return true;
  }

  const computedStyle: CSSStyleDeclaration = window.getComputedStyle(element);

  return computedStyle.display === 'inline';
}
