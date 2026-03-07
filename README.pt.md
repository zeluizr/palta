# 🥑 palta

[![npm](https://img.shields.io/npm/v/@zeluizr/palta)](https://www.npmjs.com/package/@zeluizr/palta)
[![license](https://img.shields.io/npm/l/@zeluizr/palta)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@zeluizr/palta)](https://bundlephobia.com/package/@zeluizr/palta)
[![website](https://img.shields.io/badge/website-palta.zeluizr.com-blue)](https://palta.zeluizr.com/)
[![GitHub Stars](https://img.shields.io/github/stars/zeluizr/palta?style=flat)](https://github.com/zeluizr/palta/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/zeluizr/palta?style=flat)](https://github.com/zeluizr/palta/network/members)
[![Open Source](https://img.shields.io/badge/open_source-%E2%9D%A4-brightgreen)](https://github.com/zeluizr/palta)

**Formatação e validação de dados da América Latina.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs. Zero dependências, tree-shakeable, funciona no browser e no Node.js.

---

<sub>USADO EM PRODUÇÃO POR</sub><br>
[![integram.me](https://img.shields.io/badge/integram.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://integram.me)

<sub>PATROCINADORES</sub><br>
[![inmmerce](https://img.shields.io/badge/inmmerce-→-222222?style=flat-square&labelColor=222222&color=333333)](https://inmmerce.com) [![commente.me](https://img.shields.io/badge/commente.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://commente.me)

---

## Países suportados

| País | Documentos | Moeda | Telefone | CEP |
|------|-----------|-------|----------|-----|
| 🇧🇷 Brasil | CPF, CNPJ | BRL (R$) | +55 | 8 dígitos |
| 🇨🇱 Chile | RUT | CLP ($) | +56 | 7 dígitos |
| 🇦🇷 Argentina | CUIT/CUIL, DNI | ARS ($) | +54 | CPA ou 4 dígitos |
| 🇨🇴 Colômbia | NIT, CC | COP ($) | +57 | 6 dígitos |
| 🇵🇪 Peru | RUC, DNI | PEN (S/) | +51 | 5 dígitos |
| 🇲🇽 México | RFC, CURP | MXN ($) | +52 | 5 dígitos |

---

## Instalação

```bash
npm install @zeluizr/palta
```

---

## Demo

Teste todos os módulos ao vivo:

- 🌐 [palta.zeluizr.com/demo](https://palta.zeluizr.com/demo) — demo interativa
- 📄 [demo/index.html](./demo/index.html) — demo standalone (abre no browser)

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

// Colômbia
co.nit.format('8000000001')         // '800.000.000-1'
co.cc.format('1234567890')          // '1.234.567.890'
co.currency.format(89900)           // '$ 89.900'

// Peru
pe.ruc.validate('20100070970')      // true
pe.dni.validate('12345678')         // true
pe.currency.format(1234.56)         // 'S/ 1,234.56'

// Auto-detecção
detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }
```

---

## Imports seletivos

Para melhor tree-shaking, importe apenas o módulo que você precisa:

```ts
// Importar só Brasil
import { br } from '@zeluizr/palta'
import br from '@zeluizr/palta/br'

// Importar só um módulo
import * as br from '@zeluizr/palta/br'
```

---

## API Reference

### Documentos fiscais

Todos os módulos de documento expõem:

```ts
format(value: string): string    // Formata com pontuação
strip(value: string): string     // Remove formatação
validate(value: string): boolean // Valida dígito verificador
mask: string                     // Máscara para inputs
```

#### Brasil

| Módulo | Formato | Exemplo |
|--------|---------|---------|
| `br.cpf` | `###.###.###-##` | `529.982.247-25` |
| `br.cnpj` | `##.###.###/####-##` | `11.222.333/0001-81` |

#### Chile

| Módulo | Formato | Exemplo | Extra |
|--------|---------|---------|-------|
| `cl.rut` | `##.###.###-X` | `12.345.678-5` | `getCheckDigit(body)` |

#### Argentina

| Módulo | Formato | Exemplo |
|--------|---------|---------|
| `ar.cuit` | `##-########-#` | `20-12345678-6` |
| `ar.dni` | `##.###.###` | `12.345.678` |

#### Colômbia

| Módulo | Formato | Exemplo |
|--------|---------|---------|
| `co.nit` | `###.###.###-#` | `800.000.000-1` |
| `co.cc` | `#.###.###.###` | `1.234.567.890` |

#### Peru

| Módulo | Formato | Exemplo |
|--------|---------|---------|
| `pe.ruc` | `###########` | `20100070970` |
| `pe.dni` | `########` | `12345678` |

---

### Moedas

```ts
format(value: number, options?: { decimals?: number; symbol?: boolean }): string
parse(value: string): number
symbol: string
code: string
```

| País | Módulo | Símbolo | Código | Exemplo |
|------|--------|---------|--------|---------|
| Brasil | `br.currency` | `R$` | `BRL` | `R$ 1.234,56` |
| Chile | `cl.currency` | `$` | `CLP` | `$15.990` |
| Argentina | `ar.currency` | `$` | `ARS` | `$ 1.234,56` |
| Colômbia | `co.currency` | `$` | `COP` | `$ 89.900` |
| Peru | `pe.currency` | `S/` | `PEN` | `S/ 1,234.56` |

```ts
br.currency.format(1234.56)                       // 'R$ 1.234,56'
br.currency.format(1234.56, { symbol: false })    // '1.234,56'
br.currency.format(1234, { decimals: 0 })         // 'R$ 1.234'
br.currency.parse('R$ 1.234,56')                  // 1234.56
```

---

### Telefones

```ts
format(value: string, options?: { international?: boolean }): string
validate(value: string): boolean
mask: string | { mobile: string; landline: string }
countryCode: string
```

| País | Módulo | Código | Celular | Fixo |
|------|--------|--------|---------|------|
| Brasil | `br.phone` | `+55` | `(##) #####-####` | `(##) ####-####` |
| Chile | `cl.phone` | `+56` | `+56 9 #### ####` | `+56 # #### ####` |
| Argentina | `ar.phone` | `+54` | `+54 9 ## ####-####` | — |
| Colômbia | `co.phone` | `+57` | `+57 ### ### ####` | — |
| Peru | `pe.phone` | `+51` | `+51 ### ### ###` | — |

---

### CEPs

```ts
format(value: string): string
validate(value: string): boolean
mask: string
```

| País | Módulo | Formato | Dígitos |
|------|--------|---------|---------|
| Brasil | `br.zipcode` | `#####-###` | 8 |
| Chile | `cl.zipcode` | `###-####` | 7 |
| Argentina | `ar.zipcode` | `A####AAA` ou `####` | CPA ou 4 |
| Colômbia | `co.zipcode` | `######` | 6 |
| Peru | `pe.zipcode` | `#####` | 5 |

---

### detect()

Auto-detecta o país e tipo de um documento:

```ts
import { detect } from '@zeluizr/palta'

detect('529.982.247-25')
// { country: 'BR', type: 'cpf', valid: true, formatted: '529.982.247-25' }

detect('76.354.771-K')
// { country: 'CL', type: 'rut', valid: true, formatted: '76.354.771-K' }

detect('xyz')
// null
```

**Mapa de detecção:**

| Comprimento | Candidatos |
|-------------|-----------|
| Contém K | RUT (Chile) |
| 8 dígitos | DNI Peru, DNI Argentina |
| 10 dígitos | CC Colômbia, NIT Colômbia |
| 11 dígitos | CPF (BR), CUIT (AR), RUC (PE) |
| 14 dígitos | CNPJ (BR) |

---

## Como adicionar um novo país

1. Crie `src/XX/` com os módulos necessários
2. Cada módulo deve implementar as interfaces em `src/types.ts`
3. Crie `src/XX/index.ts` exportando todos os módulos
4. Adicione `export * as xx from './XX/index.js'` em `src/index.ts`
5. Adicione o entry em `tsup.config.ts` e o export em `package.json`
6. Crie testes em `tests/XX/`

---

## Roadmap

Quer adicionar um novo país? Veja o roadmap completo com os 18 países pendentes, organizados por prioridade:

📍 [Ver ROADMAP.pt.md](./ROADMAP.pt.md) · [Español](./ROADMAP.md) · [English](./ROADMAP.en.md)

---

## Contribuição

Contribuições externas são muito bem-vindas! Este é um projeto open source criado por [zeluizr](https://github.com/zeluizr) em parceria com [commente.me](https://commente.me).

Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch descritiva (`git checkout -b feat/uy-rut`)
3. Implemente sua mudança seguindo as regras abaixo
4. Rode os testes (`npm test`) e verifique a cobertura (`npm run test:coverage`)
5. Abra um Pull Request

Regras do projeto:

- Zero dependências de runtime
- TypeScript strict (sem `any`)
- Funções puras e imutáveis
- Cobertura mínima de 94%
- Defensivo: lidar com `null`/`undefined` sem quebrar

---

## Licença

[MIT](./LICENSE) © [zeluizr](https://github.com/zeluizr) & [commente.me](https://commente.me)

---

Feito com muito amor ❤️ e café ☕ por [commente.me](https://commente.me)

---

[Español](./README.md) · [English](./README.en.md)
