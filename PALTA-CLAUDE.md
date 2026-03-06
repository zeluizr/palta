# palta — Instruções para Claude CLI

## Visão Geral

Crie um pacote npm chamado `palta` — uma biblioteca TypeScript de formatação e validação de dados específicos da América Latina. Zero dependencies, tree-shakeable, funciona no browser e no Node.js.

O pacote deve cobrir 5 países (Brasil, Chile, Argentina, Colômbia, Peru) com formatação e validação de: documentos fiscais, moedas, telefones, CEPs e endereços.

---

## Estrutura do Projeto

```
palta/
├── src/
│   ├── index.ts                  # Export principal: { br, cl, ar, co, pe, detect }
│   ├── types.ts                  # Tipos compartilhados
│   ├── utils.ts                  # Helpers internos (onlyDigits, padLeft, etc.)
│   ├── detect.ts                 # Auto-detecção de país/tipo
│   ├── br/
│   │   ├── index.ts              # Re-export de todos os módulos BR
│   │   ├── cpf.ts                # format, validate, generate, mask
│   │   ├── cnpj.ts               # format, validate, generate, mask
│   │   ├── currency.ts           # format (BRL), parse
│   │   ├── phone.ts              # format, validate, mask
│   │   └── zipcode.ts            # format, validate, mask
│   ├── cl/
│   │   ├── index.ts
│   │   ├── rut.ts                # format, validate, generate, getCheckDigit
│   │   ├── currency.ts           # format (CLP), parse
│   │   ├── phone.ts              # format, validate, mask
│   │   └── zipcode.ts            # format, validate
│   ├── ar/
│   │   ├── index.ts
│   │   ├── cuit.ts               # format, validate (CUIT/CUIL)
│   │   ├── dni.ts                # format, validate
│   │   ├── currency.ts           # format (ARS), parse
│   │   ├── phone.ts              # format, validate, mask
│   │   └── zipcode.ts            # format, validate (CPA)
│   ├── co/
│   │   ├── index.ts
│   │   ├── nit.ts                # format, validate
│   │   ├── cc.ts                 # Cédula de Ciudadanía - format, validate
│   │   ├── currency.ts           # format (COP), parse
│   │   ├── phone.ts              # format, validate, mask
│   │   └── zipcode.ts            # format, validate
│   └── pe/
│       ├── index.ts
│       ├── ruc.ts                # format, validate
│       ├── dni.ts                # format, validate
│       ├── currency.ts           # format (PEN), parse
│       ├── phone.ts              # format, validate, mask
│       └── zipcode.ts            # format, validate
├── tests/
│   ├── br/
│   │   ├── cpf.test.ts
│   │   ├── cnpj.test.ts
│   │   ├── currency.test.ts
│   │   ├── phone.test.ts
│   │   └── zipcode.test.ts
│   ├── cl/
│   │   ├── rut.test.ts
│   │   ├── currency.test.ts
│   │   ├── phone.test.ts
│   │   └── zipcode.test.ts
│   ├── ar/
│   │   ├── cuit.test.ts
│   │   ├── dni.test.ts
│   │   ├── currency.test.ts
│   │   ├── phone.test.ts
│   │   └── zipcode.test.ts
│   ├── co/
│   │   ├── nit.test.ts
│   │   ├── cc.test.ts
│   │   ├── currency.test.ts
│   │   ├── phone.test.ts
│   │   └── zipcode.test.ts
│   ├── pe/
│   │   ├── ruc.test.ts
│   │   ├── dni.test.ts
│   │   ├── currency.test.ts
│   │   ├── phone.test.ts
│   │   └── zipcode.test.ts
│   └── detect.test.ts
├── package.json
├── tsconfig.json
├── tsup.config.ts                # Bundler (ESM + CJS)
├── vitest.config.ts
├── .npmignore
├── LICENSE                       # MIT
└── README.md
```

---

## Configuração do Projeto

### package.json

```json
{
  "name": "palta",
  "version": "1.0.0",
  "description": "Formatação e validação de dados da América Latina — CPF, RUT, CUIT, moedas, telefones, CEPs e mais. Zero dependencies.",
  "keywords": ["brasil", "chile", "argentina", "colombia", "peru", "cpf", "cnpj", "rut", "cuit", "nit", "ruc", "format", "validate", "latam", "currency", "phone", "zipcode"],
  "author": "zeluizr",
  "license": "MIT",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./br": {
      "import": "./dist/br/index.js",
      "require": "./dist/br/index.cjs",
      "types": "./dist/br/index.d.ts"
    },
    "./cl": {
      "import": "./dist/cl/index.js",
      "require": "./dist/cl/index.cjs",
      "types": "./dist/cl/index.d.ts"
    },
    "./ar": {
      "import": "./dist/ar/index.js",
      "require": "./dist/ar/index.cjs",
      "types": "./dist/ar/index.d.ts"
    },
    "./co": {
      "import": "./dist/co/index.js",
      "require": "./dist/co/index.cjs",
      "types": "./dist/co/index.d.ts"
    },
    "./pe": {
      "import": "./dist/pe/index.js",
      "require": "./dist/pe/index.cjs",
      "types": "./dist/pe/index.d.ts"
    }
  },
  "files": ["dist"],
  "sideEffects": false,
  "engines": { "node": ">=18" },
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "lint": "tsc --noEmit",
    "prepublishOnly": "npm run lint && npm run test && npm run build"
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.4.0",
    "vitest": "^2.0.0",
    "@vitest/coverage-v8": "^2.0.0"
  }
}
```

