# 🥑 palta — Roadmap

## Mission accomplished!

**All Latin American countries are now available in `@zeluizr/palta`.**

If you find a bug, want to improve the validation of an existing document, or want to add a new module to an existing country, your contribution is **very welcome**.

---

## Available countries

### South America

| Country | Module | Documents | Currency | Phone |
|---------|--------|-----------|----------|-------|
| 🇦🇷 Argentina | `ar` | CUIT/CUIL, DNI | ARS ($) | +54 |
| 🇧🇴 Bolivia | `bo` | NIT, CI | BOB (Bs) | +591 |
| 🇧🇷 Brazil | `br` | CPF, CNPJ | BRL (R$) | +55 |
| 🇨🇱 Chile | `cl` | RUT | CLP ($) | +56 |
| 🇨🇴 Colombia | `co` | NIT, CC | COP ($) | +57 |
| 🇪🇨 Ecuador | `ec` | RUC, CI | USD ($) | +593 |
| 🇵🇾 Paraguay | `py` | RUC, CI | PYG (₲) | +595 |
| 🇵🇪 Peru | `pe` | RUC, DNI | PEN (S/) | +51 |
| 🇺🇾 Uruguay | `uy` | CI, RUT | UYU ($) | +598 |
| 🇻🇪 Venezuela | `ve` | RIF, CI | VES (Bs.) | +58 |

### Central America

| Country | Module | Documents | Currency | Phone |
|---------|--------|-----------|----------|-------|
| 🇨🇷 Costa Rica | `cr` | Cédula, Jurídica, DIMEX | CRC (₡) | +506 |
| 🇸🇻 El Salvador | `sv` | NIT, DUI | USD ($) | +503 |
| 🇬🇹 Guatemala | `gt` | NIT, DPI | GTQ (Q) | +502 |
| 🇭🇳 Honduras | `hn` | RTN, DNI | HNL (L) | +504 |
| 🇳🇮 Nicaragua | `ni` | Cédula, RUC | NIO (C$) | +505 |
| 🇵🇦 Panama | `pa` | RUC, Cédula | PAB (B/.) | +507 |

### Caribbean

| Country | Module | Documents | Currency | Phone |
|---------|--------|-----------|----------|-------|
| 🇨🇺 Cuba | `cu` | Carnet, REEUP | CUP ($) | +53 |
| 🇩🇴 Dominican Rep. | `do` | Cédula, RNC | DOP (RD$) | +1-809 |
| 🇭🇹 Haiti | `ht` | NIF, CIN | HTG (G) | +509 |
| 🇯🇲 Jamaica | `jm` | TRN, NIN | JMD (J$) | +1-876 |
| 🇵🇷 Puerto Rico | `pr` | EIN, SSN | USD ($) | +1-787 |
| 🇹🇹 Trinidad & Tobago | `tt` | TIN, NIS | TTD (TT$) | +1-868 |

### North America

| Country | Module | Documents | Currency | Phone |
|---------|--------|-----------|----------|-------|
| 🇲🇽 Mexico | `mx` | RFC, CURP | MXN ($) | +52 |

---

## What contributions do we accept?

The project is complete in terms of regional coverage. From now on we accept **improvements and fixes** on existing modules.

### ✅ We accept

- **Bug fixes** — incorrect validation algorithms, unhandled edge cases
- **Precision improvements** — more accurate formats, regional document variants
- **New modules within an existing country** — if a country already exists but is missing a relevant document type
- **Test coverage improvements** — cases that weren't previously covered
- **Documentation** — corrections or improvements to READMEs and comments

### ❌ We don't accept

- **Countries outside Latin America** — the project's focus is exclusively the Latin American region
- **Duplicate modules** — alternative modules that serve the same purpose as existing ones
- **Runtime dependencies** — the project is and will remain zero-dependencies

---

## How to contribute

1. Open an issue describing the bug or improvement
2. Fork and create a branch: `git checkout -b fix/ar-cuit-edge-case`
3. Implement your change following the project rules
4. Run the tests: `npm test && npm run test:coverage` (coverage ≥ 94%)
5. Open a Pull Request with a clear description

---

## Project rules

| Rule | Detail |
|------|--------|
| **Zero dependencies** | No runtime dependencies |
| **TypeScript strict** | `strict: true`, no `any` |
| **Pure functions** | No side effects or global state |
| **Coverage ≥ 94%** | Verified with `npm run test:coverage` |
| **Defensive** | `format(null)`, `validate(undefined)` never throw |
| **Latin America only** | Modules from other continents are not accepted |

---

[Español](./ROADMAP.md) · [Português](./ROADMAP.pt.md) · [CONTRIBUTING](.github/CONTRIBUTING.en.md) · [README](./README.en.md) · [npm](https://www.npmjs.com/package/@zeluizr/palta)
