# Opinião Real — Pacote de Exportação para WordPress

Pacote documental para reconstruir o projeto atual no WordPress com máxima fidelidade visual e estrutural. **Não altera o design atual nem substitui a implementação React.**

## Estrutura

```text
OpinioReal-WordPress-Migration/
├── README.md
├── documentacao/
│   ├── inventario-completo.md
│   ├── design-tokens.md
│   ├── componentes-visuais.md
│   ├── mapa-de-paginas.md
│   ├── template-artigo.md
│   ├── template-comparacao.md
│   ├── responsividade.md
│   ├── elementor-wordpress.md
│   ├── seo-migracao.md
│   └── manual-reconstrucao.md
├── components/
│   └── README.md
├── css/
│   └── README.md
├── images/
│   └── README.md
├── assets/
│   └── README.md
└── screenshots/
    └── README.md
```

## Fonte da verdade

O projeto existente continua sendo a referência. Os documentos deste pacote apontam para os arquivos originais em `src/` e `public/`; não duplicam nem alteram os assets sem necessidade.

Referências principais: `src/main.jsx`, `src/styles.css`, `src/spinning.css`, `public/portal.css`, `public/seo-article.css`, `public/authority.css`, `public/audience.css`, `public/brand.css`, `public/videos/video.css` e `public/brand/opiniao-real-mark.svg`.

## Ordem recomendada

1. Preservar domínio, URLs e inventário de páginas.
2. Criar tema filho/tema customizado e tokens visuais.
3. Montar Header, Navigation e Footer.
4. Montar componentes editoriais reutilizáveis.
5. Montar Home, categorias e arquivos.
6. Montar artigo, review e comparação.
7. Migrar conteúdo e mídia real.
8. Configurar SEO/Rank Math e redirects.
9. Integrar afiliados/analytics.
10. Validar responsividade, schema, links, sitemap e Core Web Vitals antes do corte.

## Regra crítica

Não publicar placeholders como se fossem produtos reais. Preços, especificações, avaliações, disponibilidade, imagens e links afiliados precisam ser conferidos antes da publicação.