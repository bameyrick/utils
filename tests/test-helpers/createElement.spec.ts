import { Dictionary } from '../../src';

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
