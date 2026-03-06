# 🥑 Como contribuir com o palta

Obrigado pelo seu interesse em contribuir! Este é um projeto open source criado por [zeluizr](https://github.com/zeluizr) em parceria com [commente.me](https://commente.me).

> Disponível também em: [Español](./CONTRIBUTING.md) · [English](./CONTRIBUTING.en.md)

---

## Antes de começar

- Verifique se já existe uma issue ou PR para o que você quer fazer
- Para mudanças grandes, abra uma issue primeiro para discutir
- Leia as regras do projeto ao final deste documento

---

## Setup local

```bash
git clone https://github.com/zeluizr/palta.git
cd palta
npm install
npm test
```

---

## Fluxo de contribuição

1. Fork do repositório
2. Crie uma branch descritiva:
   ```bash
   git checkout -b feat/uy-rut        # novo país/módulo
   git checkout -b fix/br-cpf-mask    # correção de bug
   git checkout -b docs/readme-update # documentação
   ```
3. Implemente sua mudança seguindo as regras do projeto
4. Certifique-se de que os testes passam:
   ```bash
   npm test
   npm run test:coverage  # cobertura mínima: 94%
   ```
5. Abra um Pull Request para `main`

---

## Adicionar um novo país

Estrutura necessária para cada país `XX`:

```
src/XX/
  cpf.ts        # ou o documento fiscal correspondente
  currency.ts
  phone.ts
  zipcode.ts
  index.ts      # exporta todos os módulos do país

tests/XX/
  cpf.test.ts
  currency.test.ts
  phone.test.ts
  zipcode.test.ts
```

Passos:

1. Crie `src/XX/` implementando as interfaces de `src/types.ts`
2. Crie `src/XX/index.ts` exportando todos os módulos
3. Adicione `export * as xx from './XX/index.js'` em `src/index.ts`
4. Adicione a entrada em `tsup.config.ts`:
   ```ts
   entry: { ..., 'xx/index': 'src/XX/index.ts' }
   ```
5. Adicione o export em `package.json`:
   ```json
   "./xx": {
     "types": "./dist/xx/index.d.ts",
     "import": "./dist/xx/index.js",
     "require": "./dist/xx/index.cjs"
   }
   ```
6. Crie os testes em `tests/XX/` com cobertura ≥ 94%

---

## Interfaces a implementar

```ts
// Documento fiscal
interface Document {
  format(value: string): string
  strip(value: string): string
  validate(value: string): boolean
  mask: string
}

// Moeda
interface Currency {
  format(value: number, options?: { decimals?: number; symbol?: boolean }): string
  parse(value: string): number
  symbol: string
  code: string
}

// Telefone
interface Phone {
  format(value: string, options?: { international?: boolean }): string
  validate(value: string): boolean
  mask: string | { mobile: string; landline: string }
  countryCode: string
}

// CEP / Código postal
interface Zipcode {
  format(value: string): string
  validate(value: string): boolean
  mask: string
}
```

---

## Regras do projeto

| Regra | Descrição |
|-------|-----------|
| Zero dependências | Sem dependências de runtime |
| TypeScript strict | Sem `any`, tipos explícitos |
| Funções puras | Sem mutação de estado externo |
| Defensivo | Tratar `null`/`undefined` sem lançar exceções |
| Cobertura ≥ 94% | Verificar com `npm run test:coverage` |
| Sem efeitos colaterais | `"sideEffects": false` no package.json |

---

## Licença

Ao contribuir, você concorda que seu código será publicado sob a licença [MIT](../LICENSE).
