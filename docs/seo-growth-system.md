# Sistema de SEO e crescimento orgânico

## Central

A rota `/admin/seo/` concentra o acompanhamento editorial de palavras-chave, oportunidades, atualizações, linkagem, concorrência e relação com afiliados.

## Fonte de dados

A interface funciona sem backend e sem credenciais privadas. O cadastro editorial fica no navegador em `localStorage` (`opiniao_real_seo_admin_v1`). Isso permite estruturar o processo sem apresentar números fictícios como métricas do Google.

Para dados reais, a próxima integração deve usar uma camada de servidor ou conector seguro para Search Console/GA4. Não colocar tokens de APIs privadas no JavaScript público.

## Oportunidades

- Posições 4–10: prioridade para melhoria de cobertura, intenção, título, descrição, FAQ, imagens e links internos.
- Impressões altas + CTR baixo: investigar título e snippet antes de reescrever o artigo inteiro.
- Páginas antigas: revisar aos 90, 180 e 365 dias conforme relevância e mudança do assunto.

## Linkagem

Fluxo editorial recomendado:

`Pilar → artigos de apoio → comparativos/comerciais → oferta afiliada`

Os links devem ser contextuais. Não repetir âncoras artificialmente nem criar blocos de links sem utilidade para o leitor.

## Concorrentes

Cadastrar somente URLs reais. Posição, quantidade de conteúdo e lacunas devem ser preenchidas a partir de observação verificável. A central não simula autoridade, tráfego ou ranking de concorrentes.

## Auditoria

O checklist separa itens técnicos e editoriais. O estado inicial reflete somente o que já foi implementado ou que exige validação externa. Performance e métricas de busca não são marcadas como comprovadas sem ferramenta de medição.

## Negócio

O painel relaciona eventos `affiliate_click` disponíveis localmente com produtos. Vendas e comissão só devem ser atribuídas quando uma rede de afiliados fornecer dados reais. GA4/Search Console continuam sendo as fontes para tráfego e desempenho orgânico.

## Rotina recomendada

1. Semanalmente: observar termos 4–10 e mudanças relevantes.
2. Quinzenalmente: revisar CTR das páginas com impressões suficientes.
3. Mensalmente: atualizar artigos prioritários e revisar linkagem.
4. Trimestralmente: auditoria técnica e revisão de concorrentes.
5. Antes de escalar conteúdo: confirmar intenção, qualidade, cliques afiliados e retorno comercial.

## Regra editorial

SEO deve servir à intenção de busca. Não usar keyword stuffing, conteúdo repetitivo, números inventados, avaliações fabricadas, urgência artificial ou promessas de posicionamento.
