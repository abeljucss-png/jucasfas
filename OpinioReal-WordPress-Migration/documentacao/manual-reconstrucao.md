# Manual de Migração Opinião Real — Lovable para WordPress

## 1. Estrutura visual

A referência visual é editorial, moderna, minimalista e profissional. O site deve parecer uma revista digital de consumo, não um marketplace. Manter espaços em branco, tipografia serifada nos títulos, corpo sans-serif, Navy como estrutura e dourado apenas como detalhe.

## 2. Arquivos necessários

### Aplicação atual

- `src/main.jsx`
- `src/styles.css`
- `src/spinning.css`
- `src/content/`
- `src/components/`

### Público/assets

- `public/brand/`
- `public/portal.css`
- `public/seo-article.css`
- `public/authority.css`
- `public/audience.css`
- `public/videos/`
- `public/analytics*`
- sitemaps e `robots.txt`

### WordPress já preparado

- `wordpress-theme/opiniao-real/`
- documentação existente em `docs/wordpress-*.md`

## 3. Componentes

Reconstruir primeiro Header, Navigation, Footer, Breadcrumb, Hero, Article Card, Category Card, Product Card, Quick Choice, Trust, Comparison Table, Pros/Cons, Buying Guide, FAQ, Related Content e Affiliate CTA.

## 4. Cores e fontes

Navy `#0B1F3A`; azul editorial `#294D75`; branco `#FFFFFF`; fundo `#F6F8FB`; texto `#172033`; dourado `#C98B3C`; muted `#667085`; linha `#E5E9EF`.

Títulos: Playfair Display/Georgia. Corpo/interface: DM Sans/system-ui.

## 5. Layouts

Desktop usa container ~1160px, header 76px, grids de até 3 colunas e hero dividido. Em até 850px o menu e grids colapsam; em até 480px a tipografia e espaçamento reduzem. Tabelas continuam com rolagem horizontal.

## 6. Ordem de reconstrução

1. Instalar WordPress e tema base/child theme.
2. Configurar identidade e fontes.
3. Recriar Header/Footer e navegação.
4. Recriar componentes reutilizáveis.
5. Criar CPT `seo_article` e taxonomias.
6. Configurar Home e arquivos de categorias.
7. Criar template de artigo.
8. Criar template de review/comparação/guia/landing.
9. Migrar conteúdo e imagens reais.
10. Configurar Rank Math.
11. Configurar afiliados/Pretty Links quando disponível.
12. Integrar analytics sem duplicação.
13. Validar SEO e URLs.
14. Validar desktop/tablet/mobile.
15. Rodar checklist final antes de DNS/corte.

## 7. Critério de fidelidade

Não trocar Playfair por uma fonte sans, não aumentar sombras, não introduzir gradientes promocionais, não transformar cards editoriais em cards de loja e não adicionar elementos que não existam na referência. A migração é de plataforma, não de identidade.

## 8. Critério de conteúdo

O CMS deve permitir editar sem código: título, slug, corpo, resumo, critérios, tabela, produtos, prós/contras, FAQ, fontes, imagem/ALT, SEO metadata, datas, relacionados e CTA afiliado.

## 9. Checklist de aceite

- [ ] Todas as URLs públicas inventariadas.
- [ ] Nenhum conteúdo público depende de JavaScript para existir.
- [ ] Logo e fontes corretos.
- [ ] Header/Footer fiéis.
- [ ] Templates responsivos.
- [ ] Imagens reais e ALT.
- [ ] H1/H2/H3 corretos.
- [ ] Breadcrumbs.
- [ ] Article/FAQ schema coerentes com conteúdo visível.
- [ ] Canonicals corretos.
- [ ] Sitemap/robots.
- [ ] 301s quando necessário.
- [ ] CTAs afiliados rastreáveis.
- [ ] Analytics sem pageview/evento duplicado.
- [ ] Core Web Vitals verificados em produção.
- [ ] Search Console validado após o corte.