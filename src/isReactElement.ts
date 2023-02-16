// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
const canUseSymbol = typeof Symbol === 'function' && Symbol.for;
const REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

/**
 * Determines whether a given value is a React element
 */
export function isReactElement(value: any): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
