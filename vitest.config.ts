import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: '.',
    bail: 1,
    maxConcurrency: 1,
  },
});
