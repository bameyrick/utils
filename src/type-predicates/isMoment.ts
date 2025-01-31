import { isNullOrUndefined } from './isNullOrUndefined.js';

export function isMoment(value: unknown): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return !isNullOrUndefined(value) && !isNullOrUndefined((value as any)._isAMomentObject);
}
