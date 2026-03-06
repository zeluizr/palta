# 🥑 palta — Roadmap

Este documento lista todos los países de América Latina pendientes de implementación en `@zeluizr/palta`, organizados por prioridad. Está pensado para orientar a la comunidad sobre qué contribuir y cómo hacerlo de forma alineada con los estándares del proyecto.

---

## Tabla de estado general

| País | Módulo | Estado |
|------|--------|--------|
| 🇧🇷 Brasil | `br` | ✅ Disponible |
| 🇨🇱 Chile | `cl` | ✅ Disponible |
| 🇦🇷 Argentina | `ar` | ✅ Disponible |
| 🇨🇴 Colombia | `co` | ✅ Disponible |
| 🇵🇪 Perú | `pe` | ✅ Disponible |
| 🇲🇽 México | `mx` | 📋 Planificado |
| 🇺🇾 Uruguay | `uy` | 📋 Planificado |
| 🇻🇪 Venezuela | `ve` | 📋 Planificado |
| 🇪🇨 Ecuador | `ec` | 📋 Planificado |
| 🇧🇴 Bolivia | `bo` | 📋 Planificado |
| 🇵🇾 Paraguay | `py` | 📋 Planificado |
| 🇩🇴 República Dominicana | `do` | 📋 Planificado |
| 🇨🇷 Costa Rica | `cr` | 📋 Planificado |
| 🇵🇦 Panamá | `pa` | 📋 Planificado |
| 🇬🇹 Guatemala | `gt` | 📋 Planificado |
| 🇭🇳 Honduras | `hn` | 📋 Planificado |
| 🇸🇻 El Salvador | `sv` | 📋 Planificado |
| 🇳🇮 Nicaragua | `ni` | 📋 Planificado |
| 🇨🇺 Cuba | `cu` | 📋 Planificado |
| 🇵🇷 Puerto Rico | `pr` | 📋 Planificado |
| 🇭🇹 Haití | `ht` | 📋 Planificado |
| 🇯🇲 Jamaica | `jm` | 📋 Planificado |
| 🇹🇹 Trinidad y Tobago | `tt` | 📋 Planificado |

> **Leyenda:** ✅ Disponible · 🚧 En progreso · 📋 Planificado

---

## Prioridad Alta

Países con mayor volumen de transacciones digitales en la región, mayor demanda de la comunidad y ecosistemas de desarrollo más consolidados.

---

### 🇲🇽 México — `mx`

**Issue label:** `country/mx`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RFC | Registro Federal de Contribuyentes | Identificador fiscal de personas físicas (13 caracteres) y morales (12 caracteres). Incluye fecha de nacimiento/constitución y dígito verificador homoclave |
| CURP | Clave Única de Registro de Población | Identificador único de 18 caracteres para personas físicas. Codifica nombre, fecha de nacimiento, sexo y entidad federativa |
| INE/IFE | Credencial para Votar | Número de credencial del Instituto Nacional Electoral, usado como documento de identidad oficial |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `MXN` | `$ 1,234.56` |

#### Teléfono

- Código de país: `+52`
- Formato móvil: `+52 ## #### ####`
- Formato fijo: `+52 ### ### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `06600` (Ciudad de México, Juárez)

---

### 🇺🇾 Uruguay — `uy`

**Issue label:** `country/uy`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RUT | Registro Único Tributario | Identificador fiscal de 12 dígitos para empresas. Formato `###########-#` con dígito verificador |
| CI | Cédula de Identidad | Documento de identidad de 7 u 8 dígitos con dígito verificador. Formato `#.###.###-#` |
| NIE | Número de Identidad de Extranjero | Identificador para residentes extranjeros, mismo formato que CI |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `UYU` | `$ 1.234,56` |

#### Teléfono

- Código de país: `+598`
- Formato móvil: `+598 9# ### ###`
- Formato fijo: `+598 # #### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `11000` (Montevideo Centro)

---

### 🇻🇪 Venezuela — `ve`

**Issue label:** `country/ve`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RIF | Registro de Información Fiscal | Identificador fiscal para personas y empresas. Formato `V-########-#`, `J-########-#`, `E-########-#`, `G-########-#` según tipo |
| CI | Cédula de Identidad | Documento de identidad de 6 a 8 dígitos. Venezolanos prefijo `V`, extranjeros prefijo `E` |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `Bs.` | `VES` | `Bs. 1.234,56` |

#### Teléfono

- Código de país: `+58`
- Formato móvil: `+58 ### ### ####`
- Formato fijo: `+58 ### ### ####`

#### Código postal

