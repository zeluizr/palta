# palta — Prompt para Teammate (Trabalho Paralelo)

Você vai trabalhar em **dois projetos simultaneamente** que fazem parte do mesmo produto: **palta** — uma biblioteca TypeScript de formatação e validação de dados da América Latina.

Os dois projetos são **independentes** (repositórios separados), mas **compartilham a mesma API e identidade visual**. Leia as instruções de cada um e trabalhe neles em paralelo.

---

## Projeto 1: `palta` (biblioteca npm)

**Arquivo de instruções:** `PALTA-CLAUDE.md`

### O que é
Pacote npm TypeScript, zero dependencies, tree-shakeable. Formata e valida documentos fiscais (CPF, RUT, CUIT, NIT, RUC), moedas, telefones e CEPs de 5 países (Brasil, Chile, Argentina, Colômbia, Peru).

### O que fazer
1. Crie o projeto completo conforme `PALTA-CLAUDE.md`
2. Implemente todos os módulos de todos os 5 países
3. Cada módulo deve expor: `format`, `strip`, `validate`, `mask`
4. Escreva testes com Vitest (cobertura mínima 95%)
5. Configure build com tsup (ESM + CJS + tipos)
6. Crie o README.md em português

### Prioridade de execução
1. Setup do projeto (package.json, tsconfig, tsup, vitest)
2. Tipos e utils compartilhados
3. Módulos do Brasil (referência para os demais)
4. Módulos dos outros 4 países
5. Função `detect()`
6. Testes completos
7. README

---

## Projeto 2: `palta-landing` (landing page)

**Arquivo de instruções:** `PALTA-LANDING-CLAUDE.md`

### O que é
Landing page single-page para o pacote palta. Dark-only, bilíngue (ES padrão + PT), construída com React Router v7 (framework mode, SSR), TailwindCSS v4, i18next, motion.

### O que fazer
1. Crie o projeto conforme `PALTA-LANDING-CLAUDE.md`
2. Setup React Router v7 + Tailwind v4 + i18n
3. Implemente todos os componentes na ordem da página
4. Todas as strings via i18n (ES padrão, PT secundário)
5. **Dark-only** — sem toggle de tema, cores escuras diretas
6. Language switcher simples (ES | PT) no **footer**
7. Seção de install com **6 tabs** (npm, yarn, pnpm, bun, deno, npx)
8. Syntax highlighting manual nos code blocks (sem lib externa)

### Prioridade de execução
1. Setup do projeto (React Router, Tailwind, Vite)
2. Design system (app.css com @theme)
3. i18n config + arquivos de tradução (es.ts, pt.ts)
4. Layout raiz (root.tsx) + routes
5. Header + Hero
6. Features + Code Preview
7. Countries + Install (com tabs)
8. API Table + Stats Bar + Footer

---

## Regras Gerais

### Consistência entre os dois projetos
- Os **exemplos de código** na landing page devem refletir a API real da biblioteca
- Os **nomes de funções** mostrados na landing (format, validate, strip, mask) devem ser exatamente os mesmos exportados pelo pacote
- Os **países e formatos** listados na landing devem corresponder 1:1 com o que a biblioteca implementa

### Padrões de código
- TypeScript strict em ambos os projetos
- Sem `any`, sem dependencies desnecessárias
- Funções puras, imutáveis, defensivas (tratam null/undefined/empty)
- Código em inglês, documentação em português (biblioteca) / bilíngue ES+PT (landing)

### O que NÃO fazer
- Não usar `Intl.NumberFormat` na biblioteca (implementar formatação manual)
- Não usar lib de syntax highlighting na landing (spans manuais)
- Não adicionar modo light na landing (dark-only)
- Não colocar language switcher no header (fica no footer)
- Não usar localStorage/cookies para idioma (usar query param `?lang=`)

---

## GitHub e Publicação

Ambos os projetos são de **zeluizr** e devem ser publicados no GitHub:

- **Biblioteca:** `github.com/zeluizr/palta`
- **Landing:** `github.com/zeluizr/palta-landing`

### Setup de cada repositório
1. Inicializar com `git init`
2. Criar repo no GitHub via `gh repo create zeluizr/<nome> --public --source=. --push`
3. Primeiro commit com toda a estrutura funcional
4. Branch principal: `main`
5. Publicar o pacote npm: `npm publish` (biblioteca)
6. Deploy da landing: configurar para Vercel ou Railway

### Estrutura de Diretórios

Cada projeto é um **repositório separado** dentro do workspace:

```
Sites/
├── palta/                    # Repo: github.com/zeluizr/palta
│   ├── src/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── utils.ts
│   │   ├── detect.ts
│   │   ├── br/ (cpf, cnpj, currency, phone, zipcode)
│   │   ├── cl/ (rut, currency, phone, zipcode)
│   │   ├── ar/ (cuit, dni, currency, phone, zipcode)
│   │   ├── co/ (nit, cc, currency, phone, zipcode)
│   │   └── pe/ (ruc, dni, currency, phone, zipcode)
│   ├── tests/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsup.config.ts
│   ├── vitest.config.ts
│   └── README.md
│
└── palta-landing/            # Repo: github.com/zeluizr/palta-landing
    ├── app/
    │   ├── root.tsx
    │   ├── routes/home.tsx
    │   ├── components/ (header, hero, features, code-preview, countries, install, api-table, stats-bar, footer)
    │   ├── i18n/ (config.ts, es.ts, pt.ts)
    │   ├── lib/utils.ts
    │   └── app.css
    ├── public/favicon.svg
    ├── react-router.config.ts
    ├── vite.config.ts
    ├── tsconfig.json
    └── package.json
```

---

## Resumo Rápido

| | Biblioteca (`palta`) | Landing (`palta-landing`) |
|---|---|---|
| Stack | TypeScript + tsup + Vitest | React Router v7 + Tailwind v4 + i18n |
| Output | Pacote npm (ESM + CJS) | App SSR (deploy Vercel/Railway) |
| Idioma docs | Português | Español (padrão) + Português |
| Tema | N/A | Dark-only |
| Deps | Zero | React, Tailwind, i18next, motion, lucide |
| Testes | Vitest 95% coverage | N/A (visual) |
| Autor | zeluizr | zeluizr |
| Licença | MIT | MIT |
| GitHub | `zeluizr/palta` | `zeluizr/palta-landing` |
| npm | `palta` | N/A |

---

## Ordem de Trabalho

1. **Criar os dois repos** no GitHub de zeluizr (`gh repo create`)
2. **Trabalhar em paralelo** — biblioteca e landing são independentes
3. **Biblioteca primeiro a ficar funcional** (a landing mostra exemplos da API dela)
4. **Testar tudo** antes de publicar (`vitest run` na lib, `npm run build` na landing)
5. **Publicar:** `npm publish` na biblioteca, deploy da landing

**Para cada projeto, siga as instruções detalhadas no respectivo arquivo `.md` (`PALTA-CLAUDE.md` e `PALTA-LANDING-CLAUDE.md`).**
