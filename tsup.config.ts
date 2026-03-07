import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/br/index.ts',
    'src/cl/index.ts',
    'src/ar/index.ts',
    'src/co/index.ts',
    'src/pe/index.ts',
    'src/ve/index.ts',
  ],
  format: ['esm', 'cjs'],
  dts: true,
  treeshake: true,
  clean: true,
  sourcemap: false,
  splitting: false,
})
