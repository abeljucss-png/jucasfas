# Mapa de páginas e layouts

## Home `/`

1. Header + navegação
2. Hero editorial
3. Categorias principais
4. Artigos/guias em destaque
5. Bloco de método/como analisamos
6. Benefícios/confiança
7. Conteúdo relacionado
8. CTA editorial/comercial quando aplicável
9. Footer

## Categoria

Rotas principais: `/fitness`, `/ferramentas`, `/casa`.

Estrutura: Breadcrumb → título/intro → subcategorias → artigos em grid → guias/comparativos relacionados → CTA/descoberta → Footer.

Subcategorias preservam hierarquia, por exemplo `/fitness/bicicletas-spinning`, `/ferramentas/parafusadeiras`, `/casa/organizacao`.

## Artigo SEO

1. Breadcrumb
2. Categoria/tipo
3. H1
4. Data de publicação e atualização + autoria
5. Imagem destacada
6. Introdução
7. Resumo rápido
8. Critérios de escolha
9. Conteúdo aprofundado
10. Comparação/tabela
11. Análises de produtos quando houver dados verificados
12. Uso diário/para quem é
13. FAQ
14. Conclusão
15. CTA
16. Relacionados/transparência

## Comparativo

1. Breadcrumb
2. H1 e contexto
3. Escolha rápida
4. Tabela lado a lado
5. Destaques por perfil
6. Análises individuais
7. Pontos fortes e atenção
8. Guia de decisão
9. FAQ
10. CTA

## Guias de compra

Página hub `/guias-de-compra` e páginas específicas. Estrutura orientada a intenção: problema → critérios → opções → comparação → decisão → conteúdo relacionado.

## Institucionais

`/sobre-nos`, `/como-avaliamos`, `/transparencia`, `/afiliados`, `/autor/equipe-opiniao-real`, `/materiais-gratuitos` usam layout simples/editorial, com breadcrumb, H1, conteúdo e links institucionais.

## Vídeos

`/videos` e `/analise-video` usam hub + páginas individuais com thumbnail, contexto, resumo, link para artigo e transparência.

## Operação

`/admin/artigos/`, `/admin/seo/`, `/gestao-afiliados/`, `/analytics/` são ferramentas internas. No WordPress, suas funções devem ser absorvidas pelo WP Admin e integrações, sem aparecerem na navegação pública.

## Mapa React → WordPress

| Atual | WordPress |
|---|---|
| SPA `/` | `front-page.php` |
| Categoria | `archive.php` / templates de arquivo |
| Artigo SEO | `single-seo_article.php` |
| Review | `single-seo_article.php` + tipo `review` |
| Comparativo | `single-comparison.php` / template específico |
| Guia | `page-guia-compra.php` |
| Landing | `page-landing.php` |
| Institucional | `page.php` |
| Vídeo | `single-video.php` |
| 404 | `404.php` |

A arquitetura já preparada no repositório recomenda separar tema/apresentação do conteúdo editorial. fileciteturn641file0L2-L2