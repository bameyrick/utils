import { isNullOrUndefined } from '../type-predicates/isNullOrUndefined.js';

/**
 * Gets the computed style of an element as a number.
 */
export function getComputedStyleAsNumber(element: HTMLElement, style: 'height' | 'width'): number {
  const value = window.getComputedStyle(element)[style];

  if (isNullOrUndefined(value)) {
    throw new Error(`Element does not have a computed "${style}`);
  }

  return parseFloat(getComputedStyle(element)[style].replace('px', ''));
}
