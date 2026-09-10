# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
y este proyecto sigue el [Versionado Semántico](https://semver.org/lang/es/).

## [No publicado]

## [1.3.0] - 2026-09-10

### Corregido
- `mx.currency` implementa `parse(value): number`, como manda `CurrencyModule`. `strip` se
  conserva como extra, así que nada se rompe para quien ya lo usaba
  ([#61](https://github.com/zeluizr/palta/issues/61)).
- `ni.phone` expone `countryCode`. `code` queda como alias deprecado
  ([#62](https://github.com/zeluizr/palta/issues/62)).
- `currency.format` devuelve `''` con cualquier valor no finito en los 23 países, la misma
  política de `measurements.format`. Antes lanzaba `TypeError` en Puerto Rico y devolvía un
  `NaN` renderizado en el resto ([#63](https://github.com/zeluizr/palta/issues/63)).
- `currency.format` respeta `decimals` y `symbol` en Haití, México y Puerto Rico
  ([#64](https://github.com/zeluizr/palta/issues/64)).
- `ht.currency.parse` y `pr.currency.parse` dejan de lanzar con `null`, `undefined` o
  valores que no son string.

### Añadido
- `tests/types.test.ts`: verifica los contratos de `src/types.ts` en los 23 países, para que
  un desvío de contrato no vuelva a pasar desapercibido.
- La CI corre también en `dev` y `qa`, no solo en `main`.
- Estandarización del README (badges de badgen, contenido en español).
- Archivo `LICENSE` (MIT) y este `CHANGELOG`.

## [1.2.0] - 2026-06-04

### Añadido
- Versión inicial del proyecto.