- Formato: 4 dígitos numéricos
- Máscara: `####`
- Ejemplo: `1010` (Caracas)

---

### 🇪🇨 Ecuador — `ec`

**Issue label:** `country/ec`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RUC | Registro Único de Contribuyentes | Identificador fiscal de 13 dígitos. Personas naturales: termina en `001`, sociedades: segundo dígito `6` o `9` |
| CI | Cédula de Identidad | 10 dígitos. Los dos primeros indican la provincia (01–24). Incluye dígito verificador con algoritmo módulo 10 |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `USD` | `$ 1,234.56` |

> Ecuador usa el dólar estadounidense como moneda oficial desde el año 2000.

#### Teléfono

- Código de país: `+593`
- Formato móvil: `+593 9# ### ####`
- Formato fijo: `+593 # ### ####`

#### Código postal

- Formato: 6 dígitos numéricos
- Máscara: `######`
- Ejemplo: `170150` (Quito)

---

## Prioridad Media

Países con comunidades de desarrollo activas y demanda creciente para integraciones fiscales y de pagos.

---

### 🇧🇴 Bolivia — `bo`

**Issue label:** `country/bo`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| NIT | Número de Identificación Tributaria | Identificador fiscal para empresas y personas con actividad económica. 7 a 13 dígitos numéricos |
| CI | Cédula de Identidad | De 5 a 8 dígitos numéricos. Puede incluir sufijo de extensión departamental (ej: `1234567 SC`) |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `Bs` | `BOB` | `Bs 1.234,56` |

#### Teléfono

- Código de país: `+591`
- Formato móvil: `+591 7# ### ###`
- Formato fijo: `+591 # ### ####`

#### Código postal

Bolivia no utiliza un sistema de códigos postales estandarizado de forma oficial. El módulo puede implementar un validador permisivo o retornar `null`.

---

### 🇵🇾 Paraguay — `py`

**Issue label:** `country/py`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RUC | Registro Único de Contribuyentes | Identificador fiscal de 6 a 8 dígitos con dígito verificador. Formato `#######-#` |
| CI | Cédula de Identidad | De 6 a 8 dígitos numéricos. Documento principal de identidad paraguayo |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `₲` | `PYG` | `₲ 1.234.567` |

> El guaraní no tiene decimales en uso corriente.

#### Teléfono

- Código de país: `+595`
- Formato móvil: `+595 9## ### ###`
- Formato fijo: `+595 ## ### ###`

#### Código postal

- Formato: 4 dígitos numéricos
- Máscara: `####`
- Ejemplo: `1209` (Asunción)

---

### 🇩🇴 República Dominicana — `do`

**Issue label:** `country/do`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RNC | Registro Nacional del Contribuyente | Identificador fiscal de 9 dígitos para personas jurídicas. Formato `###-#####-#` |
| Cédula | Cédula de Identidad y Electoral | 11 dígitos. Formato `###-#######-#`. Dígito verificador con módulo 10 |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `RD$` | `DOP` | `RD$ 1,234.56` |

#### Teléfono

- Código de país: `+1-809`, `+1-829`, `+1-849`
- Formato: `+1 (809) ###-####`

> Comparte el código de país `+1` con EE.UU. y Canadá (North American Numbering Plan). Los NDDs locales son 809, 829 y 849.

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `10101` (Santo Domingo)

---

### 🇨🇷 Costa Rica — `cr`

**Issue label:** `country/cr`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| Cédula Física | Cédula de Identidad | 9 dígitos con dígito verificador. Formato `#-####-####`. Primer dígito indica provincia |
| Cédula Jurídica | Cédula Jurídica | 10 dígitos para personas jurídicas. Formato `#-###-######` |
| DIMEX | Documento de Identidad Migratorio para Extranjeros | 11 o 12 dígitos para residentes extranjeros |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `₡` | `CRC` | `₡ 1.234,56` |

#### Teléfono

- Código de país: `+506`
- Formato móvil: `+506 #### ####`
- Formato fijo: `+506 #### ####`

> Costa Rica no tiene distinción de prefijo entre fijo y móvil en el formato de 8 dígitos; móviles inician con 6, 7 u 8.

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `10101` (San José Centro)

---

### 🇵🇦 Panamá — `pa`

**Issue label:** `country/pa`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RUC | Registro Único de Contribuyentes | Identificador fiscal. Personas naturales usan su cédula como RUC. Jurídicas tienen formato `#-###-######` |
| Cédula | Cédula de Identidad Personal | Formato `#-###-####` para panameños o `PE-#-###` para extranjeros naturalizados |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `B/.` | `PAB` | `B/. 1,234.56` |

