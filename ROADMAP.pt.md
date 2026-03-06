# 🥑 palta — Roadmap de Países

Este documento lista todos os países da América Latina que ainda não foram implementados no `@zeluizr/palta`, organizados por prioridade de implementação.

Cada país listado aqui é uma oportunidade aberta para a comunidade contribuir. Se você tem conhecimento sobre documentos fiscais, formatos de identidade ou dados locais de qualquer um destes países, sua contribuição é muito bem-vinda!

---

## Tabela de status geral

| País | Módulo | Status |
|------|--------|--------|
| 🇧🇷 Brasil | `br` | ✅ Disponível |
| 🇨🇱 Chile | `cl` | ✅ Disponível |
| 🇦🇷 Argentina | `ar` | ✅ Disponível |
| 🇨🇴 Colômbia | `co` | ✅ Disponível |
| 🇵🇪 Peru | `pe` | ✅ Disponível |
| 🇲🇽 México | `mx` | 📋 Planejado |
| 🇺🇾 Uruguai | `uy` | 📋 Planejado |
| 🇻🇪 Venezuela | `ve` | 📋 Planejado |
| 🇪🇨 Equador | `ec` | 📋 Planejado |
| 🇧🇴 Bolívia | `bo` | 📋 Planejado |
| 🇵🇾 Paraguai | `py` | 📋 Planejado |
| 🇩🇴 República Dominicana | `do` | 📋 Planejado |
| 🇨🇷 Costa Rica | `cr` | 📋 Planejado |
| 🇵🇦 Panamá | `pa` | 📋 Planejado |
| 🇬🇹 Guatemala | `gt` | 📋 Planejado |
| 🇭🇳 Honduras | `hn` | 📋 Planejado |
| 🇸🇻 El Salvador | `sv` | 📋 Planejado |
| 🇳🇮 Nicarágua | `ni` | 📋 Planejado |
| 🇨🇺 Cuba | `cu` | 📋 Planejado |
| 🇵🇷 Porto Rico | `pr` | 📋 Planejado |
| 🇭🇹 Haiti | `ht` | 📋 Planejado |
| 🇯🇲 Jamaica | `jm` | 📋 Planejado |
| 🇹🇹 Trinidad e Tobago | `tt` | 📋 Planejado |

---

## Como reivindicar um país

Quer implementar suporte a um novo país? Siga estes passos:

### 1. Abra uma issue

Antes de começar a codificar, abra uma issue no repositório usando a label correspondente ao país (ex: `country/mx`). Descreva brevemente o que pretende implementar. Isso evita trabalho duplicado e permite que a comunidade colabore.

Título sugerido: `feat: add Mexico (mx) support`

### 2. Faça um fork e crie uma branch

```bash
git clone https://github.com/zeluizr/palta
cd palta
git checkout -b feat/mx-support
```

### 3. Implemente o módulo

Crie a estrutura de diretórios seguindo o padrão do projeto:

```
src/mx/
  index.ts        ← exporta todos os módulos do país
  rfc.ts          ← documento fiscal principal
  curp.ts         ← documento de identidade (se aplicável)
  currency.ts     ← moeda local
  phone.ts        ← telefone
  zipcode.ts      ← código postal (se aplicável)

tests/mx/
  rfc.test.ts
  curp.test.ts
  currency.test.ts
  phone.test.ts
  zipcode.test.ts
```

### 4. Registre o módulo

Adicione o export em `src/index.ts`:

```ts
export * as mx from './mx/index.js'
```

Adicione o entry point em `tsup.config.ts` e o export em `package.json`.

### 5. Rode os testes e abra o PR

```bash
npm test
npm run test:coverage   # cobertura deve ser >= 94%
```

Abra um Pull Request referenciando a issue criada no passo 1.

---

## Regras do projeto

Todo código contribuído deve seguir estas regras sem exceção:

| Regra | Descrição |
|-------|-----------|
| **Zero dependências** | Nenhuma dependência de runtime. Apenas TypeScript e ferramentas de dev. |
| **TypeScript strict** | `strict: true` no tsconfig. Sem `any` explícito. |
| **Funções puras** | Sem efeitos colaterais, sem mutação de estado externo. |
| **Cobertura >= 94%** | Medida com Vitest. O CI bloqueia PRs abaixo do limite. |
| **Defensivo** | Todas as funções devem lidar com `null`, `undefined` e strings vazias sem lançar exceções. |
| **Interfaces padrão** | Implementar as interfaces definidas em `src/types.ts` (`DocumentModule`, `CurrencyModule`, `PhoneModule`, `ZipcodeModule`). |

