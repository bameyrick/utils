import { Dictionary } from '../../src';

/**
 * Creates a dom element of a given type, applies any supplied styles, and adds to the body element (if not disbaled)
 */
export function createElement(type: string, styles?: Dictionary<string>, addToDom: boolean = true): HTMLElement {
  const element = document.createElement(type);

  if (styles) {
    Object.entries(styles).forEach(([property, value]) => (element.style[property] = value));
  }

  if (addToDom) {
    document.body.appendChild(element);
  }

  return element;
}
