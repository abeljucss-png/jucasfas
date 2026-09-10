# Integração do Opinião Real com WordPress

## Objetivo

O React/Vite permanece como camada visual durante a transição. O WordPress será a fonte de conteúdo publicada, consumida pelo front-end por WordPress REST API.

## Separação de responsabilidades

### Conteúdo dinâmico, no WordPress
- `seo_article`: artigos, guias, reviews e conteúdo editorial.
- Categorias/taxonomias: organização dos artigos.
- `product`: catálogo de produtos quando houver dados reais e escala suficiente.
- `comparison`: comparativos estruturados.
- Mídia: imagens na Media Library, com ALT editorial.

### Conteúdo visual, no projeto/tema futuro
- Header, navegação e Footer.
- Breadcrumbs.
- Cards de artigo/produto.
- Quick Summary, critérios, prós e contras.
- Tabelas comparativas.
- FAQ.
- Trust block, disclosure e CTA.
- Tipografia, tokens de cor, espaçamento, responsividade e acessibilidade.

## REST API

O cliente está em `public/wordpress-api.js` e é carregado por `index.html`. A configuração pública fica em `public/wordpress-config.js`.

Por padrão, `enabled` é `false`, portanto a aplicação atual não muda de comportamento até um WordPress ser configurado.

Para ativar em uma futura instalação, defina somente dados públicos:

```js
window.OPINIA_REAL_WORDPRESS = {
  enabled: true,
  baseUrl: 'https://SEU-WORDPRESS.EXEMPLO',
  apiNamespace: 'wp/v2',
  articlePostType: 'seo_article',
  categoryTaxonomy: 'category',
  productPostType: 'product',
  comparisonPostType: 'comparison'
};
```

Não colocar tokens, cookies administrativos, Application Passwords ou outras credenciais no navegador.

### Operações disponíveis

- `isEnabled()`
- `getConfig()`
- `listArticles(params)`
- `getArticle(slug)`
- `listCategories(params)`
- `listProducts(params)`
- `listComparisons(params)`

O cliente normaliza posts para um contrato visual simples e mantém `raw` para dados adicionais.

## Contrato recomendado no WordPress

### `seo_article`
Campos principais:
- título/slug/status
- conteúdo/excerpt
- `content_type`: `review`, `guide`, `comparison`
- categoria/tópico
- meta title/description
- canonical
- palavra-chave principal e secundárias
- imagem destacada/ALT
- data de revisão e atualização
- fontes editoriais
- FAQ
- artigos relacionados
- disclosure de afiliado

### `product`
Use apenas quando o produto tiver cadastro e dados verificáveis. Preço, especificações, disponibilidade e avaliações não devem ser inventados.

### `comparison`
Deve referenciar produtos reais e manter a mesma regra de verificação. A tabela exibida deve ser derivada do mesmo conjunto de dados usado para a estrutura editorial.

## Segurança e CORS

O consumo público de conteúdo pode usar endpoints `GET` da REST API. A configuração do WordPress deve permitir as origens necessárias quando o front-end e o CMS estiverem em domínios diferentes.

Escritas administrativas não devem sair do browser. Para importação, publicação, sincronização ou operações protegidas, usar WordPress Admin, servidor intermediário ou integração autenticada fora do cliente público.

## SEO

A migração deve preservar:
- slugs e URLs existentes sempre que possível;
- H1/H2/H3 e hierarquia semântica;
- canonical;
- breadcrumbs;
- Article schema para artigos;
- FAQ schema somente quando o FAQ estiver visível;
- sitemap e robots;
- links internos entre pilar, guias, comparativos e páginas comerciais;
- ALT das imagens;
- redirects 301 para URLs alteradas.

O conteúdo não deve depender exclusivamente de JavaScript para ser indexável na versão WordPress final. O tema WordPress deverá renderizar o conteúdo editorial no servidor.

## Fluxo de migração

`WordPress Admin → REST API / conteúdo publicado → templates visuais → componentes → analytics/afiliados`

O React atual pode funcionar como camada de transição. Na fase final, o tema WordPress deve assumir a renderização de artigos e páginas SEO.

## Validação antes de produção

1. Criar CPTs/taxonomias e campos no WordPress.
2. Publicar um artigo de teste com dados reais.
3. Conferir `GET /wp-json/wp/v2/seo_article`.
4. Conferir carregamento por slug.
5. Conferir categoria, produto e comparativo.
6. Validar HTML renderizado, schema, canonical e breadcrumbs.
7. Testar mobile, teclado, estados vazios e erro da API.
8. Comparar URLs antigas e novas e configurar 301 quando necessário.
9. Validar analytics e cliques de afiliado sem duplicação.
10. Só então migrar/publicar o restante do acervo.