---

## Prioridade Alta

Países com grande população, volume de transações digitais elevado ou alta demanda da comunidade de desenvolvedores.

---

### 🇲🇽 México

- **Módulo:** `mx`
- **Label de issue:** `country/mx`
- **Código telefônico:** `+52`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RFC** (Registro Federal de Contribuyentes) | Identificador fiscal de pessoas físicas (13 caracteres) e jurídicas (12 caracteres). Formato: `AAAA######AAA` (PF) ou `AAA######AA` (PJ). Inclui dígito verificador alfanumérico. |
| **CURP** (Clave Única de Registro de Población) | Identificador único de pessoa física. 18 caracteres alfanuméricos. Obrigatório para todos os cidadãos e residentes mexicanos. |
| **IMSS** (Número de Seguridad Social) | Número de previdência social. 11 dígitos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$` | `MXN` | `$1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `06600` |

---

### 🇺🇾 Uruguai

- **Módulo:** `uy`
- **Label de issue:** `country/uy`
- **Código telefônico:** `+598`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RUT** (Registro Único Tributario) | Identificador fiscal de empresas. 12 dígitos. Formato: `##-######-###-#` com dígito verificador. Não confundir com o RUT chileno. |
| **CI** (Cédula de Identidad) | Documento de identidade pessoal. 7 ou 8 dígitos. Formato: `#.###.###-#` com dígito verificador. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$U` | `UYU` | `$U 1.234,56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `11000` |

---

### 🇻🇪 Venezuela

- **Módulo:** `ve`
- **Label de issue:** `country/ve`
- **Código telefônico:** `+58`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RIF** (Registro de Información Fiscal) | Identificador fiscal. Prefixo de letra (J = jurídica, V = pessoa física venezolana, E = estrangeiro, G = governo) seguido de 9 dígitos e dígito verificador. Formato: `J-########-#`. |
| **Cédula de Identidad** | Documento de identidade pessoal. Prefixo V (venezuelano) ou E (estrangeiro) seguido de 7 a 8 dígitos. Formato: `V-########`. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `Bs.` | `VES` | `Bs. 1.234,56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `####` | 4 dígitos numéricos | `1010` |

---

### 🇪🇨 Equador

- **Módulo:** `ec`
- **Label de issue:** `country/ec`
- **Código telefônico:** `+593`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RUC** (Registro Único de Contribuyentes) | Identificador fiscal de pessoas jurídicas e profissionais autônomos. 13 dígitos. Os 10 primeiros dígitos correspondem à cédula de identidade do representante legal, seguidos de `001`. |
| **Cédula de Identidad** | Documento de identidade pessoal. 10 dígitos. Os dois primeiros indicam a província de nascimento (01–24). Inclui dígito verificador no 10º dígito. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$` | `USD` | `$1,234.56` |

> O Equador utiliza o dólar americano (USD) como moeda oficial desde 2000.

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `######` | 6 dígitos numéricos | `170150` |

---

## Prioridade Média

Países com mercados digitais em crescimento ou que completam a cobertura regional da América do Sul e América Central.

---

### 🇧🇴 Bolívia

- **Módulo:** `bo`
- **Label de issue:** `country/bo`
- **Código telefônico:** `+591`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIT** (Número de Identificación Tributaria) | Identificador fiscal para empresas e autônomos. Formato numérico de comprimento variável (geralmente 13 dígitos). |
| **CI** (Cédula de Identidad) | Documento de identidade pessoal. 5 a 8 dígitos numéricos, podendo incluir sufixo de departamento (ex: `1234567 LP`). |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `Bs` | `BOB` | `Bs 1.234,56` |

#### Código postal

> A Bolívia não utiliza um sistema de código postal formal e padronizado. O módulo `zipcode` pode ser omitido ou implementado com validação relaxada.

---

### 🇵🇾 Paraguai

