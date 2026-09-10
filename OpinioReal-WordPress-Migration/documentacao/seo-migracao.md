# SEO e preservação de URLs

## URL

Preservar as URLs públicas atuais sempre que possível. Para qualquer mudança inevitável, criar redirect 301 individual e validar destino, canonical e sitemap.

Principais clusters: `/fitness/`, `/ferramentas/`, `/casa/`, `/comparativos/`, `/guias-de-compra/` e artigos SEO com slug próprio.

## Hierarquia

- Um H1 principal.
- H2 para seções principais.
- H3 para subtemas.
- Não usar headings apenas para aparência.

## Metadados

Cada página deve ter:

| Campo | Origem WordPress |
|---|---|
| SEO Title | Rank Math / campo SEO |
| Meta Description | Rank Math / campo SEO |
| Canonical | Rank Math ou canonical do tema |
| URL | permalink WordPress |
| Image ALT | Media Library |

## Schema

- WebSite/Organization no nível global quando aplicável.
- BreadcrumbList para navegação.
- Article para artigos editoriais.
- FAQPage somente quando as perguntas/respostas estiverem visíveis na página.
- Product schema somente se houver dados de produto reais e elegíveis.

Não duplicar schema do tema e Rank Math de forma conflitante. Definir uma fonte principal e validar o HTML final.

## Links internos

Cada artigo deve apontar para seu pilar/categoria e para conteúdos relacionados. O fluxo recomendado é educacional → comparação → comercial, sem forçar links irrelevantes.

## Imagens

Migrar somente imagens reais e verificadas. O logo oficial é `public/brand/opiniao-real-mark.svg`; thumbnails editoriais de vídeo estão em `public/videos/`. Placeholders de produto não devem ser apresentados como fotografia real.

## Afiliados

Links comerciais devem usar identificadores de produto/posição quando aplicável e `rel="sponsored noopener noreferrer"`. Pretty Links é opcional; não deve substituir a URL real sem configuração.

## Indexação

Antes do corte: testar robots, sitemap, canonical, status 200 das URLs finais, 301 das antigas, breadcrumbs, schema e links internos. Depois do corte: monitorar cobertura, indexação, impressões, CTR e erros no Search Console.