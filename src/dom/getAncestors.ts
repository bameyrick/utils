import { isNullOrUndefined } from '../isNullOrUndefined';

export function getAncestors(element: HTMLElement): HTMLElement[] {
  return _getAncestors(element);
}

function _getAncestors(element: HTMLElement, result: HTMLElement[] = []): HTMLElement[] {
  const parent: HTMLElement | null = element.parentNode as HTMLElement | null;

  if (!isNullOrUndefined(parent) && parent.nodeType === parent.ELEMENT_NODE) {
    result.push(parent as HTMLElement);

    return _getAncestors(parent, result);
  } else {
    return result;
  }
}
