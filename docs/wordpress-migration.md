# Migração do Opinião Real para WordPress

## Objetivo

Este documento transforma a aplicação React/Vite atual em um mapa de migração para WordPress sem exigir uma reescrita do conteúdo ou da identidade visual. A recomendação é migrar **conteúdo e regras editoriais para WordPress** e reconstruir a apresentação como tema leve, mantendo URLs, SEO, rastreamento e transparência.

## 1. Arquitetura de destino

Use um tema próprio, preferencialmente um tema filho se houver um tema-base realmente necessário. Evite page builders para os componentes centrais de artigos, comparativos e páginas institucionais.

Estrutura sugerida:

```text
wp-content/themes/opiniao-real/
├── style.css
├── functions.php
├── theme.json
├── front-page.php
├── home.php
├── single.php
├── single-seo_article.php
├── archive.php
├── page.php
├── page-templates/
│   ├── page-institucional.php
│   ├── page-comparativo.php
│   └── page-guia-compra.php
├── template-parts/
│   ├── header/site-header.php
│   ├── footer/site-footer.php
│   ├── article/hero.php
│   ├── article/quick-summary.php
│   ├── article/criteria.php
│   ├── article/comparison.php
│   ├── article/product-card.php
│   ├── article/pros-cons.php
│   ├── article/faq.php
│   ├── article/sources.php
│   ├── article/affiliate-disclosure.php
│   ├── editorial/trust-block.php
│   └── media/image.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── inc/
    ├── post-types.php
    ├── taxonomies.php
    ├── seo.php
    ├── schema.php
    ├── analytics.php
    └── affiliate.php
```

A estrutura acima é um **mapa de implementação**, não um tema WordPress incompleto dentro deste repositório. O projeto atual continua funcionando como React/Vite até a migração efetiva.

## 2. Separação do projeto atual

### Componentes visuais

A referência visual existente está principalmente em `src/main.jsx` e nos CSS de interface. Os componentes que devem virar `template-parts` incluem:

- cabeçalho e navegação;
- marca/logo;
- hero;
- cards de categoria;
- cards de artigos;
- bloco “Como analisamos”;
- escolha rápida;
- ranking/produto;
- tabela comparativa;
- análise individual;
- pontos positivos e negativos;
- guia de compra;
- FAQ expansível;
- bloco de confiança/transparência;
- CTA afiliado;
- rodapé.

O comportamento de interação deve ser reproduzido com JavaScript pequeno e progressivo, sem transformar cada bloco em um componente React dentro do WordPress.

### Páginas estáticas

Migrar como páginas WordPress (`page.php` ou templates específicos):

- `/sobre-nos`
- `/como-avaliamos`
- `/transparencia`
- `/afiliados`
- `/autor/equipe-opiniao-real`
- `/materiais-gratuitos`
- `/guias-de-compra`
- `/comparativos`
- `/videos` e hub de análises em vídeo
- áreas administrativas atuais (`/admin/*`) devem ser substituídas pelo próprio painel do WordPress, não publicadas como páginas normais.

### Templates

| Necessidade | WordPress |
|---|---|
| Página inicial | `front-page.php` |
| Blog/editorial | `home.php` |
| Artigo SEO | `single-seo_article.php` |
| Página comum | `page.php` |
| Categoria | `archive.php` ou arquivo de taxonomia |
| Comparativo | `page-comparativo.php` ou CPT `comparativo` |
| Guia | `page-guia-compra.php` ou CPT `seo_article` |
| Vídeo | CPT `video` ou post com metadados próprios |
| Produto citado | bloco/template-part, não necessariamente CPT público |

## 3. Modelo de conteúdo

### Post Type principal: `seo_article`

Campos recomendados:

- `title`
- `slug`
- `status`
- `content_markdown` apenas como formato de importação, não como campo público obrigatório;
- conteúdo final no editor WordPress;
- `meta_title`
- `meta_description`
- `canonical_url`
- `primary_keyword`
- `secondary_keywords`
- `image_id`
- `image_alt`
- `content_type`: `review`, `guide`, `comparison`
- `category`
- `published_at`
- `updated_at`
- `editorial_sources`
- `affiliate_disclosure`
- `faq`
- `related_articles`

O conteúdo deve ser armazenado de forma estruturada quando isso melhorar manutenção. O texto longo pode continuar no editor WordPress, enquanto produtos, FAQs e metadados podem usar campos estruturados.

### Taxonomias

`category`:

- Fitness em Casa
- Ferramentas
- Casa e Utilidades

`content_type`:

- Review
- Guia
- Comparativo

Opcionalmente, criar taxonomias de intenção (`informacional`, `comercial`, `comparativa`) e assunto (`bicicletas spinning`, `esteiras`, etc.).

## 4. Conteúdo dos 30 artigos SEO

Os artigos já organizados no projeto devem ser importados como conteúdo editorial. O arquivo `public/seo-articles-content.js` contém o catálogo atual de slugs, títulos, palavras-chave, tese, público, critérios, escolhas rápidas, produtos e fontes quando disponíveis.

A migração deve preservar os slugs atuais. Não alterar URLs sem necessidade.

Os artigos devem seguir o contrato editorial existente em `docs/seo-editorial-system.md` e o CMS descrito em `docs/seo-article-cms.md`.

## 5. Estilos

### Fonte de verdade visual

