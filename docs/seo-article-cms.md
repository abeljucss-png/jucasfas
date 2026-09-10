# CMS de artigos SEO

## Objetivo

A central `/admin/artigos/` organiza a entrada de artigos para o Opinião Real antes da publicação. Ela segue o contrato editorial existente e separa cadastro de conteúdo da etapa de publicação.

## Estrutura cadastrada

- Identidade: título, slug, tipo, categoria, status e data editorial.
- SEO: meta title, meta description, palavra-chave principal/secundárias, canonical e ALT.
- Conteúdo: H1, introdução, resumo rápido, critérios de escolha, conteúdo aprofundado, uso no dia a dia e conclusão.
- Comercial/editorial: tabela comparativa, produtos, links relacionados, fontes e transparência de afiliados.
- FAQ: perguntas e respostas preparadas para a etapa de publicação.

## Fluxo

1. Criar artigo.
2. Preencher identidade e intenção de busca.
3. Desenvolver conteúdo sem inventar preço, especificação, avaliação, teste ou experiência.
4. Registrar fontes verificadas.
5. Salvar como rascunho.
6. Mover para `Em revisão` após conferência editorial.
7. Usar `Publicado` somente quando o conteúdo estiver pronto para o publicador.

## Persistência atual

A primeira versão usa `localStorage` no navegador, com a chave `opiniao_real_cms_articles_v1`. Isso permite testar o fluxo sem introduzir backend ou credenciais no cliente. O botão **Exportar JSON** permite transportar um artigo para uma futura API/CMS persistente.

Essa camada não finge publicação: salvar no CMS não altera automaticamente uma página pública.

## Próxima integração recomendada

Quando houver necessidade de edição por vários dispositivos, autenticação, histórico, publicação e colaboração, conectar esta estrutura a um backend persistente (por exemplo, Supabase) com RLS e uma tabela de artigos baseada nos mesmos campos. A camada pública deve consumir apenas artigos cujo status seja `published`.
