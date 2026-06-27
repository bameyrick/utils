/**
 * Gets the week number of the year for the given date. Will use today's date if no date is provided.
 *
 * Weeks run Monday–Sunday. Week 1 always contains Jan 1; the first week may be
 * a partial week (fewer than 7 days) when Jan 1 falls after Monday.
 * Uses UTC calendar-day math for the day-count so results don't vary with
 * time-of-day or DST transitions.
 *
 * @param date Date to evaluate. Defaults to the current date and time.
 * @returns The 1-based week number within the year.
 */
export function getWeekOfYear(date: Date = new Date()): number {
  const year = date.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const mondayBasedDayOfJan1 = (firstDayOfYear.getDay() + 6) % 7; // Mon=0 … Sun=6
  const MILLISECONDS_PER_DAY = 86_400_000;

  const daysSinceYearStart = Math.floor((Date.UTC(year, date.getMonth(), date.getDate()) - Date.UTC(year, 0, 1)) / MILLISECONDS_PER_DAY);

  return Math.ceil((daysSinceYearStart + 1 + mondayBasedDayOfJan1) / 7);
}