- **Módulo:** `py`
- **Label de issue:** `country/py`
- **Código telefônico:** `+595`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RUC** (Registro Único de Contribuyentes) | Identificador fiscal. Formato: até 8 dígitos seguidos de um dígito verificador separado por hífen. Exemplo: `80000001-1`. |
| **CI** (Cédula de Identidad) | Documento de identidade pessoal. 5 a 8 dígitos numéricos. Sem dígito verificador padronizado. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `₲` | `PYG` | `₲ 1.234.567` |

> O guarani não usa casas decimais nas transações cotidianas.

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `####` | 4 dígitos numéricos | `1209` |

---

### 🇩🇴 República Dominicana

- **Módulo:** `do`
- **Label de issue:** `country/do`
- **Código telefônico:** `+1-809`, `+1-829`, `+1-849`

> Atenção: `do` é uma palavra reservada em JavaScript. O módulo deve ser exportado como `dom` ou acessado via `import * as dom from '@zeluizr/palta/do'`.

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RNC** (Registro Nacional del Contribuyente) | Identificador fiscal de pessoas jurídicas. 9 dígitos com dígito verificador. Formato: `#-##-#####-#`. |
| **Cédula de Identidad y Electoral** | Documento de identidade pessoal. 11 dígitos. Formato: `###-#######-#` com dígito verificador. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `RD$` | `DOP` | `RD$ 1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `10101` |

---

### 🇨🇷 Costa Rica

- **Módulo:** `cr`
- **Label de issue:** `country/cr`
- **Código telefônico:** `+506`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIT / Cédula Jurídica** | Identificador fiscal de empresas. 10 dígitos. Formato: `#-###-######`. |
| **Cédula de Identidad** | Documento de identidade pessoal de cidadãos costarriquenhos. 9 dígitos. Formato: `#-####-####`. |
| **DIMEX** (Documento de Identidad Migratorio para Extranjeros) | Documento de residentes estrangeiros. 11 ou 12 dígitos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `₡` | `CRC` | `₡1.234,56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `10101` |

---

### 🇵🇦 Panamá

- **Módulo:** `pa`
- **Label de issue:** `country/pa`
- **Código telefônico:** `+507`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RUC** (Registro Único de Contribuyente) | Identificador fiscal. Formato variável conforme tipo de pessoa: PF usa a cédula de identidade, PJ usa número sequencial com dígito verificador. |
| **Cédula de Identidad Personal** | Documento de identidade pessoal. Formato: `#-###-####` (províncias) ou `PE-##-###` (regiões indígenas). |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `B/.` | `PAB` | `B/. 1,234.56` |

> O Panamá usa o balboa em paridade fixa com o dólar americano (USD), que também circula amplamente.

#### Código postal

> O Panamá não possui um sistema de código postal nacional padronizado.

---

## Prioridade Comunidade

Países da América Central e Caribe com menor volume de uso estimado, mas cuja cobertura completa o mapa da LATAM. Contribuições são incentivadas, especialmente de desenvolvedores locais.

---

### 🇬🇹 Guatemala

- **Módulo:** `gt`
- **Label de issue:** `country/gt`
- **Código telefônico:** `+502`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIT** (Número de Identificación Tributaria) | Identificador fiscal de pessoas físicas e jurídicas. Formato: até 8 dígitos seguidos de dígito verificador separado por hífen. Exemplo: `1234567-8`. |
| **DPI** (Documento Personal de Identificación) | Documento de identidade pessoal. 13 dígitos numéricos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `Q` | `GTQ` | `Q1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `01001` |

---

### 🇭🇳 Honduras

- **Módulo:** `hn`
- **Label de issue:** `country/hn`
- **Código telefônico:** `+504`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RTN** (Registro Tributario Nacional) | Identificador fiscal. 14 dígitos numéricos. Pessoas físicas usam os 13 dígitos da identidade mais 1 dígito verificador. |
| **DNI** (Documento Nacional de Identidad) | Documento de identidade pessoal. 13 dígitos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `L` | `HNL` | `L 1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `11101` |

---

### 🇸🇻 El Salvador

- **Módulo:** `sv`
- **Label de issue:** `country/sv`
- **Código telefônico:** `+503`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIT** (Número de Identificación Tributaria) | Identificador fiscal. 14 dígitos. Formato: `####-######-###-#`. |
| **DUI** (Documento Único de Identidad) | Documento de identidade pessoal. 9 dígitos. Formato: `########-#` com dígito verificador. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$` | `USD` | `$1,234.56` |

> El Salvador adotou o dólar americano (USD) como moeda oficial desde 2001. Em 2021, também adotou o Bitcoin como moeda de curso legal.

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `####` | 4 dígitos numéricos | `1101` |

