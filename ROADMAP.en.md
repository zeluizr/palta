# 🥑 palta — ROADMAP

This document tracks the expansion of `@zeluizr/palta` across Latin America and the Caribbean. Each country module adds fiscal document validation/formatting, currency helpers, phone formatting, and zip code support — all following the same zero-dependency, TypeScript-strict interface.

If you want to claim a country, read the [How to claim a country](#how-to-claim-a-country) section and open an issue.

---

## Overall Status

| Country | Module | Status |
|---------|--------|--------|
| 🇧🇷 Brazil | `br` | ✅ Available |
| 🇨🇱 Chile | `cl` | ✅ Available |
| 🇦🇷 Argentina | `ar` | ✅ Available |
| 🇨🇴 Colombia | `co` | ✅ Available |
| 🇵🇪 Peru | `pe` | ✅ Available |
| 🇲🇽 Mexico | `mx` | 📋 Planned |
| 🇺🇾 Uruguay | `uy` | 📋 Planned |
| 🇻🇪 Venezuela | `ve` | 📋 Planned |
| 🇪🇨 Ecuador | `ec` | 📋 Planned |
| 🇧🇴 Bolivia | `bo` | 📋 Planned |
| 🇵🇾 Paraguay | `py` | 📋 Planned |
| 🇩🇴 Dominican Republic | `do` | 📋 Planned |
| 🇨🇷 Costa Rica | `cr` | 📋 Planned |
| 🇵🇦 Panama | `pa` | 📋 Planned |
| 🇬🇹 Guatemala | `gt` | 📋 Planned |
| 🇭🇳 Honduras | `hn` | 📋 Planned |
| 🇸🇻 El Salvador | `sv` | 📋 Planned |
| 🇳🇮 Nicaragua | `ni` | 📋 Planned |
| 🇨🇺 Cuba | `cu` | 📋 Planned |
| 🇵🇷 Puerto Rico | `pr` | 📋 Planned |
| 🇭🇹 Haiti | `ht` | 📋 Planned |
| 🇯🇲 Jamaica | `jm` | 📋 Planned |
| 🇹🇹 Trinidad and Tobago | `tt` | 📋 Planned |

---

## Priority: High

These are the countries with the largest developer communities and the highest demand for fiscal/identity tooling in the LATAM ecosystem.

---

### 🇲🇽 Mexico

- **Module:** `mx`
- **Issue label:** `country/mx`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RFC | *Registro Federal de Contribuyentes* — 13-character alphanumeric tax ID for individuals (12 chars for companies). Includes birth-date encoding and a check character. |
| CURP | *Clave Única de Registro de Población* — 18-character alphanumeric personal identity code issued to all Mexican residents and citizens. |
| NSS | *Número de Seguridad Social* — 11-digit IMSS social security number. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | MXN |

#### Phone

| Dial code |
|-----------|
| +52 |

#### Zip Code

10-digit numeric code (`#####`) — *Código Postal*, 5 digits.

---

### 🇺🇾 Uruguay

- **Module:** `uy`
- **Issue label:** `country/uy`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RUT | *Registro Único Tributario* — 12-digit tax ID for companies, with a check digit (mod 11). |
| CI | *Cédula de Identidad* — 7 or 8-digit national identity document for individuals, with a check digit. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | UYU |

#### Phone

| Dial code |
|-----------|
| +598 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇻🇪 Venezuela

- **Module:** `ve`
- **Issue label:** `country/ve`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RIF | *Registro de Información Fiscal* — tax ID prefixed by J (company), V (Venezuelan individual), E (foreign), G (government), or P (passport). Format: `J-########-#`. |
| CI | *Cédula de Identidad* — national identity document for individuals, prefixed by V (Venezuelan) or E (foreign). |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| Bs.D | VES |

#### Phone

| Dial code |
|-----------|
| +58 |

#### Zip Code

4-digit numeric code (`####`).

---

### 🇪🇨 Ecuador

- **Module:** `ec`
- **Issue label:** `country/ec`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RUC | *Registro Único de Contribuyentes* — 13-digit tax ID for natural persons and companies. The first 10 digits correspond to the Cédula, followed by `001`. Includes check-digit validation. |
| CI | *Cédula de Identidad* — 10-digit national identity document with a check digit based on mod 10. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | USD |

#### Phone

| Dial code |
|-----------|
| +593 |

#### Zip Code

6-digit numeric code (`######`).

---

## Priority: Medium

These countries have active developer ecosystems and reasonably well-documented fiscal standards.

---

### 🇧🇴 Bolivia

- **Module:** `bo`
- **Issue label:** `country/bo`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| NIT | *Número de Identificación Tributaria* — numeric tax registration number for individuals and companies, issued by the SIN. Length varies (7–12 digits). |
| CI | *Cédula de Identidad* — 5 to 10-digit national identity document. May include a letter suffix indicating the issuing department (e.g. `1234567 LP`). |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| Bs | BOB |

#### Phone

| Dial code |
|-----------|
| +591 |

#### Zip Code

Not widely used in practice. When present, 4-digit numeric code (`####`).

---

### 🇵🇾 Paraguay

- **Module:** `py`
- **Issue label:** `country/py`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RUC | *Registro Único del Contribuyente* — tax ID used by both individuals and companies. Format: numeric digits followed by a check digit separated by a hyphen (e.g. `80012345-6`). |
| CI | *Cédula de Identidad* — 6 to 8-digit national identity document. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| ₲ | PYG |

#### Phone

| Dial code |
|-----------|
| +595 |

#### Zip Code

4-digit numeric code (`####`).

---

### 🇩🇴 Dominican Republic

- **Module:** `do`
- **Issue label:** `country/do`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RNC | *Registro Nacional del Contribuyente* — 9-digit tax ID for companies, with a check digit. |
| Cédula | *Cédula de Identidad y Electoral* — 11-digit national identity and voter registration number. Format: `###-#######-#`. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| RD$ | DOP |

#### Phone

| Dial code |
|-----------|
| +1-809, +1-829, +1-849 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇨🇷 Costa Rica

- **Module:** `cr`
- **Issue label:** `country/cr`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| Cédula Jurídica | Tax and legal ID for companies — 10-digit number with format `#-###-######`. |
| Cédula Física | *Cédula de Identidad* for individuals — 9-digit number with format `#-####-####`. |
| DIMEX | *Documento de Identidad Migratoria para Extranjeros* — 11 or 12-digit identity document for foreign residents. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| ₡ | CRC |

#### Phone

| Dial code |
|-----------|
| +506 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇵🇦 Panama

- **Module:** `pa`
- **Issue label:** `country/pa`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RUC | *Registro Único de Contribuyente* — company tax registration number. Format varies: `###-###-######`. |
| Cédula | *Cédula de Identidad Personal* — individual national ID. Format: `#-###-####` (province-tome-sequence). |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| B/. | PAB / USD |

#### Phone

| Dial code |
|-----------|
| +507 |

#### Zip Code

Not formally used for postal delivery. When present, alphanumeric format.

---

### 🇬🇹 Guatemala

- **Module:** `gt`
- **Issue label:** `country/gt`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| NIT | *Número de Identificación Tributaria* — tax ID for individuals and companies, issued by the SAT. Format: `########-#` (digits + check digit). |
| DPI | *Documento Personal de Identificación* — 13-digit national identity document (CUI). |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| Q | GTQ |

#### Phone

| Dial code |
|-----------|
| +502 |

#### Zip Code

5-digit numeric code (`#####`).

---

## Priority: Community

These countries are smaller in developer population or have less standardized/publicly documented fiscal identifiers. Community contributors with local knowledge are especially welcome.

---

### 🇭🇳 Honduras

- **Module:** `hn`
- **Issue label:** `country/hn`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RTN | *Registro Tributario Nacional* — 14-digit tax ID for individuals and companies. |
| DNI | *Documento Nacional de Identificación* — 13-digit national identity document. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| L | HNL |

#### Phone

| Dial code |
|-----------|
| +504 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇸🇻 El Salvador

- **Module:** `sv`
- **Issue label:** `country/sv`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| NIT | *Número de Identificación Tributaria* — 14-digit tax ID for individuals and companies. Format: `####-######-###-#`. |
| DUI | *Documento Único de Identidad* — 9-digit national identity document. Format: `########-#`. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | USD |

#### Phone

| Dial code |
|-----------|
| +503 |

#### Zip Code

4-digit numeric code (`####`).

---

### 🇳🇮 Nicaragua

- **Module:** `ni`
- **Issue label:** `country/ni`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| RUC | *Registro Único del Contribuyente* — 14-character alphanumeric tax ID. Format varies by taxpayer type. |
| Cédula | *Cédula de Identidad Ciudadana* — 14-character national identity document (3 digits municipality + 6 digits birth date + 4 digits sequence + 1 check letter). |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| C$ | NIO |

#### Phone

| Dial code |
|-----------|
| +505 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇨🇺 Cuba

- **Module:** `cu`
- **Issue label:** `country/cu`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| NI | *Número de Identidad* — 11-digit national identity number. First 6 digits encode the birth date (YYMMDD), followed by 5 digits (century indicator, sequence, check digit). |
| NIT | *Número de Identificación Tributaria* — issued to self-employed individuals (*cuentapropistas*) and companies. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | CUP |

#### Phone

| Dial code |
|-----------|
| +53 |

#### Zip Code

5-digit numeric code (`#####`).

---

### 🇵🇷 Puerto Rico

- **Module:** `pr`
- **Issue label:** `country/pr`

> Puerto Rico uses US federal standards. SSN and EIN follow US formats.

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| EIN | *Employer Identification Number* — US federal format `##-#######`. |
| SSN | *Social Security Number* — US federal format `###-##-####`. |
| Merchant Registration | Puerto Rico Treasury (*Hacienda*) merchant registration certificate number. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| $ | USD |

#### Phone

| Dial code |
|-----------|
| +1-787, +1-939 |

#### Zip Code

US ZIP+4 format: `#####` or `#####-####`.

---

### 🇭🇹 Haiti

- **Module:** `ht`
- **Issue label:** `country/ht`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| NIF | *Numéro d'Identification Fiscale* — tax identification number issued by the DGI. Format: `##-##-###-#`. |
| CIN | *Carte d'Identification Nationale* — national identity card number. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| G | HTG |

#### Phone

| Dial code |
|-----------|
| +509 |

#### Zip Code

Not formally adopted as a universal system. Some areas use 4-digit codes.

---

### 🇯🇲 Jamaica

- **Module:** `jm`
- **Issue label:** `country/jm`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| TRN | *Taxpayer Registration Number* — 9-digit tax ID issued by TAJ. Format: `###-###-###`. |
| NIS | *National Insurance Scheme* number — issued to all working individuals. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| J$ | JMD |

#### Phone

| Dial code |
|-----------|
| +1-876 |

#### Zip Code

Not in general use. Some official formats use alphanumeric postal codes (similar to UK format).

---

### 🇹🇹 Trinidad and Tobago

- **Module:** `tt`
- **Issue label:** `country/tt`

#### Fiscal / Identity Documents

| Document | Description |
|----------|-------------|
| BIR | *Board of Inland Revenue* registration number — 9-digit tax ID. |
| NIS | *National Insurance* number — issued to all working residents. |

#### Currency

| Symbol | ISO Code |
|--------|----------|
| TT$ | TTD |

#### Phone

| Dial code |
|-----------|
| +1-868 |

#### Zip Code

6-digit alphanumeric postal code (`######`).

---

## How to Claim a Country

If you want to implement support for a country listed above:

1. **Open an issue** on [github.com/zeluizr/palta](https://github.com/zeluizr/palta) with the title `[country/XX] Implement XX module` and apply the corresponding label (e.g. `country/mx`). This reserves the country for you and avoids duplicated effort.

2. **Fork the repository** and create a branch named `feat/XX-<document>` (e.g. `feat/mx-rfc`).

3. **Create the module** following this structure:

   ```
   src/XX/
     index.ts        ← re-exports all sub-modules
     <document>.ts   ← one file per document (rfc.ts, curp.ts…)
     currency.ts
     phone.ts
     zipcode.ts
   ```

4. **Implement the interfaces** defined in `src/types.ts`. Every document module must expose at minimum:

   ```ts
   format(value: string): string
   strip(value: string): string
   validate(value: string): boolean
   mask: string
   ```

5. **Add the entry point** to `src/index.ts`:

   ```ts
   export * as xx from './XX/index.js'
   ```

6. **Register the export** in `tsup.config.ts` and `package.json` (under `"exports"`).

7. **Write tests** in `tests/XX/` covering valid inputs, invalid inputs, edge cases, and formatting round-trips. Coverage must reach ≥ 94%.

8. **Open a Pull Request** referencing your issue. The PR description should include example inputs/outputs and links to the official fiscal authority documentation used as the source of truth.

---

## Project Rules

All contributions must follow these non-negotiable rules:

| Rule | Detail |
|------|--------|
| Zero runtime dependencies | The published package must have no `dependencies`. `devDependencies` are fine. |
| TypeScript strict mode | `"strict": true` in `tsconfig.json`. No `any`, no implicit casts. |
| Pure functions | No global state, no side effects, no I/O. Every function given the same input returns the same output. |
| Immutability | Do not mutate input parameters. |
| Defensive by default | All public functions must handle `null`, `undefined`, and empty strings without throwing. |
| Coverage ≥ 94% | Verified via `npm run test:coverage`. PRs that drop coverage below threshold will be blocked. |
| No breaking changes without a major bump | Adding a new country is always non-breaking. Changing an existing function signature requires a major version. |

---

## How to Run Tests

```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Watch mode during development
npm run test:watch

# Type-check only (no emit)
npm run lint
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full contribution guidelines, code style conventions, and the PR review process.

---

*This roadmap is a living document. Country details (document formats, check-digit algorithms) are based on official fiscal authority sources and community research. If you find an inaccuracy, please open an issue.*

---

[Español](./ROADMAP.md) · [Português](./ROADMAP.pt.md) · **English**
