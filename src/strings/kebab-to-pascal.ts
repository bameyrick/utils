import { capitaliseFirst } from './capitalise-first';

/**
 * Converts a kebab-case word to PascalCase
 */
export function kebabToPascal(value: string): string {
  return value
    .split('-')
    .map(word => capitaliseFirst(word))
    .join('');
}
