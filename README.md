# 🥑 palta

[![npm](https://badgen.net/npm/v/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![downloads](https://badgen.net/npm/dm/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![license](https://badgen.net/npm/license/@zeluizr/palta)](./LICENSE)
[![node](https://badgen.net/npm/node/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![CI](https://github.com/zeluizr/palta/actions/workflows/ci.yml/badge.svg)](https://github.com/zeluizr/palta/actions/workflows/ci.yml)
[![website](https://badgen.net/badge/website/palta.zeluizr.com/blue)](https://palta.zeluizr.com/)
[![GitHub Stars](https://badgen.net/github/stars/zeluizr/palta)](https://github.com/zeluizr/palta/stargazers)
[![GitHub Forks](https://badgen.net/github/forks/zeluizr/palta)](https://github.com/zeluizr/palta/network/members)
[![Open Source](https://badgen.net/badge/open%20source/%E2%9D%A4/green)](https://github.com/zeluizr/palta)

**Formateo y validación de datos de América Latina.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, monedas, teléfonos, códigos postales y unidades de medida. Cero dependencias, tree-shakeable, funciona en el browser y en Node.js.

---

<sub>USADO EN PRODUCCIÓN POR</sub><br>
[![integram.me](https://img.shields.io/badge/integram.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://integram.me)

<sub>SPONSORS</sub><br>
[![inmmerce](https://img.shields.io/badge/inmmerce-→-222222?style=flat-square&labelColor=222222&color=333333)](https://inmmerce.com) [![commente.me](https://img.shields.io/badge/commente.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://commente.me)

---

## Países soportados

**23 países disponibles** · módulo `measurements` · 1.288 tests · cobertura ≥ 94%

| País | Módulo | Documentos | Moneda | Teléfono |
|------|--------|-----------|--------|----------|
| 🇧🇷 Brasil | `br` | CPF, CNPJ | BRL (R$) | +55 |
| 🇨🇱 Chile | `cl` | RUT | CLP ($) | +56 |
| 🇦🇷 Argentina | `ar` | CUIT/CUIL, DNI | ARS ($) | +54 |
| 🇨🇴 Colombia | `co` | NIT, CC | COP ($) | +57 |
| 🇵🇪 Perú | `pe` | RUC, DNI | PEN (S/) | +51 |
| 🇺🇾 Uruguay | `uy` | CI, RUT | UYU ($) | +598 |
| 🇧🇴 Bolivia | `bo` | NIT, CI | BOB (Bs) | +591 |
| 🇵🇾 Paraguay | `py` | RUC, CI | PYG (₲) | +595 |
| 🇩🇴 Rep. Dominicana | `do` | Cédula, RNC | DOP (RD$) | +1-809 |
| 🇨🇷 Costa Rica | `cr` | Cédula, Jurídica, DIMEX | CRC (₡) | +506 |
| 🇵🇦 Panamá | `pa` | RUC, Cédula | PAB (B/.) | +507 |
| 🇬🇹 Guatemala | `gt` | NIT, DPI | GTQ (Q) | +502 |
| 🇭🇳 Honduras | `hn` | RTN, DNI | HNL (L) | +504 |
| 🇸🇻 El Salvador | `sv` | NIT, DUI | USD ($) | +503 |
| 🇳🇮 Nicaragua | `ni` | Cédula, RUC | NIO (C$) | +505 |
| 🇨🇺 Cuba | `cu` | Carnet, REEUP | CUP ($) | +53 |
| 🇵🇷 Puerto Rico | `pr` | EIN, SSN | USD ($) | +1-787 |
| 🇭🇹 Haití | `ht` | NIF, CIN | HTG (G) | +509 |
| 🇯🇲 Jamaica | `jm` | TRN, NIN | JMD (J$) | +1-876 |
| 🇹🇹 Trinidad y Tobago | `tt` | TIN, NIS | TTD (TT$) | +1-868 |
| 🇲🇽 México | `mx` | RFC, CURP | MXN ($) | +52 |
| 🇻🇪 Venezuela | `ve` | RIF, CI | VES (Bs.) | +58 |
| 🇪🇨 Ecuador | `ec` | RUC, CI | USD ($) | +593 |

---

## Demo

Prueba todos los módulos en vivo:

- 🌐 [palta.zeluizr.com/demo](https://palta.zeluizr.com/demo) — demo interactiva
- 📄 [demo/index.html](./demo/index.html) — demo standalone (abrir en el browser)

---

## Instalación

```bash
npm install @zeluizr/palta
```

---

## Quick Start

```ts
import { br, cl, ar, co, pe, detect } from '@zeluizr/palta'

// Brasil
br.cpf.format('52998224725')        // '529.982.247-25'
br.cpf.validate('529.982.247-25')   // true
br.cnpj.format('11222333000181')    // '11.222.333/0001-81'
br.currency.format(1234.56)         // 'R$ 1.234,56'
br.phone.format('11999887766')      // '(11) 99988-7766'
br.zipcode.format('01310100')       // '01310-100'

// Chile
cl.rut.format('123456785')          // '12.345.678-5'
cl.rut.validate('76.354.771-K')     // true
cl.currency.format(15990)           // '$15.990'

// Argentina
ar.cuit.format('20123456786')       // '20-12345678-6'
ar.cuit.validate('20-12345678-6')   // true
ar.dni.format('12345678')           // '12.345.678'
ar.currency.format(1234.56)         // '$ 1.234,56'

// Colombia
co.nit.format('8000000001')         // '800.000.000-1'
co.cc.format('1234567890')          // '1.234.567.890'

// Perú
pe.ruc.validate('20100070970')      // true
pe.currency.format(1234.56)         // 'S/ 1,234.56'

// Auto-detección
detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }
```

---

## Imports selectivos

Para mejor tree-shaking, importa solo el módulo que necesitas:

```ts
import { br } from '@zeluizr/palta'
import br from '@zeluizr/palta/br'
import * as br from '@zeluizr/palta/br'
```

---

## API Reference

### Documentos fiscales

Todos los módulos de documento exponen:

```ts
format(value: string): string    // Formatea con puntuación
strip(value: string): string     // Elimina formato
validate(value: string): boolean // Valida dígito verificador
mask: string                     // Máscara para inputs
```

#### Brasil

| Módulo | Formato | Ejemplo |
|--------|---------|---------|
| `br.cpf` | `###.###.###-##` | `529.982.247-25` |
| `br.cnpj` | `##.###.###/####-##` | `11.222.333/0001-81` |

#### Chile

| Módulo | Formato | Ejemplo | Extra |
|--------|---------|---------|-------|
| `cl.rut` | `##.###.###-X` | `12.345.678-5` | `getCheckDigit(body)` |

#### Argentina

| Módulo | Formato | Ejemplo |
|--------|---------|---------|
| `ar.cuit` | `##-########-#` | `20-12345678-6` |
| `ar.dni` | `##.###.###` | `12.345.678` |

#### Colombia

| Módulo | Formato | Ejemplo |
|--------|---------|---------|
| `co.nit` | `###.###.###-#` | `800.000.000-1` |
| `co.cc` | `#.###.###.###` | `1.234.567.890` |

#### Perú

| Módulo | Formato | Ejemplo |
|--------|---------|---------|
| `pe.ruc` | `###########` | `20100070970` |
| `pe.dni` | `########` | `12345678` |

---

### Monedas

```ts
format(value: number, options?: { decimals?: number; symbol?: boolean }): string
parse(value: string): number
symbol: string
code: string
```

| País | Módulo | Símbolo | Código | Ejemplo |
|------|--------|---------|--------|---------|
| Brasil | `br.currency` | `R$` | `BRL` | `R$ 1.234,56` |
| Chile | `cl.currency` | `$` | `CLP` | `$15.990` |
| Argentina | `ar.currency` | `$` | `ARS` | `$ 1.234,56` |
| Colombia | `co.currency` | `$` | `COP` | `$ 89.900` |
| Perú | `pe.currency` | `S/` | `PEN` | `S/ 1,234.56` |

---

### Teléfonos

```ts
format(value: string, options?: { international?: boolean }): string
validate(value: string): boolean
mask: string | { mobile: string; landline: string }
countryCode: string
```

| País | Módulo | Código | Móvil | Fijo |
|------|--------|--------|-------|------|
| Brasil | `br.phone` | `+55` | `(##) #####-####` | `(##) ####-####` |
| Chile | `cl.phone` | `+56` | `+56 9 #### ####` | `+56 # #### ####` |
| Argentina | `ar.phone` | `+54` | `+54 9 ## ####-####` | — |
| Colombia | `co.phone` | `+57` | `+57 ### ### ####` | — |
| Perú | `pe.phone` | `+51` | `+51 ### ### ###` | — |

---

### Códigos postales

```ts
format(value: string): string
validate(value: string): boolean
mask: string
```

| País | Módulo | Formato | Dígitos |
|------|--------|---------|---------|
| Brasil | `br.zipcode` | `#####-###` | 8 |
| Chile | `cl.zipcode` | `###-####` | 7 |
| Argentina | `ar.zipcode` | `A####AAA` o `####` | CPA o 4 |
| Colombia | `co.zipcode` | `######` | 6 |
| Perú | `pe.zipcode` | `#####` | 5 |

---

### measurements

Conversión y formateo de unidades de medida. Diseñado para e-commerce (VTEX IO, Shopify), donde las dimensiones llegan siempre en `cm` y el peso en `g`.

```ts
import { measurements } from '@zeluizr/palta'
// o
import { length, weight, volume } from '@zeluizr/palta/measurements'

// Longitud — auto-escala cm ≥ 100 → m
measurements.length.convert(10, 'cm', 'mm')  // 100
measurements.length.convert(1, 'ft', 'cm')   // 30.48
measurements.length.format(50, 'cm')          // '50 cm'
measurements.length.format(150, 'cm')         // '1,50 m'

// Peso — auto-escala g ≥ 1000 → kg
measurements.weight.convert(1, 'kg', 'g')    // 1000
measurements.weight.format(500, 'g')          // '500 g'
measurements.weight.format(1500, 'g')         // '1,50 kg'

// Volumen — auto-escala ml ≥ 1000 → l
measurements.volume.convert(1, 'l', 'ml')    // 1000
measurements.volume.format(750, 'ml')         // '750 ml'
measurements.volume.format(1500, 'ml')        // '1,50 l'

// options.decimals para controlar precisión
measurements.weight.format(1500, 'g', { decimals: 3 })  // '1,500 kg'
```

| Módulo | Unidades |
|--------|----------|
| `measurements.length` | `mm`, `cm`, `m`, `km`, `in`, `ft` |
| `measurements.weight` | `mg`, `g`, `kg`, `oz`, `lb` |
| `measurements.volume` | `ml`, `l`, `fl oz` |

---

### detect()

Auto-detecta el país y tipo de un documento:

```ts
import { detect } from '@zeluizr/palta'

detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }

detect('76.354.771-K')
// { country: 'CL', type: 'rut', valid: true, formatted: '76.354.771-K' }

detect('xyz')
// null
```

| Candidatos | Documento |
|------------|-----------|
| Contiene K | RUT (Chile) |
| 8 dígitos | DNI (PE/AR), CI (UY), RUT (CL) |
| 10 caracteres | RIF (VE), CC/NIT (CO) |
| 11 dígitos | CPF (BR), CUIT (AR), RUC (PE) |
| 12-13 caracteres | RFC (MX), RUC (EC) |
| 14 dígitos | CNPJ (BR) |
| 18 caracteres | CURP (MX) |

---

## Desarrollo local

```bash
# Clonar y configurar
git clone https://github.com/zeluizr/palta.git
cd palta
npm install

# Ejecutar tests
npm test

# Tests con cobertura
npm run test:coverage

# Build
npm run build

# Verificar tipos
npm run lint

# Publicar en npm (manual)
npm publish --access public
```

> **Nota:** el tooling de desarrollo (vitest 2.x) requiere Node ≥ 18. La librería compilada es compatible con Node ≥ 16.

### Estructura del proyecto

```
src/
├── br/  cl/  ar/  co/  pe/   # Core (alta demanda)
├── uy/  bo/  py/  do/        # Prioridad media
├── cr/  pa/  gt/  hn/  sv/   # Prioridad media / comunidad
├── ni/  cu/  pr/  ht/  jm/  tt/  # Comunidad
├── mx/  ve/  ec/             # Norte y Caribe continental
├── measurements/             # Módulo global de unidades (v1.1.0)
├── detect.ts     # Auto-detección de país y tipo
├── types.ts      # Interfaces compartidas
└── index.ts      # Barrel export
tests/
└── <mismo árbol de carpetas>
```

---

## Cómo agregar un nuevo país

1. Crea `src/XX/` con los módulos necesarios
2. Cada módulo debe implementar las interfaces en `src/types.ts`
3. Crea `src/XX/index.ts` exportando todos los módulos
4. Agrega `export * as xx from './XX/index.js'` en `src/index.ts`
5. Agrega el entry en `tsup.config.ts` y el export en `package.json`
6. Crea los tests en `tests/XX/` con cobertura ≥ 94%

---

## Roadmap

Todos los países de América Latina ya están disponibles. El proyecto está completo en cobertura regional.

Todos los países de América Latina disponibles + módulo `measurements` para e-commerce.

📍 [Ver ROADMAP.md](./ROADMAP.md)

---

## Contribución

¡Las contribuciones externas son muy bienvenidas!

### Pasos

1. Haz un fork del repositorio
2. Crea una branch descriptiva: `git checkout -b feat/uy-rut`
3. Implementa tu cambio siguiendo las reglas del proyecto
4. Ejecuta los tests: `npm test && npm run test:coverage`
5. Abre un Pull Request describiendo el cambio

### Convenciones de commit

| Prefijo | Uso |
|---------|-----|
| `feat:` | Nuevo país, módulo o función |
| `fix:` | Corrección de bug o validación |
| `test:` | Tests nuevos o corregidos |
| `docs:` | Documentación |
| `chore:` | Dependencias, config, build |
| `refactor:` | Refactoring sin cambio de comportamiento |

### Reglas del proyecto

- ✅ Cero dependencias de runtime
- ✅ TypeScript strict (sin `any`)
- ✅ Funciones puras e inmutables
- ✅ Cobertura mínima del 94%
- ✅ Defensivo: manejar `null`/`undefined` sin romper
- ✅ Cada función exportada debe tener tests

---

## Changelog

Ver el historial completo de versiones en [CHANGELOG.md](./CHANGELOG.md).

---

## Licencia

[MIT](./LICENSE) © [zeluizr](https://github.com/zeluizr) & [commente.me](https://commente.me)

---

Hecho con mucho amor ❤️ y café ☕ por [commente.me](https://commente.me)

---

