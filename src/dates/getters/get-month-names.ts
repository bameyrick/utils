/**
 * Gets the month names for the provided locale. Defaults to the runtime's default locale.
 *
 * @param options Locale and month format options.
 * @returns An array of 12 month names formatted for the requested locale.
 */
export function getMonthNames(options: GetMonthNamesOptions = {}): string[] {
  const defaultLocale =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string'
      ? navigator.language
      : new Intl.DateTimeFormat().resolvedOptions().locale;

  const { locale = defaultLocale, format = 'long' } = options;

  const formatter = new Intl.DateTimeFormat(locale, { month: format });

  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(1970, i, 1)));
}

export interface GetMonthNamesOptions {
  locale?: string;
  format?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
}