---

### 🇳🇮 Nicarágua

- **Módulo:** `ni`
- **Label de issue:** `country/ni`
- **Código telefônico:** `+505`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **RUC** (Registro Único de Contribuyente) | Identificador fiscal de empresas. Formato variável, geralmente baseado na cédula de identidade do representante legal seguida de sufixo `0000`. |
| **Cédula de Identidad** | Documento de identidade pessoal. 14 dígitos numéricos. Formato: `###-######-####X` onde X é letra verificadora. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `C$` | `NIO` | `C$ 1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `11001` |

---

### 🇨🇺 Cuba

- **Módulo:** `cu`
- **Label de issue:** `country/cu`
- **Código telefônico:** `+53`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIT** (Número de Identificación Tributaria) | Identificador fiscal. Geralmente equivale ao número do Carnet de Identidad para pessoas físicas. |
| **Carnet de Identidad** | Documento de identidade pessoal. 11 dígitos. Os primeiros 6 codificam a data de nascimento (AAMMDD), o 7º indica o século, do 8º ao 10º são sequenciais, e o 11º é dígito verificador. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$` | `CUP` | `$1.234,56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` | 5 dígitos numéricos | `10400` |

---

### 🇵🇷 Porto Rico

- **Módulo:** `pr`
- **Label de issue:** `country/pr`
- **Código telefônico:** `+1-787`, `+1-939`

> Porto Rico é um território dos Estados Unidos. Utiliza o SSN americano para fins fiscais federais e o EIN para empresas. O módulo pode focar em formatação de SSN/EIN no contexto local.

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **SSN** (Social Security Number) | Número da previdência social americana. 9 dígitos. Formato: `###-##-####`. |
| **EIN** (Employer Identification Number) | Identificador fiscal de empresas. 9 dígitos. Formato: `##-#######`. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `$` | `USD` | `$1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `#####` ou `#####-####` | 5 ou 9 dígitos (ZIP+4) | `00901` |

---

### 🇭🇹 Haiti

