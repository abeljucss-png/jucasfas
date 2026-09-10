# Sistema editorial SEO — Opinião Real

## Objetivo

O sistema organiza a biblioteca inicial em três clusters: Fitness em Casa, Ferramentas e Casa e Utilidades. Cada URL recebe título, descrição, palavra-chave principal, categoria, canonical, breadcrumbs, Article Schema e FAQ Schema.

## Biblioteca inicial

São 30 pautas, dez por categoria. O catálogo está centralizado em `public/seo-articles-runtime.js` para publicação das rotas existentes no SPA e em `src/content/seoLibrary.js` como contrato editorial reutilizável.

## Estrutura editorial

Cada artigo publicado pelo sistema contém:

1. H1 orientado à intenção de busca.
2. Introdução contextualizada ao problema do leitor.
3. Resumo da análise com quatro perfis de decisão.
4. Explicação do produto ou categoria.
5. Critérios de compra em H2/H3.
6. Vantagens e limitações.
7. Comparação por perfil de uso.
8. Seção sobre uso cotidiano sem alegar testes inexistentes.
9. Indicação e contraindicação por perfil.
10. FAQ com seis perguntas e FAQPage Schema.
11. Conclusão orientada à decisão.
12. Veja também com links do mesmo cluster.
13. Aviso de transparência comercial.

## Regra para dados comerciais

A estrutura não inventa produto, preço, nota, avaliação, disponibilidade, estatística ou experiência de uso. Quando modelos reais forem incluídos, a equipe editorial deve validar a fonte antes de preencher a ficha comercial.

## Linkagem

A lógica segue cluster -> conteúdo de apoio -> categoria/página comercial -> oferta. O catálogo de artigos relacionados usa a mesma categoria para evitar links aleatórios.

## SEO técnico

O runtime atualiza `title`, `meta description` e canonical. O JSON-LD inclui `Article`, `BreadcrumbList` e `FAQPage`. O sitemap contém as 30 novas URLs e preserva as rotas editoriais já existentes.

## Afiliados

CTAs comerciais devem usar o contrato de atributos existente em `src/content/contentTemplates.js` e passar pelo rastreamento de `affiliate_click`. Nenhuma URL comercial nova deve ser inventada para preencher uma ficha.

## Próxima etapa editorial

Antes de usar os artigos como páginas comerciais fortes, substituir as comparações genéricas por produtos reais validados, imagens reais com ALT descritivo, especificações conferidas, fontes editoriais e URLs de afiliado rastreadas. A arquitetura foi preparada para essa evolução sem alterar a estrutura SEO.