### tsconfig.json

- `strict: true`
- `target: "ES2022"`
- `module: "ESNext"`
- `moduleResolution: "bundler"`
- `declaration: true`
- `outDir: "dist"`

### tsup.config.ts

- Gerar ESM e CJS (`format: ['esm', 'cjs']`)
- Gerar declarações de tipo (`dts: true`)
- Tree-shakeable (`treeshake: true`)
- Entry points separados por país para permitir imports seletivos
- `entry`: `['src/index.ts', 'src/br/index.ts', 'src/cl/index.ts', 'src/ar/index.ts', 'src/co/index.ts', 'src/pe/index.ts']`

---

## API — Contrato de cada módulo

Cada módulo de documento (cpf, rut, cuit, etc.) DEVE expor exatamente estas funções:

```ts
interface DocumentModule {
  /** Formata o valor com pontuação. Ex: '12345678901' → '123.456.789-01' */
  format(value: string): string

  /** Remove toda formatação, retorna só dígitos (e caracteres válidos como K no RUT) */
  strip(value: string): string

  /** Valida se o valor é um documento válido (verifica dígito verificador) */
  validate(value: string): boolean

  /** Retorna máscara para uso em inputs. Ex: '###.###.###-##' */
  mask: string
}
```

Cada módulo de moeda DEVE expor:

```ts
interface CurrencyModule {
  /** Formata número para moeda local. Ex: 15990 → '$15.990' */
  format(value: number, options?: { decimals?: number; symbol?: boolean }): string

  /** Converte string formatada para número. Ex: '$15.990' → 15990 */
  parse(value: string): number

  /** Símbolo da moeda */
  symbol: string

  /** Código ISO */
  code: string
}
```

Cada módulo de telefone DEVE expor:

```ts
interface PhoneModule {
  /** Formata telefone. Ex: '11999887766' → '(11) 99988-7766' */
  format(value: string, options?: { international?: boolean }): string

  /** Valida se é telefone válido do país */
  validate(value: string): boolean

  /** Máscara para input */
  mask: string | { mobile: string; landline: string }

  /** Código do país */
  countryCode: string
}
```

Cada módulo de CEP DEVE expor:

```ts
interface ZipcodeModule {
  /** Formata CEP. Ex: '01310100' → '01310-100' */
  format(value: string): string

  /** Valida formato do CEP */
  validate(value: string): boolean

  /** Máscara */
  mask: string
}
```

---

## Regras de Validação por País

### Brasil (br)

**CPF:**
- 11 dígitos
- Formato: `###.###.###-##`
- Algoritmo: módulo 11 com pesos [10,9,8,7,6,5,4,3,2] para o 1º dígito e [11,10,9,8,7,6,5,4,3,2] para o 2º
- Rejeitar CPFs com todos os dígitos iguais (111.111.111-11, etc.)

**CNPJ:**
- 14 dígitos
- Formato: `##.###.###/####-##`
- Algoritmo: módulo 11 com pesos [5,4,3,2,9,8,7,6,5,4,3,2] para o 1º dígito e [6,5,4,3,2,9,8,7,6,5,4,3,2] para o 2º

**Moeda (BRL):**
- Separador de milhares: `.`
- Separador decimal: `,`
- Símbolo: `R$` com espaço antes do valor
- Ex: `R$ 1.234,56`

**Telefone:**
- Código país: +55
- Celular: `(##) #####-####` (11 dígitos, começa com 9)
- Fixo: `(##) ####-####` (10 dígitos)

**CEP:**
- 8 dígitos
- Formato: `#####-###`

### Chile (cl)

**RUT:**
- 8-9 dígitos + dígito verificador (0-9 ou K)
- Formato: `##.###.###-X`
- Algoritmo: módulo 11 com pesos cíclicos [2,3,4,5,6,7], resto 0→0, resto 1→K
- Expor função `getCheckDigit(body: string): string`

**Moeda (CLP):**
- Separador de milhares: `.`
- SEM decimais (CLP não usa centavos)
- Símbolo: `$` sem espaço
- Ex: `$15.990`

**Telefone:**
- Código país: +56
- Celular: `+56 9 #### ####` (9 dígitos começando com 9)
- Fixo: `+56 # #### ####` (9 dígitos)

**CEP:**
- 7 dígitos
- Formato: `###-####` ou `### ####`

### Argentina (ar)

**CUIT/CUIL:**
- 11 dígitos
- Formato: `##-########-#`
- Prefixo indica tipo: 20/23/24 (persona física), 30/33/34 (persona jurídica), 27 (ambos)
- Algoritmo: módulo 11 com pesos [5,4,3,2,7,6,5,4,3,2]

