# 🥑 palta — Roadmap

## ¡Misión cumplida! — Cobertura regional completa

**Todos los países de América Latina ya están disponibles en `@zeluizr/palta`.**

Si encontrás un bug, querés mejorar la validación de un documento existente, o querés agregar un módulo nuevo a un país que ya está, tu contribución es **muy bienvenida**.

---

## 🔜 Próximamente — Módulo de medidas

> **Estado:** planificado · target: v1.1.0

### `measurements` — Conversión y formateo de unidades para e-commerce

Un módulo global (no por país) para convertir y formatear unidades de medida. Pensado para catálogos de productos, fichas técnicas y plataformas de e-commerce como VTEX IO, Shopify y similares.

#### API propuesta

```ts
import { measurements } from '@zeluizr/palta'

// Conversión de longitud
measurements.length.convert(10, 'cm', 'mm')   // 100
measurements.length.convert(1.5, 'm', 'cm')   // 150
measurements.length.convert(1, 'ft', 'cm')    // 30.48

// Formateo
measurements.length.format(1.5, 'm')          // '1,50 m'
measurements.length.format(100, 'cm')         // '100 cm'

// Conversión de peso
measurements.weight.convert(1, 'kg', 'g')     // 1000
measurements.weight.convert(500, 'g', 'kg')   // 0.5
measurements.weight.format(1.5, 'kg')         // '1,50 kg'

// Conversión de volumen
measurements.volume.convert(1, 'l', 'ml')     // 1000
measurements.volume.format(750, 'ml')         // '750 ml'
```

#### Unidades planificadas

| Tipo | Unidades |
|------|----------|
| Longitud | `mm`, `cm`, `m`, `km`, `in`, `ft` |
| Peso | `mg`, `g`, `kg`, `oz`, `lb` |
| Volumen | `ml`, `l`, `fl oz` |

#### Motivación

En e-commerce latinoamericano es común trabajar con dimensiones de productos en múltiples unidades (fichas técnicas, reglas de envío, comparadores). Este módulo centraliza esa lógica con la misma filosofía de palta: cero dependencias, funciones puras, TypeScript strict.

---

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
