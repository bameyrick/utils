const visibilityRegex = new RegExp('^(visible|hidden)');

/**
 * Gets the scrollable parent element of a given element
 * @param x: Optional. Whether to check if the element can scroll on the x axis. Default: true
 * @param y: Optional. Whether to check if the element can scroll on the y axis. Default: true
 */
export function getScrollParent(element: HTMLElement | null, x: boolean = true, y: boolean = true): HTMLElement | null {
  if (!element) {
    return null;
  }

  const computedStyle = window.getComputedStyle(element);

  if (x && !visibilityRegex.test(computedStyle.overflowX) && element.scrollWidth >= element.clientWidth) {
    return element;
  }

  if (y && !visibilityRegex.test(computedStyle.overflowY) && element.scrollHeight >= element.clientHeight) {
    return element;
  }

  return getScrollParent(element.parentElement, x, y) || document.body;
}
