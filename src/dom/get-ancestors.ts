import { isNullOrUndefined } from '../type-predicates/is-null-or-undefined.js';

/**
 * Gets all the elements that a given element is nested within
 *
 * @param element - The element to get the ancestors of.
 * @returns An array of ancestor elements, starting from the immediate parent and going up to the root of the document.
 */
export function getAncestors(element: HTMLElement): HTMLElement[] {
  return _getAncestors(element);
}

/**
 * Internal function for building the array and navigating up the tree
 *
 * @param element - The element to get the ancestors of.
 * @param result - The array of ancestor elements being built.
 * @returns An array of ancestor elements, starting from the immediate parent and going up to the root of the document.
 */
function _getAncestors(element: HTMLElement, result: HTMLElement[] = []): HTMLElement[] {
  const parent: HTMLElement | null = element.parentNode as HTMLElement | null;

  if (!isNullOrUndefined(parent) && parent.nodeType === parent.ELEMENT_NODE) {
    result.push(parent);

    return _getAncestors(parent, result);
  } else {
    return result;
  }
}
