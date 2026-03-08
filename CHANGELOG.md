# Changelog

All notable changes to `@zeluizr/palta` are documented here.

---

## v1.0.10 — March 2026

### Added

- 9 community country modules: `gt` (Guatemala), `hn` (Honduras), `sv` (El Salvador), `ni` (Nicaragua), `cu` (Cuba), `pr` (Puerto Rico), `ht` (Haiti), `jm` (Jamaica), `tt` (Trinidad & Tobago)
- `gt`: NIT (SAT, módulo 11), DPI (13 dígitos), GTQ currency, phone (+502), zipcode
- `hn`: RTN (14 dígitos), DNI (13 dígitos), HNL currency, phone (+504), zipcode
- `sv`: NIT (14 dígitos, `####-######-###-#`), DUI (`########-#`), USD currency, phone (+503), zipcode
- `ni`: Cédula ciudadana (14 alfanuméricos), RUC, NIO currency, phone (+505), zipcode
- `cu`: Carnet de Identidad (11 dígitos, codifica fecha + sexo), REEUP, CUP currency, phone (+53), zipcode
- `pr`: EIN (`##-#######`), SSN (`###-##-####`), USD currency, phone (+1-787/939), ZIP (00600–00988)
- `ht`: NIF (9 dígitos, DGI), CIN (13 alfanuméricos), HTG currency, phone (+509), zipcode
- `jm`: TRN (`###-###-###`), NIN (7 alfanuméricos), JMD currency, phone (+1-876), zipcode
- `tt`: TIN (`###-###-###`), NIS (9 caracteres), TTD currency, phone (+1-868), zipcode

### Stats

- 116 test files · 1.232 tests · coverage 98.5% statements / 94.8% branches

---

## v1.0.9 — March 2026

### Added

- 5 medium-priority country modules: `bo` (Bolivia), `py` (Paraguay), `do` (Dominican Republic), `cr` (Costa Rica), `pa` (Panama)
- `bo`: NIT (7–13 dígitos), CI con extensión departamental, BOB currency, phone (+591), zipcode
- `py`: RUC (`#######-#`), CI, PYG currency (sin decimales), phone (+595), zipcode
- `do`: Cédula (`###-#######-#`, módulo 10), RNC (9 dígitos), DOP currency, phone (+1-809/829/849), zipcode
- `cr`: Cédula física (`#-####-####`), Cédula jurídica (`#-###-######`), DIMEX (11–12 dígitos), CRC currency, phone (+506), zipcode
- `pa`: RUC, Cédula (`#-###-####`), PAB currency, phone (+507), zipcode

---

## v1.0.8 — February 2026

### Added

- `uy` (Uruguay): CI (`#.###.###-#`), RUT (12 dígitos), UYU currency, phone (+598), zipcode

---

## v1.0.7 — February 2026

### Added

- `pe` (Peru): RUC (11 dígitos), DNI (8 dígitos), PEN currency, phone (+51), zipcode
- `detect()` — auto-detects country and document type from a raw string

---

## v1.0.6 — January 2026

### Added

- `co` (Colombia): NIT (`###.###.###-#`), CC, COP currency, phone (+57), zipcode
- Tree-shakeable per-country imports (`@zeluizr/palta/br`, `@zeluizr/palta/co`, etc.)

### Fixed

- NIT check digit: corrected weights for 9-digit bodies
- CUIT (Argentina): `rem === 10` now returns `false` per AFIP spec (no valid CUIT has that remainder)
- DNI Argentina 7-digit formatting: groups from right (`1.234.567` instead of `12.345.67`)

---

## v1.0.0 — January 2026

### Added

- Initial release of `@zeluizr/palta`
- `br` (Brazil): CPF, CNPJ, BRL currency, phone (+55), CEP
- `cl` (Chile): RUT (módulo 11, dígito `K`), CLP currency, phone (+56), zipcode
- `ar` (Argentina): CUIT/CUIL, DNI, ARS currency, phone (+54), CPA zipcode
- Zero runtime dependencies, tree-shakeable, ESM + CJS dual output
- TypeScript strict, 94% coverage threshold enforced in CI
