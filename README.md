# palta

**Formateo y validación de datos de América Latina — CPF, CNPJ, RUT, CUIT, NIT, RUC, monedas, teléfonos y códigos postales. Cero dependencias.**

[![npm](https://badgen.net/npm/v/@zeluizr/palta?color=7AB317)](https://www.npmjs.com/package/@zeluizr/palta)
[![node](https://badgen.net/npm/node/@zeluizr/palta?color=7AB317)](https://nodejs.org)
[![licencia](https://badgen.net/npm/license/@zeluizr/palta?label=licencia&color=7AB317)](./LICENSE)

Librería TypeScript, sin dependencias en runtime, para 23 países de América Latina: formatea,
valida, limpia y enmascara documentos; formatea y parsea monedas, teléfonos y códigos
postales; y convierte medidas.

---

## Instalación

```bash
npm i @zeluizr/palta
```

## Uso

```ts
import { br, cl, ar, measurements, detect } from '@zeluizr/palta'

// Documentos — format · validate · strip · mask
br.cpf.format('11144477735')        // '111.444.777-35'
br.cpf.validate('111.444.777-35')   // true
cl.rut.format('123456785')          // '12.345.678-5'
ar.cuit.validate('20123456786')     // true | false

// Moneda — format · parse
br.currency.format(1234.5)          // 'R$ 1.234,50'
br.currency.parse('R$ 1.234,50')    // 1234.5

// Medidas — auto-escala (cm ≥ 100 → m, g ≥ 1000 → kg)
measurements.length.format(150)     // '1,5 m'
measurements.weight.format(2500)    // '2,5 kg'

// Detección — identifica país y tipo (cpf, rut, cuit…)
detect('111.444.777-35')
```

Cada país es un namespace (`br`, `cl`, `ar`, `co`, `mx`, `pe`…); también puedes importar solo
uno: `import { br } from '@zeluizr/palta'`.

---

palta es **open source** bajo licencia [MIT](./LICENSE).

_Hecho con amor y café por [zeluizr](https://github.com/zeluizr) y con la ayuda de [Claude](https://claude.ai/referral/Cz_UimA0NQ) ☕_
