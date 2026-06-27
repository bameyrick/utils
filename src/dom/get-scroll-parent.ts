const visibilityRegex = new RegExp('^(visible|hidden)');

/**
 * Returns the nearest scrollable parent element of the given element.
 *
 * @param element The element for which to find the scrollable parent.
 * @param x Whether to consider horizontal scrolling (default: true).
 * @param y Whether to consider vertical scrolling (default: true).
 * @returns The nearest scrollable parent element or the document body if none is found.
 */
export function getScrollParent({
  element,
  x = true,
  y = true,
}: {
  element: HTMLElement | null;
  x?: boolean;
  y?: boolean;
}): HTMLElement | null {
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

  return getScrollParent({ element: element.parentElement, x, y }) ?? document.body;
}