> Panamá usa el Balboa, pero en la práctica circula el dólar estadounidense (USD) de forma oficial junto al Balboa.

#### Teléfono

- Código de país: `+507`
- Formato móvil: `+507 6### ####`
- Formato fijo: `+507 ### ####`

#### Código postal

- Formato: 4 dígitos numéricos (Zonas Postales)
- Máscara: `####`
- Ejemplo: `0801` (Ciudad de Panamá)

---

## Prioridad Comunidad

Países con menor volumen en el ecosistema de desarrollo actual, pero importantes para la cobertura regional completa. Ideales para primeras contribuciones.

---

### 🇬🇹 Guatemala — `gt`

**Issue label:** `country/gt`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| NIT | Número de Identificación Tributaria | Identificador fiscal de la SAT. Formato `########-#` con dígito verificador módulo 11 |
| DPI | Documento Personal de Identificación | 13 dígitos. Reemplazó a la cédula en 2009. Los primeros 2 dígitos indican el municipio |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `Q` | `GTQ` | `Q 1,234.56` |

#### Teléfono

- Código de país: `+502`
- Formato: `+502 #### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `01001` (Guatemala Ciudad)

---

### 🇭🇳 Honduras — `hn`

**Issue label:** `country/hn`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RTN | Registro Tributario Nacional | Identificador fiscal de 14 dígitos. Personas naturales: primeros 13 son el DNI más un dígito. Jurídicas: 14 dígitos con estructura propia |
| DNI | Documento Nacional de Identidad | 13 dígitos. Formato `####-########-#####` |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `L` | `HNL` | `L 1,234.56` |

#### Teléfono

- Código de país: `+504`
- Formato móvil: `+504 #### ####`
- Formato fijo: `+504 #### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `11101` (Tegucigalpa)

---

### 🇸🇻 El Salvador — `sv`

**Issue label:** `country/sv`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| NIT | Número de Identificación Tributaria | 14 dígitos. Formato `####-######-###-#`. Incluye municipio, fecha y correlativo |
| DUI | Documento Único de Identidad | 9 dígitos con dígito verificador. Formato `########-#` |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `USD` | `$ 1,234.56` |

> El Salvador adoptó el dólar estadounidense como moneda de curso legal en 2001.

#### Teléfono

- Código de país: `+503`
- Formato: `+503 #### ####`

#### Código postal

- Formato: 4 dígitos numéricos
- Máscara: `####`
- Ejemplo: `1101` (San Salvador)

---

### 🇳🇮 Nicaragua — `ni`

**Issue label:** `country/ni`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| RUC | Registro Único del Contribuyente | 14 dígitos alfanuméricos. Personas naturales: inicia con sus primeros dígitos del cédula. Jurídicas: estructura J seguida de dígitos |
| Cédula | Cédula de Identidad Ciudadana | 14 caracteres alfanuméricos. Formato `###-######-####X` (municipio, fecha, correlativo, verificador) |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `C$` | `NIO` | `C$ 1,234.56` |

#### Teléfono

- Código de país: `+505`
- Formato móvil: `+505 #### ####`
- Formato fijo: `+505 #### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `11001` (Managua)

---

### 🇨🇺 Cuba — `cu`

**Issue label:** `country/cu`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| NIT | Número de Identificación Tributaria | Identificador de 11 dígitos para personas jurídicas |
| CI | Carnet de Identidad | 11 dígitos. Los primeros 6 son fecha de nacimiento (AAMMDD), los siguientes 4 son correlativo más dígito de sexo, y el último es verificador |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `CUP` | `$ 1.234,56` |

#### Teléfono

- Código de país: `+53`
- Formato móvil: `+53 5### ####`
- Formato fijo: `+53 7 ### ####`

#### Código postal

- Formato: 5 dígitos numéricos
- Máscara: `#####`
- Ejemplo: `10100` (La Habana)

---

### 🇵🇷 Puerto Rico — `pr`

**Issue label:** `country/pr`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| EIN | Employer Identification Number | Sistema federal de EE.UU., 9 dígitos. Formato `##-#######` |
| SSN | Social Security Number | Sistema federal de EE.UU., 9 dígitos. Formato `###-##-####` |
| Licencia de Conducir | Puerto Rico Driver's License | Número alfanumérico emitido por el DTOP |

> Puerto Rico es territorio no incorporado de EE.UU. y utiliza los sistemas tributarios federales. No tiene documentos fiscales propios independientes.

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `$` | `USD` | `$ 1,234.56` |

#### Teléfono

- Código de país: `+1`
- Prefijos locales: `787` y `939`
- Formato: `+1 (787) ###-####`

#### Código postal

