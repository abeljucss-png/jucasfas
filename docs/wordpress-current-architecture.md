# Opinião Real — Arquitetura atual e preparação para WordPress

## 1. Visão geral

O projeto atual é uma aplicação **React + Vite**. O `package.json` mantém uma superfície pequena: React, React DOM, Vite, plugin React e `lucide-react`, com `vite build` como build de produção.

A interface principal está concentrada em `src/main.jsx`, enquanto os estilos são distribuídos entre CSS global e módulos/arquivos públicos especializados. Há também uma camada editorial SEO, analytics, autoridade, audiência e vídeos em `public/`.

A migração recomendada é separar definitivamente **tema/apresentação** de **conteúdo/editorial**. O WordPress deve assumir artigos, categorias, produtos citados, comparativos, FAQs e metadados SEO. O tema deve reproduzir a identidade visual e os componentes sem carregar o conteúdo em JavaScript.

## 2. Páginas e rotas

### Núcleo editorial/comercial

- `/` — Home / portal editorial.
- `/fitness` — categoria Fitness em Casa.
- `/fitness/bicicletas-spinning` — subcategoria de bicicletas spinning.
- `/fitness/esteiras` — subcategoria de esteiras.
- `/fitness/equipamentos` — equipamentos de treino.
- `/ferramentas` — categoria Ferramentas.
- `/ferramentas/parafusadeiras` — subcategoria.
- `/ferramentas/kits-de-ferramentas` — subcategoria.
- `/ferramentas/ferramentas-sem-fio` — subcategoria.
- `/casa` — categoria Casa e Utilidades.
- `/casa/cozinha`, `/casa/organizacao`, `/casa/eletroportateis` — subcategorias.
- `/comparativos` — hub de comparativos.
- `/guias-de-compra` — hub de guias.
- `/videos` e `/analise-video` — conteúdo em vídeo.
- artigos SEO individuais — páginas editoriais indexáveis com slug próprio.

### Institucionais

- `/sobre-nos`
- `/como-avaliamos`
- `/transparencia`
- `/afiliados`
- `/autor/equipe-opiniao-real`
- `/materiais-gratuitos`

### Operação

- `/admin/artigos/` — CMS editorial local atual.
- `/admin/seo/` — dashboard SEO local.
- `/gestao-afiliados/` — dashboard operacional de afiliados.
- `/analytics/` — diagnóstico local de analytics.

Essas áreas operacionais não devem virar conteúdo público do WordPress. O painel nativo do WordPress e plugins/integrações apropriados devem assumir suas funções.

## 3. Componentes visuais atuais

A maior parte da composição visual está em `src/main.jsx`. Entre os blocos identificados estão:

| Componente/bloco | Papel atual | Destino WordPress |
|---|---|---|
| Header/navegação | identidade e navegação | `template-parts/header/` |
| Marca | logo e nome | `template-parts/brand/` ou header |
| Hero | abertura editorial/comercial | `template-parts/article/hero.php` |
| Category cards | descoberta de categorias | bloco/template-part |
| Article cards | listagem editorial | `template-parts/article-card.php` |
| Product card | recomendação comercial | `template-parts/product-card.php` / bloco |
| Quick Choice | decisão rápida | bloco `or/quick-summary` |
| Trust / Como analisamos | confiança editorial | `template-parts/editorial/trust-block.php` |
| Comparison table | comparação lado a lado | bloco `or/comparison-table` |
| Pros/cons | síntese da análise | bloco `or/pros-cons` |
| Buying guide | critérios de compra | bloco `or/buying-guide` |
| FAQ | perguntas visíveis | bloco `or/faq` |
| Affiliate CTA | clique comercial rastreável | bloco `or/affiliate-cta` |
| Related content | cluster interno | `template-parts/related-content.php` |
| Footer | institucional/navegação | `template-parts/footer/` |

A regra de migração é reutilizar a **linguagem visual**, não copiar a arquitetura React literalmente.

## 4. Conteúdo fixo x conteúdo dinâmico

### Fixo, pertencente ao tema

- paleta;
- tipografia;
- espaçamentos;
- grid e breakpoints;
- cabeçalho e rodapé;
- estados de foco/hover;
- componentes visuais;
- ícones de interface;
- comportamento de navegação;
- acessibilidade e HTML semântico.

### Dinâmico, pertencente ao WordPress

- artigos;
- títulos e slugs;
- categorias e tópicos;
- produtos citados;
- comparativos;
- FAQs;
- fontes;
- imagens destacadas;
- ALT editorial;
- meta title/description;
- canonical;
- relações entre artigos;
- datas de revisão/publicação;
- links afiliados e identificadores comerciais.

## 5. Estilos, fontes e identidade

A identidade oficial está documentada em `docs/brand-guidelines.md`.

### Tokens principais

- Navy: `#0B1F3A`
- Azul editorial: `#294D75`
- Branco: `#FFFFFF`
- Fundo suave: `#F6F8FB`
- Texto: `#172033`
- Dourado discreto: `#C98B3C`

### Tipografia

- títulos: Playfair Display / Georgia;
- interface e corpo: DM Sans / system-ui.

### Arquivos CSS de referência

- `src/styles.css` — interface principal;
- `src/spinning.css` — spinning;
- `public/portal.css` — portal/categorias;
- `public/seo-article.css` — artigos SEO;
- `public/authority.css` — autoridade;
- `public/audience.css` — captura de audiência;
- `public/brand.css` — identidade global;
- `public/videos/video.css` — vídeos.

No WordPress, consolidar apenas os seletores usados em `assets/css/`, preservando tokens e responsividade e eliminando dependências de markup React que não tenham equivalente.

