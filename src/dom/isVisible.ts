import { getViewportDetails, ViewportDetails } from 'viewport-details';
import { getAncestors } from '.';

/**
 * Return whether an element is practically visible, considering things like dimensions of 0, opacity, ``visibility: hidden`` and
 * ``overflow: hidden``, and whether the item is scrolled off screen
 */
export function isVisible(element: HTMLElement): boolean {
  const rect: DOMRect = element.getBoundingClientRect();
  const style: CSSStyleDeclaration = window.getComputedStyle(element);

  if (!elementVisible(rect, style)) {
    return false;
  }

  for (const ancestor of getAncestors(element)) {
    const ancestorStyle = window.getComputedStyle(ancestor);
    const ancestorRect = ancestor.getBoundingClientRect();

    if (!elementVisible(ancestorRect, ancestorStyle, true)) {
      return false;
    }
    if ((ancestorRect.width === 0 || ancestorRect.height === 0) && ancestorStyle.overflow === 'hidden') {
      // Zero-sized ancestors don’t make descendants hidden unless the descendant has ``overflow: hidden``
      return false;
    }
  }

  return true;
}

/**
 * Generic internal function for common checks
 */
function elementVisible(rect: DOMRect, style: CSSStyleDeclaration, skipDimensionsCheck = false): boolean {
  if (!skipDimensionsCheck && (rect.width === 0 || rect.height === 0)) {
    return false;
  }

  if (style.visibility === 'hidden') {
    return false;
  }

  if (style.opacity === '0') {
    return false;
  }

  // Check if the element is irrevocably off-screen
  if (
    (rect.width === 0 ? rect.x + rect.width < 0 : rect.x + rect.width <= 0) ||
    (rect.height === 0 ? rect.y + rect.height < 0 : rect.y + rect.height <= 0)
  ) {
    return false;
  }

  const viewportDetails: ViewportDetails = getViewportDetails();

  if (
    (rect.width === 0 ? rect.x > viewportDetails.width : rect.x >= viewportDetails.width) ||
    (rect.height === 0 ? rect.y > viewportDetails.height : rect.y >= viewportDetails.height)
  ) {
    return false;
  }

  return true;
}