- Sistema ZIP de EE.UU.: 5 dígitos
- Rango: `00600` a `00988`
- Máscara: `#####`

---

### 🇭🇹 Haití — `ht`

**Issue label:** `country/ht`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| NIF | Numéro d'Identification Fiscale | Identificador fiscal de 9 dígitos emitido por la DGI (Direction Générale des Impôts) |
| CIN | Carte d'Identification Nationale | Documento de identidad nacional. 13 caracteres alfanuméricos |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `G` | `HTG` | `G 1,234.56` |

> El gourde haitiano. En la práctica cotidiana también se usa el dólar estadounidense (USD).

#### Teléfono

- Código de país: `+509`
- Formato móvil: `+509 ## ## ####`
- Formato fijo: `+509 ## ## ####`

#### Código postal

- Formato: 4 dígitos numéricos
- Máscara: `####`
- Ejemplo: `6110` (Puerto Príncipe)

---

### 🇯🇲 Jamaica — `jm`

**Issue label:** `country/jm`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| TRN | Taxpayer Registration Number | Número fiscal de 9 dígitos emitido por TAJ (Tax Administration Jamaica). Formato `###-###-###` |
| NIS | National Insurance Scheme | Número de seguridad social de 7 caracteres alfanuméricos |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `J$` | `JMD` | `J$ 1,234.56` |

#### Teléfono

- Código de país: `+1`
- Prefijo local: `876`
- Formato: `+1 (876) ###-####`

#### Código postal

- Jamaica implementó códigos postales de 6 caracteres alfanuméricos en 2007 (JEPOST), pero su uso no está completamente estandarizado.
- Formato: `## ####`
- Ejemplo: `KN 1502` (Kingston)

---

### 🇹🇹 Trinidad y Tobago — `tt`

**Issue label:** `country/tt`

#### Documentos fiscales e identidad

| Documento | Nombre completo | Descripción |
|-----------|----------------|-------------|
| BIR | Board of Inland Revenue Number | Número fiscal de 9 dígitos. Formato `###-###-###` |
| NIS | National Insurance Number | Número de seguridad social de 9 caracteres |
| ID | National Identification Card | Número de identificación nacional |

#### Moneda

| Símbolo | Código ISO | Ejemplo |
|---------|-----------|---------|
| `TT$` | `TTD` | `TT$ 1,234.56` |

#### Teléfono

- Código de país: `+1`
- Prefijo local: `868`
- Formato: `+1 (868) ###-####`

#### Código postal

- Trinidad y Tobago no tiene un sistema de códigos postales formalmente estandarizado y en uso generalizado.
- El módulo puede implementar un campo permisivo o retornar `null`.

---

## Cómo reclamar un país

Si quieres implementar el soporte para un país específico, sigue estos pasos:

### 1. Abre un issue

Antes de empezar a escribir código, abre un issue en GitHub con:

- **Título:** `feat: add country/xx support` (reemplaza `xx` por el código del módulo)
- **Label:** `country/xx`
- **Contenido:** menciona qué documentos planeas implementar y si ya tienes referencias de los algoritmos de validación

Esto evita trabajo duplicado y permite que el equipo te dé feedback antes de que inviertas tiempo.

### 2. Haz un fork del repositorio

```bash
# Fork en GitHub, luego:
git clone https://github.com/TU-USUARIO/palta.git
cd palta
npm install
```

### 3. Crea tu branch

```bash
git checkout -b feat/xx-ruc
# Usa el código del módulo como prefijo (ej: feat/mx-rfc, feat/uy-rut)
```

### 4. Implementa el módulo

Crea la carpeta `src/xx/` con los archivos necesarios. Cada módulo debe implementar las interfaces definidas en `src/types.ts`:

```
src/
  xx/
    index.ts          # exporta todos los módulos del país
    document.ts       # implementa DocumentModule
    currency.ts       # implementa CurrencyModule
    phone.ts          # implementa PhoneModule
    zipcode.ts        # implementa ZipcodeModule
```

### 5. Escribe los tests

```
tests/
  xx/
    document.test.ts
    currency.test.ts
    phone.test.ts
    zipcode.test.ts
```

Ejecuta los tests y verifica la cobertura:

```bash
npm test
npm run test:coverage
```

### 6. Actualiza los archivos de configuración

- Agrega `export * as xx from './xx/index.js'` en `src/index.ts`
- Agrega el entry en `tsup.config.ts`
- Agrega el export en `package.json`
- Actualiza la tabla de estado en este `ROADMAP.md`

### 7. Abre el Pull Request

```bash
git push origin feat/xx-ruc
```

