import { isNullOrUndefined } from '../type-predicates/is-null-or-undefined.js';

/**
 * Gets the computed style of an element as a number.
 *
 * @param element - The element to get the computed style of.
 * @param style - The style property to get the computed value of ('height' or 'width').
 * @returns The computed style value as a number.
 */
export function getComputedStyleAsNumber(element: HTMLElement, style: 'height' | 'width'): number {
  const value = window.getComputedStyle(element)[style];

  if (isNullOrUndefined(value)) {
    throw new Error(`Element does not have a computed "${style}`);
  }

  return parseFloat(getComputedStyle(element)[style].replace('px', ''));
}
