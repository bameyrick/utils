import { kebabToPascal } from './kebab-to-pascal';

describe('kebabToPascal', () => {
  it('should convert a kebab-case string to PascalCase', () => {
    expect(kebabToPascal('test-string')).toBe('TestString');
  });
});
