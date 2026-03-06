# 🥑 How to contribute to palta

Thank you for your interest in contributing! This is an open source project created by [zeluizr](https://github.com/zeluizr) in partnership with [commente.me](https://commente.me).

> Also available in: [Español](./CONTRIBUTING.md) · [Português](./CONTRIBUTING.pt.md)

---

## Before you start

- Check if an issue or PR already exists for what you want to do
- For large changes, open an issue first to discuss it
- Read the project rules at the end of this document

---

## Local setup

```bash
git clone https://github.com/zeluizr/palta.git
cd palta
npm install
npm test
```

---

## Contribution flow

1. Fork the repository
2. Create a descriptive branch:
   ```bash
   git checkout -b feat/uy-rut        # new country/module
   git checkout -b fix/br-cpf-mask    # bug fix
   git checkout -b docs/readme-update # documentation
   ```
3. Implement your change following the project rules
4. Make sure the tests pass:
   ```bash
   npm test
   npm run test:coverage  # minimum coverage: 94%
   ```
5. Open a Pull Request targeting `main`

---

## Adding a new country

Required structure for each country `XX`:

```
src/XX/
  cpf.ts        # or the corresponding tax document
  currency.ts
  phone.ts
  zipcode.ts
  index.ts      # exports all country modules

tests/XX/
  cpf.test.ts
  currency.test.ts
  phone.test.ts
  zipcode.test.ts
```

Steps:

1. Create `src/XX/` implementing the interfaces from `src/types.ts`
2. Create `src/XX/index.ts` exporting all modules
3. Add `export * as xx from './XX/index.js'` in `src/index.ts`
4. Add the entry in `tsup.config.ts`:
   ```ts
   entry: { ..., 'xx/index': 'src/XX/index.ts' }
   ```
5. Add the export in `package.json`:
   ```json
   "./xx": {
     "types": "./dist/xx/index.d.ts",
     "import": "./dist/xx/index.js",
     "require": "./dist/xx/index.cjs"
   }
   ```
6. Create the tests in `tests/XX/` with coverage ≥ 94%

---

## Interfaces to implement

```ts
// Tax document
interface Document {
  format(value: string): string
  strip(value: string): string
  validate(value: string): boolean
  mask: string
}

// Currency
interface Currency {
  format(value: number, options?: { decimals?: number; symbol?: boolean }): string
  parse(value: string): number
  symbol: string
  code: string
}

// Phone
interface Phone {
  format(value: string, options?: { international?: boolean }): string
  validate(value: string): boolean
  mask: string | { mobile: string; landline: string }
  countryCode: string
}

// Zip code
interface Zipcode {
  format(value: string): string
  validate(value: string): boolean
  mask: string
}
```

---

## Project rules

| Rule | Description |
|------|-------------|
| Zero dependencies | No runtime dependencies |
| TypeScript strict | No `any`, explicit types |
| Pure functions | No external state mutation |
| Defensive | Handle `null`/`undefined` without throwing exceptions |
| Coverage ≥ 94% | Verify with `npm run test:coverage` |
| No side effects | `"sideEffects": false` in package.json |

---

## License

By contributing, you agree that your code will be published under the [MIT](../LICENSE) license.
