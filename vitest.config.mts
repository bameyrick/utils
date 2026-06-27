import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        url: 'http://localhost/',
      },
    },
    env: {
      LANG: 'en-US',
    },
    include: ['src/**/*.spec.ts'],
    exclude: [
      'src/merge/merge-test-definitions.spec.ts',
      'src/test-helpers/create-element.spec.ts',
      'src/type-predicates/is-equal-test-definitions.spec.ts',
      // isVisible relies on getBoundingClientRect and real viewport layout which jsdom cannot provide
      'src/dom/is-visible.spec.ts',
    ],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
});