**DNI:**
- 7-8 dígitos
- Formato: `##.###.###`

**Moeda (ARS):**
- Separador de milhares: `.`
- Separador decimal: `,`
- Símbolo: `$` com espaço
- Ex: `$ 1.234,56`

**Telefone:**
- Código país: +54
- Celular: varía por región, formato genérico `+54 9 ## ####-####`
- Fixo Buenos Aires: `+54 11 ####-####`

**CEP (CPA):**
- Formato novo: `A####AAA` (letra + 4 dígitos + 3 letras)
- Formato viejo: `####` (4 dígitos)
- Aceitar ambos formatos

### Colômbia (co)

**NIT:**
- 9 dígitos + dígito verificador
- Formato: `###.###.###-#`
- Algoritmo: módulo 11 com pesos [71,67,59,53,47,43,41,37,29,23,19,17,13,7,3]

**CC (Cédula de Ciudadanía):**
- 6-10 dígitos
- Formato: `#.###.###.###`

**Moeda (COP):**
- Separador de milhares: `.`
- Separador decimal: `,`
- Símbolo: `$` com espaço
- Normalmente sem decimais em valores do dia-a-dia
- Ex: `$ 89.900`

**Telefone:**
- Código país: +57
- Celular: `+57 3## ### ####` (10 dígitos começando com 3)
- Fixo: `+57 # ### ####`

**CEP:**
- 6 dígitos
- Formato: `######`

### Peru (pe)

**RUC:**
- 11 dígitos
- Começa com 10 (persona natural), 20 (persona jurídica), 15, 16, 17
- Algoritmo: módulo 11 com pesos [5,4,3,2,7,6,5,4,3,2]

**DNI:**
- 8 dígitos
- Formato: `########`

**Moeda (PEN):**
- Separador de milhares: `,`
- Separador decimal: `.`
- Símbolo: `S/` com espaço
- Ex: `S/ 1,234.56`

**Telefone:**
- Código país: +51
- Celular: `+51 9## ### ###` (9 dígitos começando com 9)
- Fixo Lima: `+51 1 ### ####`

**CEP:**
- 5 dígitos (Lima: 15xxx)
- Formato: `#####`

---

## Função detect()

A função `detect` deve receber uma string e tentar identificar automaticamente o país e tipo de documento:

```ts
interface DetectResult {
  country: 'BR' | 'CL' | 'AR' | 'CO' | 'PE'
  type: 'cpf' | 'cnpj' | 'rut' | 'cuit' | 'dni' | 'nit' | 'cc' | 'ruc'
  valid: boolean
  formatted: string
}

function detect(value: string): DetectResult | null
```

Lógica de detecção (por comprimento e padrões):
1. Remover formatação
2. Se contém K → provavelmente RUT chileno
3. Por comprimento: 8 dígitos → CPF ou DNI, 11 dígitos → CPF/CUIT/RUC/NIT, 14 dígitos → CNPJ
4. Tentar validar em cada algoritmo até encontrar match
5. Retornar `null` se nenhum match

---

## Testes

Usar Vitest. Cada módulo deve ter testes cobrindo:

1. **Formatação:** input sem formatação → output formatado correto
2. **Strip:** input formatado → output só dígitos
3. **Validação positiva:** documentos válidos conhecidos retornam `true`
4. **Validação negativa:** documentos inválidos, strings vazias, todos dígitos iguais retornam `false`
5. **Edge cases:** strings com espaços, caracteres especiais, comprimento errado
6. **Moeda:** formatar 0, negativos, milhões, parse de volta para número
7. **Telefone:** celular vs fixo, com e sem código país

Cobertura mínima: 95%.

Usar dados de teste reais (públicos) ou gerados pelo algoritmo de cada documento.

---

## README.md

O README deve conter:

1. Badge de npm version, bundle size, license, coverage
2. Tagline: "Formatação e validação de dados da América Latina"
3. Features com os 5 países e categorias
4. Instalação: `npm install palta`
5. Quick Start com exemplos de cada país
6. Seção de imports seletivos: `import { br } from 'palta'` ou `import br from 'palta/br'`
7. API Reference completa com tabelas
8. Bundle size por módulo
9. Seção de contribuição (como adicionar um novo país)
10. Escrito em **português** (público-alvo principal)

---

## Regras Importantes

- **ZERO dependencies** — nenhuma dependência de runtime, nem mesmo pequenas
- **Tree-shakeable** — quem importa só `br.cpf` não deve carregar código de Chile, Argentina, etc.
- **TypeScript strict** — sem `any`, sem `as` desnecessário, generics onde fizer sentido
- **Funções puras** — sem estado, sem side effects, sem mutação
- **Imutável** — todas as funções retornam valores novos
- **Defensivo** — toda função deve lidar com input `null`, `undefined`, string vazia sem quebrar (retornar string vazia ou `false`)
- **Sem Intl** — NÃO usar `Intl.NumberFormat`. Implementar formatação manualmente para garantir consistência cross-environment e zero overhead
- **Nomes em inglês** — código, variáveis, funções em inglês. README e documentação em português
