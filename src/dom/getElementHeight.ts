import { isJsdom } from '../constants/index.js';
import { getComputedStyleAsNumber } from './getComputedStyleAsNumber.js';

/**
 * Get the height of an element.
 *
 * This helper allows getting of the height when running in a JSDOM environment.
 */
export function getElementHeight(element: HTMLElement): number {
  if (isJsdom) {
    return getComputedStyleAsNumber(element, 'height');
  }

  return element.getBoundingClientRect().height;
}
