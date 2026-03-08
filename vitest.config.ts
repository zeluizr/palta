import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: [
        'src/index.ts',
        'src/br/index.ts', 'src/cl/index.ts', 'src/ar/index.ts',
        'src/co/index.ts', 'src/pe/index.ts', 'src/uy/index.ts',
        'src/bo/index.ts', 'src/py/index.ts', 'src/do/index.ts',
        'src/pa/index.ts', 'src/cr/index.ts', 'src/mx/index.ts',
        'src/ve/index.ts', 'src/ec/index.ts',
        'src/gt/index.ts', 'src/hn/index.ts', 'src/sv/index.ts',
        'src/ni/index.ts', 'src/cu/index.ts', 'src/pr/index.ts',
        'src/ht/index.ts', 'src/jm/index.ts', 'src/tt/index.ts',
      ],
      thresholds: {
        lines: 94,
        functions: 98,
        branches: 90,
        statements: 94,
      },
    },
  },
})
