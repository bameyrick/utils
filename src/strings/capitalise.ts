export interface CapitaliseOptions {
  start: number;
  end: number;
}

/**
 * Capitalises the characters of a provided string between the given start and end indexes
 */
export function capitalise(value: string, options?: Partial<CapitaliseOptions>): string {
  const { length } = value;

  let { start, end }: CapitaliseOptions = { start: 0, end: length, ...options };

  if (start < 0) {
    start = 0;
  }

  if (end > length) {
    end = length;
  }

  const stringStart = value.substring(0, start);
  const capitalise = value.substring(start, end);
  const stringEnd = value.substring(end, length);

  return `${stringStart}${capitalise.toUpperCase()}${stringEnd}`;
}
