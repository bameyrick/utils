import { isJsdom } from '../constants/index.js';
import { getComputedStyleAsNumber } from './get-computed-style-as-number.js';

/**
 * Get the height of an element.
 *
 * This helper allows getting of the height when running in a JSDOM environment.
 *
 * @param element - The element to get the height of.
 * @returns The height of the element as a number.
 */
export function getElementHeight(element: HTMLElement): number {
  if (isJsdom) {
    return getComputedStyleAsNumber(element, 'height');
  }

  return element.getBoundingClientRect().height;
}
