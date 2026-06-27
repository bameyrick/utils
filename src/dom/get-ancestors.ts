/**
 * Gets all the elements that a given element is nested within
 *
 * @param element - The element to get the ancestors of.
 * @returns An array of ancestor elements, starting from the immediate parent and going up to the root of the document.
 */
export function getAncestors(element: HTMLElement): HTMLElement[] {
  const result: HTMLElement[] = [];
  let current: HTMLElement | null = element.parentNode as HTMLElement | null;

  while (current !== null && current.nodeType === current.ELEMENT_NODE) {
    result.push(current);
    current = current.parentNode as HTMLElement | null;
  }

  return result;
}
