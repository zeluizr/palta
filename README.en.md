# palta

[![npm](https://img.shields.io/npm/v/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![license](https://img.shields.io/npm/l/@zeluizr/palta)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zeluizr/palta)](https://bundlephobia.com/package/@zeluizr/palta)
[![website](https://img.shields.io/badge/website-palta.zeluizr.com-blue)](https://palta.zeluizr.com/)

**Formatting and validation for Latin American data.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, currencies, phone numbers and zip codes. Zero dependencies, tree-shakeable, works in the browser and Node.js.

---

## Supported countries

| Country | Documents | Currency | Phone | Zip code |
|---------|-----------|----------|-------|----------|
| 🇧🇷 Brazil | CPF, CNPJ | BRL (R$) | +55 | 8 digits |
| 🇨🇱 Chile | RUT | CLP ($) | +56 | 7 digits |
| 🇦🇷 Argentina | CUIT/CUIL, DNI | ARS ($) | +54 | CPA or 4 digits |
| 🇨🇴 Colombia | NIT, CC | COP ($) | +57 | 6 digits |
| 🇵🇪 Peru | RUC, DNI | PEN (S/) | +51 | 5 digits |

---

## Installation

```bash
npm install @zeluizr/palta
```

---

## Quick Start

```ts
import { br, cl, ar, co, pe, detect } from '@zeluizr/palta'

// Brazil
br.cpf.format('52998224725')        // '529.982.247-25'
br.cpf.validate('529.982.247-25')   // true
br.cnpj.format('11222333000181')    // '11.222.333/0001-81'
br.currency.format(1234.56)         // 'R$ 1.234,56'
br.phone.format('11999887766')      // '(11) 99988-7766'
br.zipcode.format('01310100')       // '01310-100'

// Chile
cl.rut.format('123456785')          // '12.345.678-5'
cl.rut.validate('76.354.771-K')     // true
cl.rut.getCheckDigit('76354771')    // 'K'
cl.currency.format(15990)           // '$15.990'
cl.phone.format('912345678')        // '+56 9 1234 5678'
cl.zipcode.format('8320000')        // '832-0000'

// Argentina
ar.cuit.format('20123456786')       // '20-12345678-6'
ar.cuit.validate('20-12345678-6')   // true
ar.dni.format('12345678')           // '12.345.678'
ar.currency.format(1234.56)         // '$ 1.234,56'

// Colombia
co.nit.format('8000000001')         // '800.000.000-1'
co.cc.format('1234567890')          // '1.234.567.890'
co.currency.format(89900)           // '$ 89.900'

// Peru
pe.ruc.validate('20100070970')      // true
pe.dni.validate('12345678')         // true
pe.currency.format(1234.56)         // 'S/ 1,234.56'

// Auto-detection
detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }
```

---

## Selective imports

For better tree-shaking, import only the module you need:

```ts
// Brazil only
import { br } from '@zeluizr/palta'
import br from '@zeluizr/palta/br'

// Single module
import * as br from '@zeluizr/palta/br'
```

---

## API Reference

### Tax documents

All document modules expose:

```ts
format(value: string): string    // Format with punctuation
strip(value: string): string     // Remove formatting
validate(value: string): boolean // Validate check digit
mask: string                     // Mask for inputs
```

#### Brazil

| Module | Format | Example |
|--------|--------|---------|
| `br.cpf` | `###.###.###-##` | `529.982.247-25` |
| `br.cnpj` | `##.###.###/####-##` | `11.222.333/0001-81` |

#### Chile

| Module | Format | Example | Extra |
|--------|--------|---------|-------|
| `cl.rut` | `##.###.###-X` | `12.345.678-5` | `getCheckDigit(body)` |

#### Argentina

| Module | Format | Example |
|--------|--------|---------|
| `ar.cuit` | `##-########-#` | `20-12345678-6` |
| `ar.dni` | `##.###.###` | `12.345.678` |

#### Colombia

| Module | Format | Example |
|--------|--------|---------|
| `co.nit` | `###.###.###-#` | `800.000.000-1` |
| `co.cc` | `#.###.###.###` | `1.234.567.890` |

#### Peru

| Module | Format | Example |
|--------|--------|---------|
| `pe.ruc` | `###########` | `20100070970` |
| `pe.dni` | `########` | `12345678` |

---

### Currencies

```ts
format(value: number, options?: { decimals?: number; symbol?: boolean }): string
parse(value: string): number
symbol: string
code: string
```

| Country | Module | Symbol | Code | Example |
|---------|--------|--------|------|---------|
| Brazil | `br.currency` | `R$` | `BRL` | `R$ 1.234,56` |
| Chile | `cl.currency` | `$` | `CLP` | `$15.990` |
| Argentina | `ar.currency` | `$` | `ARS` | `$ 1.234,56` |
| Colombia | `co.currency` | `$` | `COP` | `$ 89.900` |
| Peru | `pe.currency` | `S/` | `PEN` | `S/ 1,234.56` |

```ts
br.currency.format(1234.56)                       // 'R$ 1.234,56'
br.currency.format(1234.56, { symbol: false })    // '1.234,56'
br.currency.format(1234, { decimals: 0 })         // 'R$ 1.234'
br.currency.parse('R$ 1.234,56')                  // 1234.56
```

---

### Phone numbers

```ts
format(value: string, options?: { international?: boolean }): string
validate(value: string): boolean
mask: string | { mobile: string; landline: string }
countryCode: string
```

| Country | Module | Code | Mobile | Landline |
|---------|--------|------|--------|----------|
| Brazil | `br.phone` | `+55` | `(##) #####-####` | `(##) ####-####` |
| Chile | `cl.phone` | `+56` | `+56 9 #### ####` | `+56 # #### ####` |
| Argentina | `ar.phone` | `+54` | `+54 9 ## ####-####` | — |
| Colombia | `co.phone` | `+57` | `+57 ### ### ####` | — |
| Peru | `pe.phone` | `+51` | `+51 ### ### ###` | — |

---

### Zip codes

```ts
format(value: string): string
validate(value: string): boolean
mask: string
```

| Country | Module | Format | Digits |
|---------|--------|--------|--------|
| Brazil | `br.zipcode` | `#####-###` | 8 |
| Chile | `cl.zipcode` | `###-####` | 7 |
| Argentina | `ar.zipcode` | `A####AAA` or `####` | CPA or 4 |
| Colombia | `co.zipcode` | `######` | 6 |
| Peru | `pe.zipcode` | `#####` | 5 |

---

### detect()

Auto-detects the country and type of a document:

```ts
import { detect } from '@zeluizr/palta'

detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }

detect('76.354.771-K')
// { country: 'CL', type: 'rut', valid: true, formatted: '76.354.771-K' }

detect('xyz')
// null
```

**Detection map:**

| Length | Candidates |
|--------|-----------|
| Contains K | RUT (Chile) |
| 8 digits | DNI Peru, DNI Argentina |
| 10 digits | CC Colombia, NIT Colombia |
| 11 digits | CPF (BR), CUIT (AR), RUC (PE) |
| 14 digits | CNPJ (BR) |

---

## Adding a new country

1. Create `src/XX/` with the required modules
2. Each module must implement the interfaces in `src/types.ts`
3. Create `src/XX/index.ts` exporting all modules
4. Add `export * as xx from './XX/index.js'` in `src/index.ts`
5. Add the entry in `tsup.config.ts` and the export in `package.json`
6. Create tests in `tests/XX/`

---

## Contributing

External contributions are very welcome! This is an open source project created by [zeluizr](https://github.com/zeluizr) in partnership with [commente.me](https://commente.me).

To contribute:

1. Fork the repository
2. Create a descriptive branch (`git checkout -b feat/uy-rut`)
3. Implement your change following the project rules below
4. Run the tests (`npm test`) and check coverage (`npm run test:coverage`)
5. Open a Pull Request

Project rules:

- Zero runtime dependencies
- TypeScript strict (no `any`)
- Pure, immutable functions
- Minimum 94% coverage
- Defensive: handle `null`/`undefined` without throwing

---

## License

[MIT](./LICENSE) © [zeluizr](https://github.com/zeluizr) & [commente.me](https://commente.me)

---

[Español](./README.md) · [Português](./README.pt.md)
