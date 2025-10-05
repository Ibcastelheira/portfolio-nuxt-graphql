# Portfolio Nuxt GraphQL [EM CONSTRUÇÃO]

Portfólio simples construído com Nuxt 3, Tailwind CSS e Apollo Client para demonstrar habilidades de frontend, design de interface e consumo de APIs GraphQL.

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

## 🌐 Configuração do endpoint GraphQL
Crie um arquivo `.env` na raiz (ou utilize suas variáveis de ambiente) e defina a URL do seu endpoint GraphQL:
```bash
NUXT_PUBLIC_GRAPHQL_ENDPOINT=https://sua-api.com/graphql
```
Sem essa variável, o projeto usa `https://example.com/graphql` como fallback.

A query de exemplo está em [`graphql/queries/getProjects.gql`](graphql/queries/getProjects.gql) e espera que a API retorne:
```graphql
{
  projects {
    id
    title
    description
    techs
    repoUrl
    previewUrl
  }
}
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

## ✨ Customização
- Ajuste textos, links e ícones em `utils/socialLinks.ts` e nos componentes.
- Substitua os dados fictícios em `pages/projects.vue` conforme sua API retornar resultados.
- Edite o tema e tokens de design em [`tailwind.config.ts`](tailwind.config.ts).

## 📝 Licença
Projeto open source
# portfolio-nuxt-graphql
