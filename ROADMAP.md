# 🥑 palta — Roadmap

## ¡Misión cumplida!

**Todos los países de América Latina ya están disponibles en `@zeluizr/palta`.**

Si encontrás un bug, querés mejorar la validación de un documento existente, o querés agregar un módulo nuevo a un país que ya está, tu contribución es **muy bienvenida**.

---

## Países disponibles

### América del Sur

| País | Módulo | Documentos | Moneda | Teléfono |
|------|--------|-----------|--------|----------|
| 🇦🇷 Argentina | `ar` | CUIT/CUIL, DNI | ARS ($) | +54 |
| 🇧🇴 Bolivia | `bo` | NIT, CI | BOB (Bs) | +591 |
| 🇧🇷 Brasil | `br` | CPF, CNPJ | BRL (R$) | +55 |
| 🇨🇱 Chile | `cl` | RUT | CLP ($) | +56 |
| 🇨🇴 Colombia | `co` | NIT, CC | COP ($) | +57 |
| 🇪🇨 Ecuador | `ec` | RUC, CI | USD ($) | +593 |
| 🇵🇾 Paraguay | `py` | RUC, CI | PYG (₲) | +595 |
| 🇵🇪 Perú | `pe` | RUC, DNI | PEN (S/) | +51 |
| 🇺🇾 Uruguay | `uy` | CI, RUT | UYU ($) | +598 |
| 🇻🇪 Venezuela | `ve` | RIF, CI | VES (Bs.) | +58 |

### América Central

| País | Módulo | Documentos | Moneda | Teléfono |
|------|--------|-----------|--------|----------|
| 🇨🇷 Costa Rica | `cr` | Cédula, Jurídica, DIMEX | CRC (₡) | +506 |
| 🇸🇻 El Salvador | `sv` | NIT, DUI | USD ($) | +503 |
| 🇬🇹 Guatemala | `gt` | NIT, DPI | GTQ (Q) | +502 |
| 🇭🇳 Honduras | `hn` | RTN, DNI | HNL (L) | +504 |
| 🇳🇮 Nicaragua | `ni` | Cédula, RUC | NIO (C$) | +505 |
| 🇵🇦 Panamá | `pa` | RUC, Cédula | PAB (B/.) | +507 |

### Caribe

| País | Módulo | Documentos | Moneda | Teléfono |
|------|--------|-----------|--------|----------|
| 🇨🇺 Cuba | `cu` | Carnet, REEUP | CUP ($) | +53 |
| 🇩🇴 Rep. Dominicana | `do` | Cédula, RNC | DOP (RD$) | +1-809 |
| 🇭🇹 Haití | `ht` | NIF, CIN | HTG (G) | +509 |
| 🇯🇲 Jamaica | `jm` | TRN, NIN | JMD (J$) | +1-876 |
| 🇵🇷 Puerto Rico | `pr` | EIN, SSN | USD ($) | +1-787 |
| 🇹🇹 Trinidad y Tobago | `tt` | TIN, NIS | TTD (TT$) | +1-868 |

### América del Norte

| País | Módulo | Documentos | Moneda | Teléfono |
|------|--------|-----------|--------|----------|
| 🇲🇽 México | `mx` | RFC, CURP | MXN ($) | +52 |

---

## ¿Qué contribuciones aceptamos?

Este proyecto está completo en términos de cobertura regional. A partir de ahora aceptamos **mejoras y correcciones** sobre los módulos existentes.

### ✅ Sí aceptamos

- **Corrección de bugs** — algoritmos de validación incorrectos, edge cases no contemplados
- **Mejoras de precisión** — formatos más exactos, variantes regionales de documentos
- **Nuevos módulos dentro de un país** — si un país ya existe pero le falta algún documento o tipo de dato relevante
- **Mejoras de cobertura de tests** — casos que no estaban cubiertos
- **Documentación** — correcciones o mejoras en READMEs y comentarios

### ❌ No aceptamos

- **Países fuera de América Latina** — el foco del proyecto es exclusivamente la región latinoamericana
- **Países ya incluidos duplicados** — no se aceptan módulos alternativos que cumplan la misma función
- **Dependencias de runtime** — el proyecto es y seguirá siendo zero-dependencies

---

## Cómo contribuir

1. Abrí un issue describiendo el bug o la mejora
2. Hacé un fork y creá una branch: `git checkout -b fix/ar-cuit-edge-case`
3. Implementá el cambio siguiendo las reglas del proyecto
4. Corré los tests: `npm test && npm run test:coverage` (cobertura ≥ 94%)
5. Abrí un Pull Request con una descripción clara

---

## Reglas del proyecto

| Regla | Detalle |
|-------|---------|
| **Zero dependencies** | Sin dependencias de runtime |
| **TypeScript strict** | `strict: true`, sin `any` |
| **Funciones puras** | Sin efectos secundarios ni estado global |
| **Cobertura ≥ 94%** | Verificado con `npm run test:coverage` |
| **Defensivo** | `format(null)`, `validate(undefined)` nunca lanzan excepción |
| **Solo América Latina** | No se aceptan módulos de otros continentes |

---

[CONTRIBUTING.md](.github/CONTRIBUTING.md) · [README.md](./README.md) · [npm](https://www.npmjs.com/package/@zeluizr/palta)
