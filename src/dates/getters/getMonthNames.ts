/**
 * Gets the month names for the provided locale. Defaults to the browser's locale. Optionally, you can provide a format.
 */
export function getMonthNames(options?: GetMonthNamesOptions): string[] {
  const { locale, format }: GetMonthNamesOptions = { locale: navigator.language, format: 'long', ...options };

  const formatter = new Intl.DateTimeFormat(locale, { month: format });

  const monthNames: string[] = [];

  for (let i = 0; i < 12; i++) {
    monthNames.push(formatter.format(new Date(1970, i, 1)));
  }

  return monthNames;
}

export interface GetMonthNamesOptions {
  locale?: string;
  format?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
}
