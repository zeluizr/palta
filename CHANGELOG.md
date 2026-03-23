# Changelog

Todos los cambios notables de `@zeluizr/palta` están documentados aquí.

---

## v1.2.0 — Marzo 2026

### Agregado

- `detect()` expandido para MX, UY, VE y EC con detección en dos fases (patrones alfanuméricos primero, luego longitud numérica)
  - **MX**: CURP (18 caracteres) y RFC (12-13 caracteres)
  - **UY**: CI (8 dígitos, priorizado antes de DNI PE/AR)
  - **VE**: RIF (10 caracteres, prefijo J/V/E/G/P)
  - **EC**: RUC (13 dígitos)
- `DetectResult.country` y `.type` ampliados de uniones literales a `string` para soportar los nuevos países
- Entry points `tsup` para `mx`, `ve`, `ec`

### Estadísticas

- 119 archivos de test · 1.293 tests · cobertura ≥ 94%

---

## v1.1.0 — Marzo 2026

### Agregado

- Módulo global `measurements` — conversión y formateo de unidades de medida para e-commerce (VTEX IO, Shopify)
  - `measurements.length` — longitud: `mm`, `cm`, `m`, `km`, `in`, `ft` — auto-escala `cm ≥ 100 → m`
  - `measurements.weight` — peso: `mg`, `g`, `kg`, `oz`, `lb` — auto-escala `g ≥ 1000 → kg`
  - `measurements.volume` — volumen: `ml`, `l`, `fl oz` — auto-escala `ml ≥ 1000 → l`
- Tipos exportados: `LengthUnit`, `WeightUnit`, `VolumeUnit`, `MeasurementModule<U>` en `src/types.ts`
- Subpath import: `@zeluizr/palta/measurements`

### Estadísticas

- 119 archivos de test · 1.288 tests · cobertura ≥ 94%

---

## v1.0.13 — Marzo 2026

### Corregido

- `detect()` ahora reconoce RUT chileno con dígito verificador numérico (0–9) — antes retornaba `null` para inputs de 9 dígitos sin `K`
- `detect('261343541')` ahora retorna `{ country: 'CL', type: 'rut', valid: true, formatted: '26.134.354-1' }`
- En el caso de 8 dígitos (body de 7 dígitos), `detect()` prioriza DNI peruano (`validatePeDni` siempre retorna `true` para 8 dígitos), por lo que RUT no se evalúa en este caso

### Estadísticas

- 116 archivos de test · 1.234 tests · cobertura ≥ 94%

---

## v1.0.12 — Marzo 2026

### Cambios

- Documentación migrada completamente al español — README, CHANGELOG, CONTRIBUTING, ROADMAP
- Scripts de publicación agregados en `package.json`: `publish:npm`, `publish:gh`, `publish:all`
- Soporte explícito para publicación en GitHub Packages (`npm.pkg.github.com`)
- CI configurado en Node 18 (vitest 2.x requiere ≥18; la librería compilada sigue siendo compatible con Node ≥16)
- Módulo `measurements` anunciado en roadmap — conversión de unidades para e-commerce (target: v1.1.0)

### Estadísticas

- 116 archivos de test · 1.232 tests · cobertura ≥ 94%

---

## v1.0.11 — Marzo 2026

### Agregado

- `mx` (México): RFC (con homoclave), CURP, moneda MXN, teléfono (+52), código postal — registrado en los exports del paquete
- `ve` (Venezuela): RIF, CI, moneda VES, teléfono (+58), código postal — registrado en los exports del paquete
- `ec` (Ecuador): RUC (13 dígitos), CI (módulo 10), moneda USD, teléfono (+593), código postal — registrado en los exports del paquete

### Cambios

- Requisito mínimo de Node.js bajado a `>=16` — compatible con VTEX IO
- CI simplificado a un único job en Node 18 (vitest 2.x requiere Node ≥ 18; la librería compilada sigue funcionando en Node 16)
- Publicación automática en npm eliminada del CI — las releases se publican manualmente

### Estadísticas

- 116 archivos de test · 1.232 tests · cobertura ≥ 94%

---

## v1.0.10 — Marzo 2026

### Agregado

