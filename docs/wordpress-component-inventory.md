# Opinião Real — Inventário de componentes para WordPress

Este inventário transforma a interface React atual em uma biblioteca de componentes independente de framework.

## Componentes de layout

| Componente | Dados | Apresentação WordPress |
|---|---|---|
| Header | menu, logo, estado ativo | `header.php` + `template-parts/header/site-header.php` |
| Navigation | itens e URLs | menu registrado em `functions.php` |
| Footer | links institucionais | `footer.php` + `template-parts/footer/site-footer.php` |
| Container | largura/respiro | classes do tema |
| Breadcrumbs | hierarquia atual | `template-parts/seo/breadcrumbs.php` |

## Componentes editoriais

| Componente | Conteúdo dinâmico | Implementação |
|---|---|---|
| Article Hero | título, intro, imagem, data | template-part |
| Article Card | título, resumo, categoria, URL | template-part |
| Quick Summary | recomendações resumidas | bloco Gutenberg |
| Criteria | critérios de escolha | bloco Gutenberg |
| Buying Guide | critérios + explicações | bloco Gutenberg |
| Product Card | produto, indicação, prós/contras, CTA | bloco Gutenberg/template-part |
| Pros & Cons | listas positivas/atenções | bloco Gutenberg |
| Comparison Table | colunas e linhas | bloco Gutenberg |
| FAQ | perguntas e respostas | bloco Gutenberg |
| Sources | fontes editoriais | bloco Gutenberg/template-part |
| Related Content | relações entre artigos | query/template-part |
| Trust Block | critérios editoriais | template-part |
| Affiliate Disclosure | transparência comercial | template-part |
| Affiliate CTA | URL e tracking | bloco/helper |

## Componentes funcionais

### Affiliate CTA

Contrato mínimo:

```text
product_id
product_name
cta_position
affiliate_url
```

Saída deve incluir `rel="sponsored noopener noreferrer"` e disparar `affiliate_click` na camada de analytics.

### FAQ

A mesma fonte de dados deve renderizar a pergunta visível e o JSON-LD. Não criar FAQ schema separado do conteúdo.

### Comparison Table

Em telas estreitas, a tabela deve permanecer dentro de uma superfície com rolagem horizontal. Nunca quebrar o layout da página para caber todas as colunas.

### Product Card

Não publicar preço, especificação, avaliação ou disponibilidade sem fonte conferida. A ausência de dados deve resultar em omissão, não em texto inventado.

## Estados e acessibilidade

Todos os componentes devem ter:

- foco visível;
- contraste suficiente;
- alvos de toque confortáveis;
- HTML semântico;
- texto alternativo em imagens;
- estado vazio quando uma coleção não tiver itens;
- estado de erro para integrações externas;
- interação progressiva quando JavaScript estiver indisponível.

## Responsividade

A referência atual usa grids que passam de múltiplas colunas para uma coluna em telas menores e tabelas com rolagem horizontal. O tema WordPress deve preservar esse comportamento sem criar versões duplicadas dos componentes.

## Mapeamento de dados

```text
React props/state
      ↓
WordPress post fields / taxonomies / block attributes
      ↓
PHP template parts
      ↓
HTML semântico
      ↓
CSS do tema + JS progressivo
```

A migração não deve transformar conteúdo editorial em constantes JavaScript novamente.
