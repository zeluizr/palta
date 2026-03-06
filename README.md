# palta

[![npm](https://img.shields.io/npm/v/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![license](https://img.shields.io/npm/l/@zeluizr/palta)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zeluizr/palta)](https://bundlephobia.com/package/@zeluizr/palta)
[![website](https://img.shields.io/badge/website-palta.zeluizr.com-blue)](https://palta.zeluizr.com/)

**Formateo y validación de datos de América Latina.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, monedas, teléfonos y códigos postales. Cero dependencias, tree-shakeable, funciona en el browser y en Node.js.

---

## Países soportados

| País | Documentos | Moneda | Teléfono | Código postal |
|------|-----------|--------|----------|---------------|
| 🇧🇷 Brasil | CPF, CNPJ | BRL (R$) | +55 | 8 dígitos |
| 🇨🇱 Chile | RUT | CLP ($) | +56 | 7 dígitos |
| 🇦🇷 Argentina | CUIT/CUIL, DNI | ARS ($) | +54 | CPA o 4 dígitos |
| 🇨🇴 Colombia | NIT, CC | COP ($) | +57 | 6 dígitos |
| 🇵🇪 Perú | RUC, DNI | PEN (S/) | +51 | 5 dígitos |

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

// Perú
pe.ruc.validate('20100070970')      // true
pe.dni.validate('12345678')         // true
pe.currency.format(1234.56)         // 'S/ 1,234.56'

// Auto-detección
detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }
```

---

## Imports selectivos

Para mejor tree-shaking, importa solo el módulo que necesitas:

```ts
// Solo Brasil
import { br } from '@zeluizr/palta'
import br from '@zeluizr/palta/br'

// Solo un módulo
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

```ts
br.currency.format(1234.56)                       // 'R$ 1.234,56'
br.currency.format(1234.56, { symbol: false })    // '1.234,56'
br.currency.format(1234, { decimals: 0 })         // 'R$ 1.234'
br.currency.parse('R$ 1.234,56')                  // 1234.56
```

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

**Mapa de detección:**

| Longitud | Candidatos |
|----------|-----------|
| Contiene K | RUT (Chile) |
| 8 dígitos | DNI Perú, DNI Argentina |
| 10 dígitos | CC Colombia, NIT Colombia |
| 11 dígitos | CPF (BR), CUIT (AR), RUC (PE) |
| 14 dígitos | CNPJ (BR) |

---

## Cómo agregar un nuevo país

1. Crea `src/XX/` con los módulos necesarios
2. Cada módulo debe implementar las interfaces en `src/types.ts`
3. Crea `src/XX/index.ts` exportando todos los módulos
4. Agrega `export * as xx from './XX/index.js'` en `src/index.ts`
5. Agrega el entry en `tsup.config.ts` y el export en `package.json`
6. Crea los tests en `tests/XX/`

---

## Contribución

¡Las contribuciones externas son muy bienvenidas! Este es un proyecto open source creado por [zeluizr](https://github.com/zeluizr) en asociación con [commente.me](https://commente.me).

Para contribuir:

1. Haz un fork del repositorio
2. Crea una branch descriptiva (`git checkout -b feat/uy-rut`)
3. Implementa tu cambio siguiendo las reglas del proyecto
4. Ejecuta los tests (`npm test`) y verifica la cobertura (`npm run test:coverage`)
5. Abre un Pull Request

Reglas del proyecto:

- Cero dependencias de runtime
- TypeScript strict (sin `any`)
- Funciones puras e inmutables
- Cobertura mínima del 94%
- Defensivo: manejar `null`/`undefined` sin romper

---

## Licencia

[MIT](./LICENSE) © [zeluizr](https://github.com/zeluizr) & [commente.me](https://commente.me)

---

[Português](./README.pt.md) · [English](./README.en.md)
