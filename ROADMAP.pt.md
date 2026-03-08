# 🥑 palta — Roadmap

## Missão cumprida!

**Todos os países da América Latina já estão disponíveis em `@zeluizr/palta`.**

Se você encontrar um bug, quiser melhorar a validação de um documento existente, ou adicionar um módulo novo a um país que já existe, sua contribuição é **muito bem-vinda**.

---

## Países disponíveis

### América do Sul

| País | Módulo | Documentos | Moeda | Telefone |
|------|--------|-----------|-------|----------|
| 🇦🇷 Argentina | `ar` | CUIT/CUIL, DNI | ARS ($) | +54 |
| 🇧🇴 Bolívia | `bo` | NIT, CI | BOB (Bs) | +591 |
| 🇧🇷 Brasil | `br` | CPF, CNPJ | BRL (R$) | +55 |
| 🇨🇱 Chile | `cl` | RUT | CLP ($) | +56 |
| 🇨🇴 Colômbia | `co` | NIT, CC | COP ($) | +57 |
| 🇪🇨 Equador | `ec` | RUC, CI | USD ($) | +593 |
| 🇵🇾 Paraguai | `py` | RUC, CI | PYG (₲) | +595 |
| 🇵🇪 Peru | `pe` | RUC, DNI | PEN (S/) | +51 |
| 🇺🇾 Uruguai | `uy` | CI, RUT | UYU ($) | +598 |
| 🇻🇪 Venezuela | `ve` | RIF, CI | VES (Bs.) | +58 |

### América Central

| País | Módulo | Documentos | Moeda | Telefone |
|------|--------|-----------|-------|----------|
| 🇨🇷 Costa Rica | `cr` | Cédula, Jurídica, DIMEX | CRC (₡) | +506 |
| 🇸🇻 El Salvador | `sv` | NIT, DUI | USD ($) | +503 |
| 🇬🇹 Guatemala | `gt` | NIT, DPI | GTQ (Q) | +502 |
| 🇭🇳 Honduras | `hn` | RTN, DNI | HNL (L) | +504 |
| 🇳🇮 Nicarágua | `ni` | Cédula, RUC | NIO (C$) | +505 |
| 🇵🇦 Panamá | `pa` | RUC, Cédula | PAB (B/.) | +507 |

### Caribe

| País | Módulo | Documentos | Moeda | Telefone |
|------|--------|-----------|-------|----------|
| 🇨🇺 Cuba | `cu` | Carnet, REEUP | CUP ($) | +53 |
| 🇩🇴 Rep. Dominicana | `do` | Cédula, RNC | DOP (RD$) | +1-809 |
| 🇭🇹 Haiti | `ht` | NIF, CIN | HTG (G) | +509 |
| 🇯🇲 Jamaica | `jm` | TRN, NIN | JMD (J$) | +1-876 |
| 🇵🇷 Porto Rico | `pr` | EIN, SSN | USD ($) | +1-787 |
| 🇹🇹 Trinidad e Tobago | `tt` | TIN, NIS | TTD (TT$) | +1-868 |

### América do Norte

| País | Módulo | Documentos | Moeda | Telefone |
|------|--------|-----------|-------|----------|
| 🇲🇽 México | `mx` | RFC, CURP | MXN ($) | +52 |

---

## Que contribuições aceitamos?

O projeto está completo em termos de cobertura regional. A partir de agora aceitamos **melhorias e correções** nos módulos existentes.

### ✅ Aceitamos

- **Correção de bugs** — algoritmos de validação incorretos, edge cases não contemplados
- **Melhorias de precisão** — formatos mais precisos, variantes regionais de documentos
- **Novos módulos dentro de um país existente** — se um país já existe mas está faltando algum documento ou tipo de dado relevante
- **Melhorias de cobertura de testes** — casos que não estavam cobertos
- **Documentação** — correções ou melhorias nos READMEs e comentários

### ❌ Não aceitamos

- **Países fora da América Latina** — o foco do projeto é exclusivamente a região latino-americana
- **Módulos duplicados** — módulos alternativos que cumpram a mesma função que os existentes
- **Dependências de runtime** — o projeto é e continuará sendo zero-dependencies

---

## Como contribuir

1. Abra uma issue descrevendo o bug ou a melhoria
2. Faça um fork e crie uma branch: `git checkout -b fix/ar-cuit-edge-case`
3. Implemente sua mudança seguindo as regras do projeto
4. Rode os testes: `npm test && npm run test:coverage` (cobertura ≥ 94%)
5. Abra um Pull Request com uma descrição clara

---

## Regras do projeto

| Regra | Detalhe |
|-------|---------|
| **Zero dependencies** | Sem dependências de runtime |
| **TypeScript strict** | `strict: true`, sem `any` |
| **Funções puras** | Sem efeitos colaterais ou estado global |
| **Cobertura ≥ 94%** | Verificado com `npm run test:coverage` |
| **Defensivo** | `format(null)`, `validate(undefined)` nunca lançam exceção |
| **Só América Latina** | Módulos de outros continentes não são aceitos |

---

[Español](./ROADMAP.md) · [English](./ROADMAP.en.md) · [CONTRIBUTING](.github/CONTRIBUTING.pt.md) · [README](./README.pt.md) · [npm](https://www.npmjs.com/package/@zeluizr/palta)
