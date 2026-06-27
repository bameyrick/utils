import { isNullOrUndefined } from '../type-predicates/is-null-or-undefined.js';
import { isDisplayInline } from './is-display-inline.js';

/**
 * Gets the first parent of an element that isn't `display: inline`. Returns null if no matching element
 *
 * @param element - The element to get the non-inline parent of.
 * @returns The first parent element that isn't `display: inline`, or null if no matching element is found.
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
