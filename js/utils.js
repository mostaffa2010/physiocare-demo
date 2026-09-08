// ========================================================
// PhysioFlow - Universal Utility Functions & Helpers
// ========================================================

/**
 * Escapes unsafe characters for HTML injection protection (XSS Defense)
 * @param {string} str - Raw input string
 * @returns {string} Sanitized string safe for innerHTML
 */
export function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Returns a date as a local YYYY-MM-DD string using the device's
 * local timezone (e.g. Africa/Cairo, UTC+2), NOT UTC.
 *
 * Do NOT use `date.toISOString().split('T')[0]` for "today"/"this
 * session's date" logic: toISOString() always converts to UTC first,
 * so between local midnight and ~2-3 AM (Cairo time) it silently
 * returns YESTERDAY's date instead of today's. That mismatch can
 * misattribute a late-night session or the daily cash report to the
 * wrong calendar day.
 * @param {Date} [date=new Date()] - defaults to right now
 * @returns {string} local date in YYYY-MM-DD format
 */
export function getLocalDateStr(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