- 9 módulos de países comunitarios: `gt` (Guatemala), `hn` (Honduras), `sv` (El Salvador), `ni` (Nicaragua), `cu` (Cuba), `pr` (Puerto Rico), `ht` (Haití), `jm` (Jamaica), `tt` (Trinidad y Tobago)
- `gt`: NIT (SAT, módulo 11), DPI (13 dígitos), moneda GTQ, teléfono (+502), código postal
- `hn`: RTN (14 dígitos), DNI (13 dígitos), moneda HNL, teléfono (+504), código postal
- `sv`: NIT (14 dígitos, `####-######-###-#`), DUI (`########-#`), moneda USD, teléfono (+503), código postal
- `ni`: Cédula ciudadana (14 alfanuméricos), RUC, moneda NIO, teléfono (+505), código postal
- `cu`: Carnet de Identidad (11 dígitos, codifica fecha + sexo), REEUP, moneda CUP, teléfono (+53), código postal
- `pr`: EIN (`##-#######`), SSN (`###-##-####`), moneda USD, teléfono (+1-787/939), ZIP (00600–00988)
- `ht`: NIF (9 dígitos, DGI), CIN (13 alfanuméricos), moneda HTG, teléfono (+509), código postal
- `jm`: TRN (`###-###-###`), NIN (7 alfanuméricos), moneda JMD, teléfono (+1-876), código postal
- `tt`: TIN (`###-###-###`), NIS (9 caracteres), moneda TTD, teléfono (+1-868), código postal

### Estadísticas

- 116 archivos de test · 1.232 tests · cobertura 98,5% sentencias / 94,8% ramas

---

## v1.0.9 — Marzo 2026

### Agregado

- 5 módulos de países de prioridad media: `bo` (Bolivia), `py` (Paraguay), `do` (República Dominicana), `cr` (Costa Rica), `pa` (Panamá)
- `bo`: NIT (7–13 dígitos), CI con extensión departamental, moneda BOB, teléfono (+591), código postal
- `py`: RUC (`#######-#`), CI, moneda PYG (sin decimales), teléfono (+595), código postal
- `do`: Cédula (`###-#######-#`, módulo 10), RNC (9 dígitos), moneda DOP, teléfono (+1-809/829/849), código postal
- `cr`: Cédula física (`#-####-####`), Cédula jurídica (`#-###-######`), DIMEX (11–12 dígitos), moneda CRC, teléfono (+506), código postal
- `pa`: RUC, Cédula (`#-###-####`), moneda PAB, teléfono (+507), código postal

---

## v1.0.8 — Febrero 2026

### Agregado

- `uy` (Uruguay): CI (`#.###.###-#`), RUT (12 dígitos), moneda UYU, teléfono (+598), código postal

---

## v1.0.7 — Febrero 2026

### Agregado

- `pe` (Perú): RUC (11 dígitos), DNI (8 dígitos), moneda PEN, teléfono (+51), código postal
- `detect()` — detecta automáticamente el país y tipo de documento a partir de una cadena de texto

---

## v1.0.6 — Enero 2026

### Agregado

- `co` (Colombia): NIT (`###.###.###-#`), CC, moneda COP, teléfono (+57), código postal
- Importaciones por país con tree-shaking (`@zeluizr/palta/br`, `@zeluizr/palta/co`, etc.)

### Corregido

- Dígito verificador del NIT: pesos corregidos para cuerpos de 9 dígitos
- CUIT (Argentina): `rem === 10` ahora retorna `false` según la spec de AFIP (ningún CUIT válido produce ese resto)
- Formateo del DNI argentino de 7 dígitos: agrupa desde la derecha (`1.234.567` en vez de `12.345.67`)

---

## v1.0.0 — Enero 2026

### Agregado

- Primera versión de `@zeluizr/palta`
- `br` (Brasil): CPF, CNPJ, moneda BRL, teléfono (+55), CEP
- `cl` (Chile): RUT (módulo 11, dígito `K`), moneda CLP, teléfono (+56), código postal
- `ar` (Argentina): CUIT/CUIL, DNI, moneda ARS, teléfono (+54), código postal CPA
- Zero dependencias de runtime, tree-shakeable, salida ESM + CJS dual
- TypeScript strict, umbral de cobertura del 94% aplicado en CI
