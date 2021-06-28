/**
 * Return whether an element is `display: inline`
 */
export function isDisplayInline(element: Element): boolean {
  if (element.nodeType === 3) {
    return true;
  }

  const computedStyle: CSSStyleDeclaration = window.getComputedStyle(element);

  return computedStyle.display === 'inline';
}
