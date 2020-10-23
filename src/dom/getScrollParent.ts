const visibilityRegex = new RegExp('^(visible|hidden)');

/**
 * Gets the scrollable parent element of a node
 * @param x: Optional. Whether to check if the element can scroll on the x axis. Default: true
 * @param y: Optional. Whether to check if the element can scroll on the y axis. Default: true
 */
export function getScrollParent(node: HTMLElement | null, x: boolean = true, y: boolean = true): HTMLElement | null {
  if (!node) {
    return null;
  }

  const computedStyle = window.getComputedStyle(node);

  if (x && !visibilityRegex.test(computedStyle.overflowX) && node.scrollWidth >= node.clientWidth) {
    return node;
  }

  if (y && !visibilityRegex.test(computedStyle.overflowY) && node.scrollHeight >= node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement, x, y) || document.body;
}
