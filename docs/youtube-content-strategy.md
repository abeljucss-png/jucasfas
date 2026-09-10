# Estratégia de YouTube e vídeo | Opinião Real

## Objetivo

Construir um canal editorial que conecte descoberta no YouTube, aprofundamento no site e conversão em ofertas de afiliados, sem transformar o conteúdo em publicidade disfarçada.

Fluxo recomendado:

**Site ↔ YouTube → Google → análise/comparação → oferta verificada no Mercado Livre**

O caminho inverso também é incentivado: artigos devem apresentar o vídeo relacionado quando ele existir.

## Arquitetura do site

- `/videos` é o hub editorial de vídeos.
- `/analise-video` documenta o modelo de página e concentra a estrutura editorial.
- `/analise-video/[produto]` é o padrão de páginas individuais de análise em vídeo.
- Cada análise em vídeo deve ligar para artigo completo, comparativo ou guia relacionado e, quando houver oferta real conferida, para a página comercial/afiliada.

## Pilares de conteúdo

### 1. Review completo
**Exemplo:** Análise completa da bicicleta spinning [modelo real]

Estrutura: problema → contexto de uso → características verificáveis → experiência de uso somente quando houver experiência real → vantagens → limitações → comparação → para quem é → conclusão.

### 2. Comparativo
**Exemplo:** Bicicleta Spinning A vs B: qual escolher?

Comparar os mesmos critérios para os dois produtos, deixando claro quando algum dado não estiver disponível.

### 3. Listas
**Exemplo:** 5 melhores bicicletas spinning para apartamento

A lista só deve usar produtos e informações efetivamente conferidos. Não preencher posições com modelos fictícios.

### 4. Guias
**Exemplo:** Como escolher uma bicicleta spinning?

Conteúdo educativo orientado por critérios, com linguagem independente de marca.

### 5. Shorts
Formato de descoberta com uma única ideia útil. Gancho curto → informação verificável → CTA para o conteúdo completo.

## Roteiro-base

**Abertura**
> Você está procurando uma bicicleta spinning para treinar em casa, mas não sabe qual escolher?

**Introdução**
- explicar o que será analisado;
- apresentar os critérios;
- definir o perfil de usuário.

**Análise**
- características verificáveis;
- vantagens;
- limitações;
- comparação com alternativas.

**Conclusão**
Responder objetivamente se o produto faz sentido para o perfil analisado. Evitar “melhor de todos” sem critério e evidência.

**CTA**
> Confira a análise completa no Opinião Real.

## Roteiro de Shorts

**Gancho:** “Antes de comprar uma bicicleta spinning, veja isso.”

**Informação:** um único ponto que possa mudar a decisão de compra.

**Final:** “Veja a análise completa no Opinião Real.”

## Calendário inicial

| Vídeo | Formato | Página relacionada |
|---|---|---|
| Melhores bicicletas spinning para casa em 2026 | Lista | `/melhores-bicicletas-spinning` |
| Bicicleta spinning vale a pena? | Guia | `/bicicleta-spinning-vale-a-pena` |
| Bicicleta spinning para apartamento: o que analisar | Guia | `/bicicleta-spinning-apartamento` |
| Melhores esteiras dobráveis para casa | Lista | `/melhores-esteiras-dobraveis` |
| Melhores kits de ferramentas para casa | Lista | `/ferramentas/melhores-kits-de-ferramentas` |

## Thumbnails

- logo Opinião Real;
- título curto, legível em tela pequena;
- imagem real do produto quando disponível;
- comparação visual para comparativos;
- hierarquia simples e alto contraste;
- sem números, selos, preços ou resultados inventados;
- sem clickbait que contradiga o conteúdo.

O repositório já contém uma base SVG editorial para os cinco primeiros vídeos. Essas artes não simulam avaliações, preços ou produtos específicos e podem ser substituídas pelas thumbnails reais do YouTube quando os vídeos forem publicados.

## Monetização

A descrição do vídeo pode conter:

1. link para a análise completa;
2. link para comparação ou guia relacionado;
3. link comercial/afiliado quando houver oferta real e conferida;
4. aviso: “Alguns links podem gerar comissão sem custo adicional para você.”

A comissão nunca deve ser apresentada como prova de qualidade do produto.

## Medição

### Site
- sessões e páginas de entrada atribuídas ao YouTube;
- `affiliate_click` por página e posição;
- páginas de destino mais acessadas;
- interação com FAQ;
- profundidade de rolagem;
- conversões disponíveis no ambiente de analytics.

### YouTube
- visualizações;
- retenção;
- cliques nos links;
- inscritos gerados;
- desempenho por formato e tema.

### UTMs
Usar links consistentes nas descrições, por exemplo:
`utm_source=youtube&utm_medium=video&utm_campaign=<slug-do-video>`

Não atribuir vendas ao vídeo sem uma fonte de medição que realmente comprove a origem.

## Integração técnica

As páginas de `/analise-video` e `/videos` estão preparadas para receber o player real do YouTube. O `public/videos/video-schema.js` só gera `VideoObject` quando existe um ID real e uma data de publicação válida. Ao receber um ID, o script também monta o iframe do YouTube e aceita `data-duration` em formato ISO 8601 quando a duração estiver disponível. Enquanto não houver vídeo publicado, nenhum `VideoObject` fictício é criado.

## Regras editoriais

- Não publicar teste que não foi realizado.
- Não inventar experiência de uso.
- Não fabricar avaliação de comprador.
- Não inventar preço, desconto, disponibilidade ou especificação.
- Diferenciar claramente informação do fabricante, opinião pública e avaliação editorial.
- Atualizar vídeo e artigo quando uma informação relevante mudar.
- Manter a mesma política de transparência do site.

## Princípio da marca

**Informação clara para decisões melhores.**