import { isNullOrUndefined } from '../isNullOrUndefined';

/**
 * Gets all the elements that a given element is nested within
 */
export function getAncestors(element: HTMLElement): HTMLElement[] {
  return _getAncestors(element);
}

/**
 * Internal function for building the array and navigating up the tree
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
