import { isJsdom } from '../constants/index.js';
import { getComputedStyleAsNumber } from './get-computed-style-as-number.js';

/**
 * Get the width of an element.
 *
 * This helper allows getting of the width when running in a JSDOM environment.
 *
 * @param element - The element to get the width of.
 * @returns The width of the element as a number.
 */
export function getElementWidth(element: HTMLElement): number {
  if (isJsdom) {
    return getComputedStyleAsNumber(element, 'width');
  }

  return element.getBoundingClientRect().width;
}
