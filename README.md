# Hortsoy

Portal institucional e de conteúdo do grupo Hortsoy, construído com Next.js, TypeScript e App Router.

## Visão geral

Este projeto foi estruturado para entregar:

- alto desempenho e SEO em páginas estáticas e dinâmicas
- arquitetura moderna em App Router do Next.js
- componente de scroll suave com Lenis
- layout institucional com foco em preservação visual
- API nativa de contato em Route Handlers
- suporte para conteúdo de blog e páginas institucionais

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Leaflet + react-leaflet
- Lenis
- lucide-react

## Estrutura principal

- app/ — rotas, layouts e páginas do App Router
- src/components/ — componentes reutilizáveis do front-end
- src/config/ — configuração central do projeto
- src/data/ — dados estruturados como filiais e conteúdos
- public/assets/ — arquivos estáticos e imagens

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
npm run validate:types
npm run validate:lint
```

## Convenções adotadas

- App Router como padrão de routing
- TypeScript com tipagem forte para componentes e dados
- CSS global centralizado em app/globals.css
- configuração de site centralizada em src/config/site.ts
- metadata e SEO definidos nas páginas e layout raiz
- padrões de acessibilidade e estrutura reutilizável por componente

## Ambiente

Copie o arquivo .env.example para .env.local e ajuste os valores conforme necessário.
