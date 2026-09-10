# Inventário completo do projeto Opinião Real

## 1. Stack e dependências

| Item | Atual | Migração |
|---|---|---|
| Framework | React + Vite | WordPress + tema |
| UI | JSX + CSS | PHP templates + CSS + Elementor opcional |
| Ícones | `lucide-react` | SVG inline/sprite/assets |
| Fontes | Google Fonts | Google Fonts ou carregamento local conforme política de performance |
| Build | Vite | WordPress não depende do Vite em runtime |
| Conteúdo | React/runtime + camadas editoriais | WordPress CMS |
| Analytics | `analytics.js` + camada `opiniaoRealTrack` | camada equivalente no tema |

O manifesto atual confirma React, React DOM, Vite, plugin React e `lucide-react` como dependências principais. fileciteturn636file0L2-L2

## 2. Arquivos por área

### `/src`

- `main.jsx`: composição da aplicação, rotas SPA, Header, navegação, hero, cards, comparativos, FAQ, CTAs e páginas.
- `styles.css`: tokens e interface global, layout, tipografia, cards, tabelas, páginas e breakpoints.
- `spinning.css`: estilos específicos do cluster de bicicletas spinning.
- `optimization.css`: otimizações/camadas de apresentação existentes.
- `content/`: contratos, templates e estrutura editorial.
- `components/`: componentes React existentes, incluindo o helper de CTA afiliado quando aplicável.

### `/public`

- `brand/`: identidade e marca.
- `portal.css`, `portal-nav.js`, `seo-links.js`: portal, navegação e linking editorial.
- `seo-article.css`, runtimes/conteúdo SEO: apresentação e renderização editorial.
- `authority.css/js`: confiança, autoridade e schema complementar.
- `audience.css/js/config`: captura de audiência.
- `analytics.css/js/config`: eventos e diagnóstico.
- `videos/`: hub, páginas e thumbnails de vídeo.
- `admin/`: ferramentas operacionais locais, que não devem ser tratadas como conteúdo público no WordPress.
- `*.xml`, `robots.txt`: sitemap/controle de rastreamento.

### `/wordpress-theme/opiniao-real`

É o scaffold de tema WordPress já preparado no repositório. Ele serve como referência de templates e integração e deve ser usado para reconstrução, sem substituir o inventário visual.

Arquivos-chave: `style.css`, `functions.php`, `header.php`, `footer.php`, `front-page.php`, `archive.php`, `archive-seo_article.php`, `single.php`, `single-seo_article.php`, `single-product.php`, `single-comparison.php`, `page.php`, `404.php`, `theme.json`, `assets/js/theme.js` e templates em `page-templates/`.

## 3. Rotas públicas

### Home e categorias

`/`, `/fitness`, `/fitness/bicicletas-spinning`, `/fitness/esteiras`, `/fitness/equipamentos`, `/ferramentas`, `/ferramentas/parafusadeiras`, `/ferramentas/kits-de-ferramentas`, `/ferramentas/ferramentas-sem-fio`, `/casa`, `/casa/cozinha`, `/casa/organizacao`, `/casa/eletroportateis`.

### Editorial

`/comparativos`, `/guias-de-compra`, artigos SEO individuais, `/videos`, `/analise-video`.

### Institucional

`/sobre-nos`, `/como-avaliamos`, `/transparencia`, `/afiliados`, `/autor/equipe-opiniao-real`, `/materiais-gratuitos`.

### Operação

`/admin/artigos/`, `/admin/seo/`, `/gestao-afiliados/`, `/analytics/`. Migrar a função para WordPress Admin/plugins, não indexar como conteúdo editorial.

## 4. Seções recorrentes

Header → Hero/abertura → descoberta de categorias → artigos/recomendações → bloco de critérios/confiança → comparação → guia de compra → objeções/FAQ → CTA → Footer.

A ordem exata varia por tipo de página; os templates devem preservar a composição atual em vez de criar um layout genérico.

## 5. Dados fixos x dinâmicos

**Fixos do tema:** cores, tipografia, grid, espaçamentos, raio, sombras, breakpoints, navegação, componentes e estados.

**Dinâmicos do CMS:** títulos, slugs, artigos, categorias, produtos, comparativos, FAQs, imagens, ALT, fontes, datas, SEO metadata, relações e URLs afiliadas.

## 6. Fonte visual

A identidade documentada usa Navy `#0B1F3A`, azul editorial `#294D75`, branco `#FFFFFF`, fundo suave `#F6F8FB`, texto `#172033` e dourado discreto `#C98B3C`; títulos usam Playfair Display/Georgia e interface/corpo DM Sans/system-ui. fileciteturn644file0L2-L2