- **Módulo:** `ht`
- **Label de issue:** `country/ht`
- **Código telefônico:** `+509`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **NIF** (Numéro d'Identification Fiscale) | Identificador fiscal. Formato: `##-##-###-#` com dígito verificador. |
| **CIN** (Carte d'Identification Nationale) | Documento de identidade pessoal. 13 dígitos numéricos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `G` | `HTG` | `G 1,234.56` |

#### Código postal

| Formato | Dígitos | Exemplo |
|---------|---------|---------|
| `####` | 4 dígitos numéricos | `6110` |

---

### 🇯🇲 Jamaica

- **Módulo:** `jm`
- **Label de issue:** `country/jm`
- **Código telefônico:** `+1-876`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **TRN** (Taxpayer Registration Number) | Identificador fiscal. 9 dígitos numéricos. Formato: `###-###-###`. |
| **NIS** (National Insurance Scheme Number) | Número de previdência social. Formato alfanumérico. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `J$` | `JMD` | `J$1,234.56` |

#### Código postal

> A Jamaica não possui um sistema de código postal nacional padronizado. Endereços usam nomes de paróquias e localidades.

---

### 🇹🇹 Trinidad e Tobago

- **Módulo:** `tt`
- **Label de issue:** `country/tt`
- **Código telefônico:** `+1-868`

#### Documentos fiscais e de identidade

| Documento | Descrição |
|-----------|-----------|
| **BIR** (Board of Inland Revenue Number) | Identificador fiscal. 9 dígitos numéricos. |
| **National ID** | Documento de identidade pessoal. Formato alfanumérico com prefixo de letra seguido de 8 dígitos. |

#### Moeda

| Símbolo | Código ISO | Exemplo formatado |
|---------|------------|-------------------|
| `TT$` | `TTD` | `TT$1,234.56` |

#### Código postal

> Trinidad e Tobago não possui um sistema de código postal nacional padronizado.

---

## Referência rápida — todos os países pendentes

| Bandeira | País | Módulo | Fiscal | Identidade | Moeda | Tel. | CEP |
|----------|------|--------|--------|------------|-------|------|-----|
| 🇲🇽 | México | `mx` | RFC | CURP | MXN `$` | +52 | 5 dígitos |
| 🇺🇾 | Uruguai | `uy` | RUT | CI | UYU `$U` | +598 | 5 dígitos |
| 🇻🇪 | Venezuela | `ve` | RIF | Cédula | VES `Bs.` | +58 | 4 dígitos |
| 🇪🇨 | Equador | `ec` | RUC | Cédula | USD `$` | +593 | 6 dígitos |
| 🇧🇴 | Bolívia | `bo` | NIT | CI | BOB `Bs` | +591 | — |
| 🇵🇾 | Paraguai | `py` | RUC | CI | PYG `₲` | +595 | 4 dígitos |
| 🇩🇴 | República Dominicana | `do` | RNC | Cédula | DOP `RD$` | +1-809 | 5 dígitos |
| 🇨🇷 | Costa Rica | `cr` | Cédula Jurídica | Cédula / DIMEX | CRC `₡` | +506 | 5 dígitos |
| 🇵🇦 | Panamá | `pa` | RUC | Cédula | PAB `B/.` | +507 | — |
| 🇬🇹 | Guatemala | `gt` | NIT | DPI | GTQ `Q` | +502 | 5 dígitos |
| 🇭🇳 | Honduras | `hn` | RTN | DNI | HNL `L` | +504 | 5 dígitos |
| 🇸🇻 | El Salvador | `sv` | NIT | DUI | USD `$` | +503 | 4 dígitos |
| 🇳🇮 | Nicarágua | `ni` | RUC | Cédula | NIO `C$` | +505 | 5 dígitos |
| 🇨🇺 | Cuba | `cu` | NIT | Carnet de Identidad | CUP `$` | +53 | 5 dígitos |
| 🇵🇷 | Porto Rico | `pr` | EIN | SSN | USD `$` | +1-787 | 5 dígitos |
| 🇭🇹 | Haiti | `ht` | NIF | CIN | HTG `G` | +509 | 4 dígitos |
| 🇯🇲 | Jamaica | `jm` | TRN | National ID | JMD `J$` | +1-876 | — |
| 🇹🇹 | Trinidad e Tobago | `tt` | BIR | National ID | TTD `TT$` | +1-868 | — |

---

## Dicas para implementadores

### Estrutura de um módulo de documento

```ts
// src/mx/rfc.ts
import type { DocumentModule } from '../types.js'

export const rfc: DocumentModule = {
  mask: '###########',

  format(value: string): string {
    const clean = this.strip(value)
    if (!clean) return ''
    // lógica de formatação
    return clean
  },

  strip(value: string): string {
    if (!value) return ''
    return value.replace(/[^A-Z0-9]/gi, '').toUpperCase()
  },

  validate(value: string): boolean {
    if (!value) return false
    const clean = this.strip(value)
    // lógica de validação com dígito verificador
    return clean.length === 13
  },
}
```

### Estrutura de um módulo de moeda

```ts
// src/mx/currency.ts
import type { CurrencyModule } from '../types.js'

export const currency: CurrencyModule = {
  symbol: '$',
  code: 'MXN',

  format(value: number, options = {}): string {
    const { decimals = 2, symbol = true } = options
    const formatted = value.toLocaleString('es-MX', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
    return symbol ? `${this.symbol}${formatted}` : formatted
  },

  parse(value: string): number {
    if (!value) return 0
    return parseFloat(value.replace(/[^0-9.,-]/g, '').replace(',', '.'))
  },
}
```

### Estrutura do index do país

```ts
// src/mx/index.ts
export { rfc } from './rfc.js'
export { curp } from './curp.js'
export { currency } from './currency.js'
export { phone } from './phone.js'
export { zipcode } from './zipcode.js'
```

---

## Links úteis

- [CONTRIBUTING.md](./CONTRIBUTING.md) — guia completo de contribuição
- [src/types.ts](./src/types.ts) — interfaces TypeScript que todos os módulos devem implementar
- [Repositório no GitHub](https://github.com/zeluizr/palta) — abra issues e pull requests aqui
- [npm: @zeluizr/palta](https://www.npmjs.com/package/@zeluizr/palta) — pacote publicado

---

[Español](./ROADMAP.md) · [English](./ROADMAP.en.md)

---

*Feito com muito amor e cafe por [commente.me](https://commente.me)*