- `src/styles.css`: interface principal e tokens;
- `src/spinning.css`: apresentação específica de spinning;
- `public/seo-article.css`: artigos SEO;
- `public/authority.css`: autoridade e confiança;
- `public/audience.css`: captura de audiência;
- `public/brand.css`: identidade global;
- `public/portal.css`: arquitetura de categorias/portal;
- `public/videos/video.css`: vídeos.

Durante a migração, consolidar esses estilos em:

```text
assets/css/
├── tokens.css
├── base.css
├── layout.css
├── components.css
├── article.css
├── editorial.css
├── responsive.css
└── admin-independent.css
```

Não copiar CSS indiscriminadamente. Remover seletores dependentes de React e preservar apenas regras usadas pelo tema.

## 6. Imagens e mídia

A identidade visual exige imagens de produto reais, nítidas e compatíveis com o modelo citado. O WordPress deve usar a Biblioteca de Mídia como fonte única para imagens públicas.

Mapeamento:

- `public/brand/opiniao-real-mark.svg` → logo/favicons do tema;
- thumbnails SVG em `public/videos/` → imagens de apoio dos conteúdos de vídeo;
- imagens futuras de produtos → Biblioteca de Mídia, com ALT editorial específico;
- placeholders de produto atuais → não migrar como fotografia real de produto.

Regras:

1. não apresentar imagem genérica como se fosse o modelo analisado;
2. registrar ALT descritivo;
3. usar WebP/AVIF quando compatível com o fluxo de mídia;
4. manter dimensões adequadas e `srcset` do WordPress;
5. não inserir texto promocional sobre imagens editoriais sem função clara.

## 7. Afiliados e rastreamento

Os links comerciais atuais usam atributos como `data-affiliate`, produto e posição do CTA. No WordPress, centralizar isso em um helper/bloco de afiliado para evitar links inconsistentes.

Requisitos:

- `rel="sponsored noopener noreferrer"` em links afiliados;
- identificador de produto;
- posição do CTA;
- preservação de UTM/click IDs quando aplicável;
- evento `affiliate_click` no analytics atual ou equivalente;
- nenhum preço, estoque, avaliação ou comissão inventado.

Não colocar chaves privadas de APIs de afiliados no JavaScript público.

## 8. SEO técnico

Preservar:

- URLs amigáveis;
- canonical por página;
- title e meta description;
- sitemap XML;
- robots.txt;
- BreadcrumbList;
- Article schema;
- FAQ schema somente quando o FAQ estiver visível na página;
- links internos entre conteúdo educacional, comparativos e páginas comerciais;
- atualização editorial real.

Antes de trocar DNS, fazer um inventário de todas as URLs indexáveis e preparar redirecionamentos 301 para qualquer slug alterado.

## 9. Analytics

A camada existente está em `public/analytics.js` e usa `window.opiniaoRealTrack`. No WordPress, a recomendação é manter uma camada de eventos equivalente, carregada pelo tema, sem duplicar pageviews.

Eventos relevantes:

- `page_view`
- `affiliate_click`
- `product_view`
- `comparison_view`
- `faq_interaction`
- eventos de remarketing já definidos na camada atual.

IDs de GA4, Google Ads e Meta devem ficar em configuração segura do ambiente/tema, nunca em código que exponha segredo.

## 10. Captura de audiência

A camada atual em `public/audience.js` deve ser convertida em bloco/template-part de newsletter e popup, mas o armazenamento definitivo precisa sair do `localStorage` e ir para um serviço/backend autorizado.

No WordPress:

- formulário acessível;
- consentimento adequado;
- validação server-side;
- proteção anti-spam;
- integração com provedor de e-mail quando definida;
- não armazenar dados pessoais desnecessários.

## 11. Redirecionamento e preservação de URLs

Antes do corte:

1. exportar sitemap atual;
2. gerar tabela URL antiga → URL WordPress;
3. manter slugs sempre que possível;
4. configurar 301 para mudanças inevitáveis;
5. validar canonical;
6. testar 404 e páginas órfãs;
7. enviar novo sitemap ao Search Console.

## 12. Ordem recomendada de migração

1. Tema e tokens visuais.
2. Cabeçalho/rodapé e páginas institucionais.
3. Taxonomias e post type `seo_article`.
4. Importação dos 30 artigos.
5. Componentes de artigo: resumo, critérios, comparação, produto, FAQ e transparência.
6. Imagens e ALT.
7. Links afiliados e analytics.
8. Sitemap, schema e redirects.
9. Teste mobile, acessibilidade e performance.
10. Migração de DNS/publicação.
11. Monitoramento pós-lançamento.

## 13. Critério de aceite

A migração estará pronta quando:

- nenhuma URL estratégica perder conteúdo;
- os 30 artigos estiverem editáveis pelo WordPress;
- os metadados SEO forem editáveis;
- componentes comerciais forem reutilizáveis;
- imagens forem gerenciadas pela Biblioteca de Mídia;
- links afiliados forem rastreáveis;
- schema e canonical forem válidos;
- páginas mobile não quebrarem tabelas/cards;
- redirects forem testados;
- não houver preços, reviews, testes ou especificações inventados;
- o site não depender de React/Vite para renderizar conteúdo público.

## Limite desta etapa

Esta etapa prepara o **mapa de migração e a separação conceitual**. Ela não substitui a instalação/configuração de um WordPress nem cria um tema parcial que poderia deixar o projeto atual em estado inconsistente. A implementação do tema deve ser uma etapa própria, depois do inventário de URLs e da definição do ambiente WordPress.