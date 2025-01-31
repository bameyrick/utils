/**
 * Check if the current environment is JSDOM.
 */
export const isJsdom = typeof window !== 'undefined' && window.navigator.userAgent.includes('jsdom');
