# Construção WordPress do Opinião Real

## Status

O repositório agora contém um tema WordPress customizado e leve em `wordpress-theme/opiniao-real/`, preparado para Elementor e para o CMS WordPress como fonte principal de conteúdo.

A instalação do WordPress, Elementor, Rank Math e Pretty Links no servidor não é executada pelo GitHub: são dependências da hospedagem e devem ser instaladas no painel WordPress.

## Tema

- Tema: **Opinião Real**
- Compatível com WordPress 6.4+ e PHP 7.4+.
- Compatível com Elementor.
- CPTs REST-ready: `seo_article`, `product`, `comparison`.
- Taxonomias: `topic` e `content_type`.
- Logo e favicon da identidade incluídos em `assets/images/`.
- Design tokens centralizados em `theme.json`.
- CSS responsivo com breakpoints de 850px e 480px.

## Estrutura visual

### Header
Logo + menu principal + CTA “Ver recomendações”. Em mobile, menu recolhível.

### Home
Hero → categorias → melhores escolhas → artigos recentes → como avaliamos → CTA final → footer.

### Artigo SEO
Breadcrumb → categoria/data → H1 → lead → imagem → resumo rápido → conteúdo → FAQ → conclusão → CTA afiliado.

### Review
Resumo → conteúdo → características → pontos positivos → pontos negativos → alternativas → público indicado → CTA.

### Comparativo
Breadcrumb → hero → ranking/conteúdo → produtos → tabela/destaques → CTA.

### Categorias
Banner/descrição SEO → grade de conteúdos → paginação.

## Elementor

Após instalar e ativar Elementor:

1. Configurar tipografia global com DM Sans e Playfair Display.
2. Configurar cores globais conforme `theme.json`.
3. Criar Header global e Footer global em **Theme Builder** se Elementor Pro estiver disponível.
4. Criar templates para arquivo, artigo, review, comparativo e landing page.
5. Reutilizar os blocos visuais do tema em vez de duplicar estilos.
6. Manter conteúdo editorial no WordPress, não em JavaScript do tema.

O tema também funciona sem Elementor, usando os templates PHP incluídos.

## Rank Math SEO

Instalar/ativar Rank Math e configurar:

- título padrão: `Opinião Real | Análises honestas para comprar melhor`;
- descrição padrão: `Comparativos e análises honestas para ajudar você a escolher melhor.`;
- sitemap XML;
- breadcrumbs;
- Article para artigos;
- Review/Product apenas quando o conteúdo e os dados realmente justificarem o schema;
- FAQ somente quando perguntas e respostas estiverem visíveis na página.

O tema detecta Rank Math para breadcrumbs e evita o schema Article fallback quando o Rank Math estiver ativo, reduzindo risco de duplicação.

## Afiliados / Pretty Links

Instalar Pretty Links e criar os links no padrão:

`/go/produto`

Exemplo conceitual: `/go/bicicleta-spinning`.

Requisitos:

- destino editável no WordPress;
- rastreamento de cliques;
- organização por produto/campanha;
- links comerciais com `rel="sponsored noopener noreferrer"`;
- não usar redirecionamentos artificiais para esconder informações importantes do usuário.

O tema não implementa um segundo sistema de redirecionamento para não competir com Pretty Links.

## Conteúdo e 30 artigos

A base anterior já possui o contrato de 30 artigos SEO e a migration Supabase para os 10 artigos iniciais de Fitness. Na migração para WordPress, o destino correto é o CPT `seo_article`.

Mapeamento principal:

- `title` → título do post
- `slug` → slug
- `content_markdown` → conteúdo Gutenberg/HTML
- `category` → taxonomia `topic`
- `content_type` → taxonomia `content_type`
- `meta_title` / `meta_description` → Rank Math
- `canonical_url` → canonical do Rank Math
- `image_alt` → texto alternativo da Media Library
- `faq` → bloco FAQ visível + schema compatível
- `affiliate_url` → Pretty Links / campo comercial

Importar primeiro como rascunho, revisar e somente então publicar.

## URLs

Prioridade: preservar URLs orgânicas existentes. Quando a estrutura mudar, criar redirecionamentos 301. Não publicar o novo site antes de conferir canonical, sitemap, robots, breadcrumbs, links internos e URLs comerciais.

## Performance

- usar WebP/AVIF quando compatível;
- definir dimensões de imagem;
- lazy-load para imagens fora do primeiro viewport;
- carregar imagens hero com prioridade adequada;
- evitar plugins redundantes;
- ativar cache de página no servidor/CDN;
- minificar CSS/JS somente depois de validar o site;
- revisar PageSpeed/Core Web Vitals após o conteúdo real entrar.

Não há promessa de pontuação específica antes de medir a instalação final.

## Segurança

Nunca colocar credenciais de WordPress, API, afiliados ou banco no JavaScript público. Escritas autenticadas na REST API devem ocorrer com autenticação adequada e, quando possível, no servidor.

## Checklist de publicação

- [ ] WordPress instalado e HTTPS ativo
- [ ] Tema Opinião Real ativado
- [ ] Elementor instalado/ativado
- [ ] Rank Math configurado
- [ ] Pretty Links configurado
- [ ] Logo/favicon configurados
- [ ] Menu e páginas institucionais criados
- [ ] CPTs e taxonomias revisados
- [ ] 30 artigos importados como rascunho
- [ ] Conteúdo e dados de produtos verificados
- [ ] Imagens reais e ALT preenchidos
- [ ] FAQ visível e schema correspondente
- [ ] URLs/canonicals preservados
- [ ] 301s testados quando necessários
- [ ] Sitemap e robots conferidos
- [ ] Analytics/affiliate click tracking testados sem duplicação
- [ ] Desktop/tablet/mobile revisados
- [ ] PageSpeed/Core Web Vitals medidos na instalação real
