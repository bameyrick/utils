import { pascalToKebab } from './pascal-to-kebab.js';

describe('pascalToKebab', () => {
  it('should convert a PascalCase string to kebab-case', () => {
    expect(pascalToKebab('TestString')).toBe('test-string');
  });
});
