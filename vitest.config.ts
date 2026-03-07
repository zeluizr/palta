import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/index.ts', 'src/br/index.ts', 'src/cl/index.ts', 'src/ar/index.ts', 'src/co/index.ts', 'src/pe/index.ts', 'src/mx/index.ts', 'src/ve/index.ts', 'src/uy/index.ts'],
      thresholds: {
        lines: 94,
        functions: 98,
        branches: 90,
        statements: 94,
      },
    },
  },
})
