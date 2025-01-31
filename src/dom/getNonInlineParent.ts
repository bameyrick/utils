import { isNullOrUndefined } from '../type-predicates/isNullOrUndefined.js';
import { isDisplayInline } from './isDisplayInline.js';

/**
 * Gets the first parent of an element that isn't `display: inline`. Returns null if no matching element
 */
export function getNonInlineParent(element: Element): Element | null {
  const parent = element.parentElement;

  if (isNullOrUndefined(parent)) {
    return null;
  } else if (isDisplayInline(parent)) {
    return getNonInlineParent(parent);
  } else {
    return parent;
  }
}
