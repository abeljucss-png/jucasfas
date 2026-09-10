# Estratégia de captura e relacionamento | Opinião Real

## Objetivo

Transformar visitantes ocasionais em uma audiência própria, com consentimento, segmentação por interesse e capacidade de relacionamento por e-mail. A aquisição continua vindo de Google, YouTube, redes sociais e busca orgânica, mas o relacionamento passa a depender menos de mídia paga.

## Funil

Google / YouTube / Social → artigo ou vídeo → captura de e-mail → segmentação → conteúdo útil → retorno ao site → clique qualificado → oferta verificada.

## Captura

A interface global usa o título **Receba análises e comparativos antes de comprar**, com nome, e-mail e interesse: Fitness, Ferramentas ou Casa. O CTA é **Quero receber**.

A integração de envio fica desacoplada por `public/audience-config.js`. O campo `endpoint` deve apontar para um backend HTTPS ou automação controlada pelo proprietário. Chaves privadas de Mailchimp, Brevo ou ConvertKit nunca devem ir para o navegador.

## Pop-up

O pop-up não abre imediatamente. Por padrão, aguarda 45 segundos ou pode ser acionado por intenção de saída. Também existe o evento de chegada ao final do conteúdo para medir intenção, sem usar contadores, descontos artificiais ou urgência falsa.

## Lead magnet

`/materiais-gratuitos` apresenta:

- Guia gratuito: Como escolher uma bicicleta spinning.
- Checklist antes de comprar equipamentos para academia em casa.

A página pode futuramente entregar PDF, checklist ou outro material real depois da confirmação do lead.

## Segmentação

- **Fitness:** bicicletas spinning, esteiras e equipamentos de treino. Priorizar comparativos, novidades e análises.
- **Ferramentas:** kits, parafusadeiras e ferramentas sem fio. Priorizar guias e comparações.
- **Casa:** organização, eletroportáteis e produtos úteis. Priorizar guias práticos e comparativos.

A página de origem também é enviada no payload de captura e os UTMs/click IDs preservados pelo analytics são associados ao evento de lead.

## Remarketing

O analytics passa a disponibilizar eventos para GTM/GA4 e futuras integrações:

- `remarketing_product_view`
- `remarketing_affiliate_click`
- `remarketing_article_read`
- `remarketing_page_abandon`
- `lead_capture`
- `lead_capture_success`
- `lead_capture_pending`
- `lead_capture_error`

Google Ads pode usar esses eventos por meio do GTM/GA4 quando os IDs forem configurados. Meta Pixel fica preparado por `metaPixelId`, mas não é carregado sem uma configuração explícita.

## Conteúdo recomendado

O bloco **Continue lendo** usa a categoria inferida da URL para apresentar conteúdos relacionados de Fitness, Ferramentas ou Casa. A regra é simples e previsível, sem perfilamento invasivo.

## Métricas

### Captura

- novos inscritos;
- taxa de conversão do formulário;
- leads por página;
- leads por origem/campanha;
- interesse selecionado.

### Relacionamento

- entrega e abertura, quando o provedor estiver conectado;
- cliques nos e-mails;
- retorno ao site;
- cliques afiliados após relacionamento.

### Remarketing

- usuários que visualizaram produto;
- leitores qualificados;
- cliques em afiliados;
- abandono com intenção mensurável.

## Privacidade e qualidade

A captura deve ter finalidade clara e mecanismo de descadastro. Não coletar dados desnecessários. Não armazenar e-mails reais no navegador como se isso fosse uma base própria: sem endpoint configurado, o formulário apenas registra o lead como pendente e informa que o envio ainda não foi conectado.

Nunca usar avaliações, descontos, escassez, contadores, depoimentos ou resultados inventados para aumentar conversão.
