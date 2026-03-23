# CLAUDE.md — palta

Guide for AI assistants working on this codebase.

## Project

`@zeluizr/palta` — TypeScript library for formatting and validating Latin American data (tax IDs, currencies, phones, zip codes, measurements). Zero runtime dependencies.

- npm: `@zeluizr/palta`
- Repo: https://github.com/zeluizr/palta
- Site: https://palta.zeluizr.com

## Commands

```bash
npm test                # run all tests (vitest)
npm run test:coverage   # run tests + coverage (threshold: 94%)
npm run build           # build with tsup (ESM + CJS + .d.ts)
npm run lint            # tsc --noEmit (type checking only)
```

## Architecture

Each country is a self-contained module under `src/XX/`:

```
src/
  XX/
    index.ts      # re-exports all submodules
    document.ts   # implements DocumentModule (format, strip, validate, mask)
    currency.ts   # implements CurrencyModule (format, parse, symbol, code)
    phone.ts      # implements PhoneModule (format, validate, mask, countryCode)
    zipcode.ts    # implements ZipcodeModule (format, validate, mask)
  measurements/
    index.ts      # re-exports length, weight, volume
    length.ts     # implements MeasurementModule<LengthUnit> — auto-scales cm≥100 → m
    weight.ts     # implements MeasurementModule<WeightUnit> — auto-scales g≥1000 → kg
    volume.ts     # implements MeasurementModule<VolumeUnit> — auto-scales ml≥1000 → l
```

Shared interfaces are in `src/types.ts`. Do not invent new contracts.

Registration checklist for a new country `xx`:
1. `src/xx/index.ts` exporting all submodules
2. `export * as xx from './xx/index.js'` in `src/index.ts`
3. Entry in `tsup.config.ts` (entry point for per-country import)
4. Export entry in `package.json` (`"./xx": { ... }`)
5. Tests in `tests/xx/` with ≥ 94% coverage

## Key algorithms

- **RUT (CL)**: módulo 11. Check digit can be `K`. Use `onlyDigitsAndK()` from `utils.ts`.
- **CUIT (AR)**: weights `[5,4,3,2,7,6,5,4,3,2]`. `rem=11→0`, `rem=10→INVALID` (return false), else `rem`.
- **DNI (AR) 7 digits**: group from right. `split = len - 6` → `d[0..split].d[split..split+3].d[split+3..]`.
- **NIT (CO)**: weights `[71,67,59,53,47,43,41,37,29,23,19,17,13,7,3]` (use last N for N-digit body). `rem=0→0`, `rem=1→1`, else `11-rem`.
- **CI (EC)**: módulo 10, province code 01–24 in first two digits.
- **RUC (EC)**: 13 digits, ends in `001` for natural persons; second digit `6` or `9` for companies.

## Utilities

- `safeStr(v)` — converts `null`/`undefined`/non-string to `''`
- `onlyDigitsAndK(v)` — strips everything except digits and `K`/`k`

Both are in `src/utils.ts`.

## Rules

- **Zero runtime dependencies** — only `devDependencies` for tooling
- **TypeScript strict** — no `any`, no type assertions without justification
- **Pure functions** — no side effects, no global state, no mutations of arguments
- **Defensive** — `format('')`, `validate(null)`, `strip(undefined)` must never throw
- **Coverage ≥ 94%** — enforced by CI via `npm run test:coverage`
- **`do` is a reserved JS keyword** — export as `do_` in `src/index.ts`, but the package.json export path uses `"./do"`

## Important notes

- Countries using USD (El Salvador, Panama, Puerto Rico, Ecuador): their `currency` module formats in local USD style
- `detect()` in `src/detect.ts` handles only the core documents (CPF, CNPJ, CUIT, RUT, CC, NIT, RUC, DNI); it is not exhaustive across all 23 countries
- When `rem === 10` in CUIT validation, return `false` — no valid CUIT produces that remainder
- Test files import directly from `src/` (not from the built package), so they work even before `build`
- **`measurements`** is a global module (not per-country). VTEX IO always sends dimensions in `cm` and weight in `g` — `format()` auto-scales for display. Available via `import { measurements } from '@zeluizr/palta'` or `import { length } from '@zeluizr/palta/measurements'`

## CI/CD

- `.github/workflows/ci.yml` — runs lint + `test:coverage` + build on every push/PR, using Node 18
- No automated publish — releases are published manually via `npm publish --access public`
- Coverage threshold: 94% (lines, statements, functions, branches) enforced in `vitest.config.ts`

### Node version notes

- **CI runs on Node 18** — vitest 2.x requires Node ≥ 18 (`crypto.getRandomValues` unavailable in Node 16)
- **Library supports Node ≥ 16** — declared in `engines` in `package.json`; the compiled output has zero runtime dependencies and uses no Node 18-exclusive APIs
- This distinction matters for VTEX IO: the package installs and runs on Node 16, even though the dev toolchain requires Node 18
