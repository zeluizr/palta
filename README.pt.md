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

**Formatação e validação de dados da América Latina.**

CPF, CNPJ, RUT, CUIT, NIT, RUC, moedas, telefones e CEPs. Zero dependências, tree-shakeable, funciona no browser e no Node.js.

---

<sub>USADO EM PRODUÇÃO POR</sub><br>
[![integram.me](https://img.shields.io/badge/integram.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://integram.me)

<sub>PATROCINADORES</sub><br>
[![inmmerce](https://img.shields.io/badge/inmmerce-→-222222?style=flat-square&labelColor=222222&color=333333)](https://inmmerce.com) [![commente.me](https://img.shields.io/badge/commente.me-→-222222?style=flat-square&labelColor=222222&color=333333)](https://commente.me)

---

## Países suportados

**23 países disponíveis** · 1.232 testes · cobertura ≥ 94%

| País | Módulo | Documentos | Moeda | Telefone |
|------|--------|-----------|-------|----------|
| 🇧🇷 Brasil | `br` | CPF, CNPJ | BRL (R$) | +55 |
| 🇨🇱 Chile | `cl` | RUT | CLP ($) | +56 |
| 🇦🇷 Argentina | `ar` | CUIT/CUIL, DNI | ARS ($) | +54 |
| 🇨🇴 Colômbia | `co` | NIT, CC | COP ($) | +57 |
| 🇵🇪 Peru | `pe` | RUC, DNI | PEN (S/) | +51 |
| 🇺🇾 Uruguai | `uy` | CI, RUT | UYU ($) | +598 |
| 🇧🇴 Bolívia | `bo` | NIT, CI | BOB (Bs) | +591 |
| 🇵🇾 Paraguai | `py` | RUC, CI | PYG (₲) | +595 |
| 🇩🇴 Rep. Dominicana | `do` | Cédula, RNC | DOP (RD$) | +1-809 |
| 🇨🇷 Costa Rica | `cr` | Cédula, Jurídica, DIMEX | CRC (₡) | +506 |
| 🇵🇦 Panamá | `pa` | RUC, Cédula | PAB (B/.) | +507 |
| 🇬🇹 Guatemala | `gt` | NIT, DPI | GTQ (Q) | +502 |
| 🇭🇳 Honduras | `hn` | RTN, DNI | HNL (L) | +504 |
| 🇸🇻 El Salvador | `sv` | NIT, DUI | USD ($) | +503 |
| 🇳🇮 Nicarágua | `ni` | Cédula, RUC | NIO (C$) | +505 |
| 🇨🇺 Cuba | `cu` | Carnet, REEUP | CUP ($) | +53 |
| 🇵🇷 Porto Rico | `pr` | EIN, SSN | USD ($) | +1-787 |
| 🇭🇹 Haiti | `ht` | NIF, CIN | HTG (G) | +509 |
| 🇯🇲 Jamaica | `jm` | TRN, NIN | JMD (J$) | +1-876 |
| 🇹🇹 Trinidad e Tobago | `tt` | TIN, NIS | TTD (TT$) | +1-868 |
| 🇲🇽 México | `mx` | RFC, CURP | MXN ($) | +52 |
| 🇻🇪 Venezuela | `ve` | RIF, CI | VES (Bs.) | +58 |
| 🇪🇨 Equador | `ec` | RUC, CI | USD ($) | +593 |

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

Todos os países da América Latina já estão disponíveis. O projeto está completo — agora aceitamos melhorias e correções nos módulos existentes:

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
