# Modelo editorial para WordPress

## Princípio

O WordPress deve ser o sistema de conteúdo. O tema deve ser responsável por apresentação e comportamento visual, não por guardar textos de artigos em JavaScript.

## Post type `seo_article`

### Campos essenciais

| Campo | Tipo | Uso |
|---|---|---|
| Título | title | título editorial/H1 padrão |
| Slug | slug | URL pública estável |
| Conteúdo | editor | corpo do artigo |
| Status | status | rascunho, revisão, publicado |
| Tipo | select | review, guide, comparison |
| Categoria | taxonomy | Fitness, Ferramentas, Casa |
| Meta title | text | SEO |
| Meta description | textarea | SEO |
| Canonical | url | SEO técnico, quando diferente da URL padrão |
| Palavra-chave principal | text | controle editorial |
| Palavras-chave secundárias | text | apoio sem keyword stuffing |
| Imagem destacada | media | hero/thumbnail |
| ALT da imagem | text | acessibilidade/SEO |
| Fontes | repeater | rastreabilidade editorial |
| FAQ | repeater | perguntas visíveis + schema |
| Artigos relacionados | relationship | cluster interno |
| Data de revisão | datetime | atualização editorial |
| Aviso de afiliado | rich text | transparência comercial |

## Blocos reutilizáveis

Criar blocos Gutenberg ou template parts para:

- `or/quick-summary`
- `or/criteria`
- `or/comparison-table`
- `or/product-card`
- `or/pros-cons`
- `or/buying-guide`
- `or/faq`
- `or/trust-block`
- `or/affiliate-cta`
- `or/sources`
- `or/related-content`
- `or/affiliate-disclosure`

Cada bloco deve ter HTML semântico, teclado funcional e comportamento progressivo.

## Produto citado

Não é necessário criar um catálogo público de produtos nesta primeira migração. Para artigos, o produto pode ser um grupo estruturado dentro do conteúdo com:

- nome exato;
- indicação;
- características verificadas;
- pontos positivos;
- pontos de atenção;
- imagem real;
- URL comercial rastreável;
- data de verificação.

Se o catálogo crescer e os mesmos produtos aparecerem em muitos artigos, migrar para um CPT `product` ou entidade equivalente passa a ser vantajoso.

## Comparativos

Para comparativos recorrentes, usar `content_type=comparison` e um bloco de tabela estruturada. Não gravar avaliações ou notas como dados se não houver critério editorial documentado.

## FAQ

Cada pergunta precisa estar visível na página. O schema `FAQPage` deve ser gerado a partir das mesmas perguntas/respostas exibidas ao leitor, evitando divergência entre conteúdo e structured data.

## Importação dos artigos atuais

O catálogo em `public/seo-articles-content.js` é fonte de migração para metadados e conteúdo estruturado. Os Markdown dos artigos também podem ser importados pela migration do banco quando disponíveis.

Fluxo recomendado:

```text
React/Vite
  ↓ exportação/normalização
Markdown + metadados
  ↓ importador
WordPress seo_article
  ↓ revisão editorial
Publicado
```

O importador deve ser idempotente por slug: executar duas vezes não deve criar artigos duplicados.

## Categorias e clusters

### Fitness em Casa

- bicicletas spinning
- esteiras
- equipamentos de treino

### Ferramentas

- kits de ferramentas
- parafusadeiras
- ferramentas sem fio

### Casa e Utilidades

- produtos úteis
- organização
- equipamentos domésticos

O link interno deve seguir o fluxo editorial:

`educacional → comparativo → comercial`

sem forçar links irrelevantes.

## Estados editoriais

- **Rascunho:** conteúdo em produção.
- **Em revisão:** fontes, SEO, links, imagens e claims em conferência.
- **Publicado:** página pronta e rastreável.
- **Atualização necessária:** revisão motivada por alteração de produto, preço, disponibilidade, fonte ou intenção de busca.

## Regras de qualidade

Nunca transformar placeholders em fatos. Se preço, especificação, avaliação, disponibilidade, teste ou experiência não estiverem verificados, o campo deve ficar pendente ou ser removido da publicação.

O CMS não deve permitir que uma ficha comercial pareça uma experiência física se o produto não foi testado pela equipe.
