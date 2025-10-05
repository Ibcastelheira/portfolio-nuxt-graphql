# Portfolio Nuxt GraphQL [ EM CONSTRUÇÃO ]

Portfólio construído com Nuxt 3, Tailwind CSS, Apollo Client e consumo de APIs GraphQL.

## 🚀 Principais recursos

- **Nuxt 3 + Vue 3** com Composition API e Vite.
- **Tailwind CSS** para estilização responsiva com suporte a tema claro/escuro.
- **Apollo Client** configurado via plugin com query GraphQL de exemplo (`getProjects`).
- Estrutura limpa seguindo convenções Nuxt (`pages/`, `components/`, `composables/`, `graphql/`, `plugins/`, `utils/`).
- Componentes reutilizáveis escritos em **TypeScript** (`ProjectCard`, `Header`, `Footer`, `ButtonThemeToggle`).
- Padronização de código com **ESLint + Prettier** alinhada ao guideline do ecossistema Vue.

## 📁 Estrutura

```text
.
├── assets/css/tailwind.css
├── components/
│   ├── buttons/ButtonThemeToggle.vue
│   ├── Footer.vue
│   └── Header.vue
├── composables/useTheme.ts
├── graphql/queries/getProjects.gql
├── layouts/default.vue
├── pages/
├── plugins/apollo.client.ts
├── utils/
└── types/project.ts
```

## 🔧 Pré-requisitos

- Node.js 18.17 ou superior
- pnpm, npm ou yarn (exemplos abaixo utilizam `npm`)

## 📦 Instalação

```bash
npm install
```

## 🧪 Scripts disponíveis

- `npm run dev` – inicia o servidor de desenvolvimento.
- `npm run build` – gera a versão de produção.
- `npm run preview` – executa a build em modo pré-visualização.
- `npm run typecheck` – roda verificação de tipos com `nuxt typecheck`.
- `npm run lint` – analisa o projeto com ESLint.
- `npm run lint:fix` – aplica correções automáticas do ESLint.
- `npm run format` – verifica se o código está formatado com Prettier.
- `npm run format:fix` – formata o projeto completo com Prettier.

## 🧹 Qualidade do código

A base utiliza ESLint com `plugin:vue/vue3-recommended` e regras do TypeScript para garantir boas práticas do ecossistema Vue. O Prettier é responsável pela formatação (sem ponto e vírgula e com aspas simples). Arquivos gerados (`.nuxt/`, `dist/`) são ignorados pelos linters.

Execute `npm run lint` e `npm run format` antes de abrir um PR para assegurar consistência.

## 📝 Licença

Projeto open source

# portfolio-nuxt-graphql