## 6. Imagens e ícones

### Logo

`public/brand/opiniao-real-mark.svg` é a referência oficial de marca.

### Thumbnails

Os SVGs `public/videos/thumb-*.svg` podem ser levados para a Biblioteca de Mídia ou recriados como assets do tema, conforme a necessidade.

### Produtos

Não migrar placeholders como fotografia real. O WordPress deve receber imagens reais e verificadas na Biblioteca de Mídia, com ALT específico.

### Ícones

A interface atual usa `lucide-react`. Na migração, os ícones recorrentes devem ser convertidos para SVGs inline, sprite ou assets leves do tema, conforme o componente. Evitar depender de React apenas para ícones.

## 7. Templates WordPress

| Template | Responsabilidade |
|---|---|
| `front-page.php` | Home editorial |
| `home.php` | índice de artigos |
| `archive.php` | categorias/arquivos |
| `single-seo_article.php` | artigo SEO |
| `single.php` | conteúdo comum |
| `page.php` | páginas institucionais |
| `page-templates/page-comparativo.php` | comparativos |
| `page-templates/page-guia-compra.php` | guias |
| `page-templates/page-landing.php` | landing pages |
| `single-video.php` | análise em vídeo |

O tipo de conteúdo `seo_article` deve distinguir `review`, `guide` e `comparison` por campo estruturado/taxonomia, evitando criar dezenas de templates quase iguais.

## 8. Modelo de conteúdo

Post type recomendado: `seo_article`.

Campos essenciais:

- título;
- slug;
- conteúdo;
- tipo editorial;
- categoria;
- tópico;
- meta title;
- meta description;
- palavra-chave principal;
- palavras-chave secundárias;
- canonical;
- imagem destacada;
- ALT;
- data de revisão;
- fontes;
- FAQ;
- artigos relacionados;
- aviso de afiliado.

Produtos podem começar como blocos estruturados dentro do artigo. Um CPT `product` só deve ser criado quando a reutilização e manutenção do catálogo justificarem a complexidade adicional.

## 9. SEO e dados estruturados

O WordPress deve reproduzir as garantias já presentes no projeto:

- URLs legíveis e estáveis;
- um H1 principal por página;
- hierarquia H2/H3 coerente;
- canonical;
- BreadcrumbList;
- Article schema para artigos;
- FAQPage somente quando FAQ estiver visível;
- sitemap XML;
- robots.txt;
- links internos por cluster;
- atualização editorial real.

A mudança de plataforma exige um inventário final de URLs indexáveis e um mapa 301 antes da troca de domínio/DNS.

## 10. Integrações futuras

### WordPress REST API

O tema e eventuais frontends externos devem consumir a API oficial usando endpoints públicos para conteúdo publicado. Operações administrativas devem exigir autenticação e permissões do WordPress.

### Banco de produtos

Começar com entidades estruturadas no conteúdo. Evoluir para CPT/REST próprio quando o catálogo tiver escala suficiente para justificar isso.

### Afiliados

Centralizar links comerciais em um helper/bloco que acrescente identificador de produto, posição e `rel="sponsored noopener noreferrer"`, além do evento `affiliate_click`.

### Analytics

Manter uma camada equivalente a `window.opiniaoRealTrack`, adaptada ao tema WordPress, evitando pageviews duplicados em navegação e carregamentos.

### Google Search Console

Sitemap, canonical, redirects e URLs finais devem ser validados antes e depois da migração. O Search Console deve acompanhar cobertura, indexação e consultas após a troca.

## 11. Mapa de migração

```text
React/Vite
│
├── Home / portal ───────────────→ front-page.php
├── Categoria ──────────────────→ archive.php / taxonomy templates
├── Artigo SEO ─────────────────→ single-seo_article.php
├── Review ─────────────────────→ single-seo_article.php + content_type=review
├── Comparativo ────────────────→ page-comparativo.php / content_type=comparison
├── Guia ───────────────────────→ page-guia-compra.php / content_type=guide
├── Landing ────────────────────→ page-landing.php
├── Institucionais ─────────────→ page.php / templates de página
├── Vídeo ──────────────────────→ single-video.php
├── Header/Menu ────────────────→ header.php + template-parts/header
├── Cards ──────────────────────→ template-parts + blocos Gutenberg
├── FAQ ────────────────────────→ bloco or/faq
├── Tabela ─────────────────────→ bloco or/comparison-table
├── Produto ────────────────────→ bloco or/product-card
├── CTA afiliado ───────────────→ bloco/helper de afiliado
├── CSS ────────────────────────→ assets/css/
├── Logo ───────────────────────→ assets/images/ ou branding do tema
├── Conteúdo ───────────────────→ WordPress database
└── Admin local ────────────────→ WordPress Admin
```

## 12. Critérios de aceite da futura migração

Antes de desligar o React/Vite:

1. Todas as URLs indexáveis foram inventariadas.
2. Slugs foram preservados ou receberam 301.
3. Conteúdo publicado está no WordPress.
4. Imagens possuem mídia e ALT corretos.
5. Templates reproduzem o layout desktop e mobile.
6. Header, footer, cards, FAQ, tabela e CTAs estão reutilizáveis.
7. Schema corresponde ao conteúdo realmente visível.
8. Links afiliados estão rastreáveis e marcados como patrocinados.
9. Analytics não duplica eventos.
10. Sitemap, robots, canonical e Search Console foram conferidos.
11. Não existem placeholders publicados como dados reais.
12. O projeto antigo permanece disponível até a validação pós-migração.
