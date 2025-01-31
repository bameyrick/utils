import { isJsdom } from '../constants';
import { getComputedStyleAsNumber } from './getComputedStyleAsNumber';

/**
 * Get the width of an element.
 *
 * This helper allows getting of the width when running in a JSDOM environment.
 */
export function getElementWidth(element: HTMLElement): number {
  if (isJsdom) {
    return getComputedStyleAsNumber(element, 'width');
  }

  return element.getBoundingClientRect().width;
}