Abre el PR en GitHub con una descripción clara de qué documentos implementaste, las fuentes que consultaste para los algoritmos de validación, y los casos de borde que contemplaste.

---

## Reglas del proyecto

Todo el código del proyecto debe cumplir con estos estándares para ser aceptado:

| Regla | Detalle |
|-------|---------|
| **Zero dependencies** | Sin dependencias de runtime. Solo `devDependencies` para tooling |
| **TypeScript strict** | `strict: true` en `tsconfig.json`. Sin uso de `any` |
| **Funciones puras** | Sin efectos secundarios, sin estado global, sin mutaciones |
| **Cobertura minima** | Cobertura de tests >= 94% (verificado con `npm run test:coverage`) |
| **Defensivo** | Las funciones deben manejar `null`, `undefined` y strings vacíos sin lanzar excepciones |
| **Inmutabilidad** | No modificar los argumentos recibidos. Retornar siempre nuevos valores |
| **Interfaces compartidas** | Implementar las interfaces de `src/types.ts`. No inventar contratos propios |
| **Node >= 18** | El código puede asumir disponibilidad de APIs modernas de Node 18+ |

---

## Fuentes de referencia por país

Al implementar la validación de documentos, consulta siempre las fuentes oficiales:

- **México RFC:** [SAT — Servicio de Administración Tributaria](https://www.sat.gob.mx)
- **México CURP:** [RENAPO](https://www.gob.mx/curp)
- **Uruguay RUT/CI:** [DGI Uruguay](https://www.dgi.gub.uy)
- **Venezuela RIF:** [SENIAT](https://www.seniat.gob.ve)
- **Ecuador RUC/CI:** [SRI Ecuador](https://www.sri.gob.ec)
- **Bolivia NIT:** [SIN Bolivia](https://www.impuestos.gob.bo)
- **Paraguay RUC:** [SET Paraguay](https://www.set.gov.py)
- **República Dominicana RNC/Cédula:** [DGII](https://www.dgii.gov.do)
- **Costa Rica Cédula/NIT:** [Hacienda CR](https://www.hacienda.go.cr)
- **Panamá RUC:** [DGI Panamá](https://www.mef.gob.pa)
- **Guatemala NIT:** [SAT Guatemala](https://portal.sat.gob.gt)
- **Honduras RTN:** [SAR Honduras](https://www.sar.gob.hn)
- **El Salvador NIT/DUI:** [MH El Salvador](https://www.mh.gob.sv)
- **Nicaragua RUC:** [DGI Nicaragua](https://www.dgi.gob.ni)
- **Cuba NIT/CI:** [ONAT Cuba](https://www.onat.gob.cu)
- **Trinidad y Tobago BIR:** [IRD Trinidad](https://www.ird.gov.tt)
- **Jamaica TRN:** [TAJ Jamaica](https://www.jamaicatax.gov.jm)

---

## Preguntas frecuentes

**¿Puedo implementar solo un tipo de documento y no todos?**
Sí. Un PR que implemente solo `mx.rfc` ya es una contribución válida. No es necesario implementar todo el módulo de un país de una sola vez.

**¿El módulo de moneda es obligatorio?**
No es bloqueante, pero si el país tiene moneda propia y no usa USD, es altamente recomendado incluirlo para que el módulo sea útil en contextos de e-commerce.

**¿Cómo manejo países que usan USD como moneda oficial?**
El módulo `currency` puede exportar un wrapper que use formato USD con el símbolo local si existe (ej: `$` para Ecuador, `$` para El Salvador) o simplemente re-exportar el comportamiento estándar de USD.

**¿Puedo agregar funciones extra que no están en las interfaces?**
Sí, siempre que las interfaces base estén implementadas. Por ejemplo, `cl.rut` exporta `getCheckDigit()` además de las funciones estándar.

**¿Cómo verifico que mi implementación es correcta?**
Usa casos de prueba reales: documentos de ejemplo disponibles en la documentación oficial de cada organismo tributario, o generadores de datos de prueba reconocidos para cada país.

---

## Reconocimientos

Este proyecto es posible gracias a la comunidad open source y a todos los contribuyentes que comparten su conocimiento sobre los sistemas tributarios y de identidad de América Latina.

Creado por [zeluizr](https://github.com/zeluizr) en asociación con [commente.me](https://commente.me).

---

[Português](./ROADMAP.pt.md) · [English](./ROADMAP.en.md) · [CONTRIBUTING.md](./CONTRIBUTING.md) · [README.md](./README.md) · [npm](https://www.npmjs.com/package/@zeluizr/palta) · [palta.zeluizr.com](https://palta.zeluizr.com)
