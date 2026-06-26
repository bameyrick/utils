import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
    include: ['src/**/*.spec.ts'],
    exclude: [
      'src/merge/mergeTestDefinitions.spec.ts',
      'src/test-helpers/createElement.spec.ts',
      'src/type-predicates/isEqualTestDefinitions.spec.ts',
    ],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
});
