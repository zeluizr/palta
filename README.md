# 🥑 palta

[![npm](https://img.shields.io/npm/v/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![license](https://img.shields.io/npm/l/@zeluizr/palta)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zeluizr/palta)](https://bundlephobia.com/package/@zeluizr/palta)
[![website](https://img.shields.io/badge/website-palta.zeluizr.com-blue)](https://palta.zeluizr.com/)
[![GitHub Stars](https://img.shields.io/github/stars/zeluizr/palta?style=flat)](https://github.com/zeluizr/palta/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/zeluizr/palta?style=flat)](https://github.com/zeluizr/palta/network/members)
[![Open Source](https://img.shields.io/badge/open_source-%E2%9D%A4-brightgreen)](https://github.com/zeluizr/palta)

**Formateo y validación de datos de América Latina.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, monedas, teléfonos y códigos postales. Cero dependencias, tree-shakeable, funciona en el browser y en Node.js.

---

<sub>USADO EN PRODUCCIÓN POR</sub><br>
[![integram.me](https://img.shields.io/badge/integram.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://integram.me)

<sub>SPONSORS</sub><br>
[![inmmerce](https://img.shields.io/badge/inmmerce-→-222222?style=flat-square&labelColor=222222&color=333333)](https://inmmerce.com) [![commente.me](https://img.shields.io/badge/commente.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://commente.me)

---

## Países soportados

| País | Documentos | Moneda | Teléfono | Código postal |
|------|-----------|--------|----------|---------------|
| 🇧🇷 Brasil | CPF, CNPJ | BRL (R$) | +55 | 8 dígitos |
| 🇨🇱 Chile | RUT | CLP ($) | +56 | 7 dígitos |
| 🇦🇷 Argentina | CUIT/CUIL, DNI | ARS ($) | +54 | CPA o 4 dígitos |
| 🇨🇴 Colombia | NIT, CC | COP ($) | +57 | 6 dígitos |
| 🇵🇪 Perú | RUC, DNI | PEN (S/) | +51 | 5 dígitos |
| 🇲🇽 México | RFC, CURP | MXN ($) | +52 | 5 dígitos |
| 🇻🇪 Venezuela | RIF, CI | VES (Bs.) | +58 | 4 dígitos |
| 🇺🇾 Uruguay | CI, RUT | UYU ($) | +598 | 5 dígitos |

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

| Longitud | Candidatos |
|----------|-----------|
| Contiene K | RUT (Chile) |
| 8 dígitos | DNI Perú, DNI Argentina |
| 10 dígitos | CC Colombia, NIT Colombia |
| 11 dígitos | CPF (BR), CUIT (AR), RUC (PE) |
| 14 dígitos | CNPJ (BR) |

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
```

### Estructura del proyecto

```
src/
├── br/           # Brasil — CPF, CNPJ, BRL, phone, zipcode
├── cl/           # Chile — RUT, CLP, phone, zipcode
├── ar/           # Argentina — CUIT, CUIL, DNI, ARS, phone, zipcode
├── co/           # Colombia — NIT, CC, COP, phone, zipcode
├── pe/           # Peru — RUC, DNI, PEN, phone, zipcode
├── detect/       # Auto-detección de país y tipo
├── types.ts      # Interfaces compartidas
└── index.ts      # Barrel export
tests/
├── br/
├── cl/
├── ar/
├── co/
└── pe/
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

Ver el roadmap completo con los países pendientes, organizados por prioridad:

📍 [Ver ROADMAP.md](./ROADMAP.md) · [Português](./ROADMAP.pt.md) · [English](./ROADMAP.en.md)

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

### v1.2.0 — Marzo 2026

- ✨ **Nuevo** Soporte Perú: validación RUC, DNI, formateo PEN y teléfonos
- ✨ **Nuevo** Función `detect()` — detecta país y tipo automáticamente
- 🔧 **Mejora** Inferencia de tipos TypeScript más precisa

### v1.1.0 — Febrero 2026

- ✨ **Nuevo** Soporte Colombia: NIT, Cédula de Ciudadanía, COP, teléfonos
- ✨ **Nuevo** Imports tree-shakeable por país (`@zeluizr/palta/br`, etc.)
- 🔧 **Mejora** Validación de dígito verificador mejorada para RUT, CUIT y NIT

### v1.0.0 — Enero 2026

- 🎉 **Lanzamiento** inicial de `@zeluizr/palta`
- ✨ **Nuevo** Brasil: CPF, CNPJ, BRL, teléfono, CEP
- ✨ **Nuevo** Chile: RUT, CLP, teléfono, código postal
- ✨ **Nuevo** Argentina: CUIT/CUIL, DNI, ARS, teléfono, CPA
- ✨ **Nuevo** Zero dependencias, < 5kb gzipped

---

## Licencia

[MIT](./LICENSE) © [zeluizr](https://github.com/zeluizr) & [commente.me](https://commente.me)

---

Hecho con mucho amor ❤️ y café ☕ por [commente.me](https://commente.me)

---

[Português](./README.pt.md) · [English](./README.en.md)
