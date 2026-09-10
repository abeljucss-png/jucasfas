# Plano de campanha Google Ads — Bicicleta Spinning

## 1. Objetivo

Validar se o Opinião Real consegue gerar cliques qualificados em links de afiliado e vendas de bicicleta spinning com custo de aquisição inferior à comissão recebida.

**Campanha:** Pesquisa - Bicicleta Spinning - Compra  
**Rede:** somente Pesquisa Google  
**Localização:** Brasil  
**Idioma:** Português  
**Destino único:** `https://opiniaoreal.com/melhores-bicicletas-spinning`  
**Orçamento de teste:** R$ 30 a R$ 50/dia  
**Janela inicial:** 30 dias  
**Estratégia inicial:** Maximizar cliques, com limite de CPC definido conforme o orçamento e os dados observados. Migrar para Maximizar conversões somente quando houver volume de conversões confiável.

> **Gate de publicação:** antes de ativar a campanha, a página de destino precisa conter produtos reais, especificações verificadas e links de afiliado reais. A estrutura existente evita dados inventados, portanto os espaços editoriais ainda não devem ser tratados como produtos vencedores.

## 2. Estrutura da campanha

### Grupo 1 — Melhor Bicicleta Spinning

| Tipo | Palavra-chave |
|---|---|
| Exata | `[melhor bicicleta spinning]` |
| Frase | `"melhor bicicleta spinning"` |
| Exata | `[bicicleta spinning melhor custo benefício]` |
| Frase | `"qual bicicleta spinning comprar"` |

**Intenção:** comparação e decisão de compra.

### Grupo 2 — Comprar Bicicleta Spinning

| Tipo | Palavra-chave |
|---|---|
| Exata | `[bicicleta spinning comprar]` |
| Frase | `"bicicleta spinning preço"` |
| Exata | `[bicicleta spinning promoção]` |
| Frase | `"bicicleta spinning profissional comprar"` |

**Intenção:** alta proximidade da compra.

### Grupo 3 — Bicicleta Spinning Apartamento

| Tipo | Palavra-chave |
|---|---|
| Exata | `[bicicleta spinning apartamento]` |
| Frase | `"bicicleta spinning silenciosa"` |
| Frase | `"bicicleta spinning residencial"` |

**Intenção:** necessidade específica, com potencial comercial.

### Grupo 4 — Comparativo Bicicleta Spinning

| Tipo | Palavra-chave |
|---|---|
| Frase | `"bicicleta spinning vale a pena"` |
| Frase | `"bicicleta spinning profissional ou residencial"` |
| Frase | `"melhor bike spinning residencial"` |

**Intenção:** pesquisa avançada antes da decisão.

## 3. Palavras-chave negativas iniciais

Adicionar como negativas da campanha:

`grátis`, `download`, `usada`, `usado`, `OLX`, `mercado livre usado`, `conserto`, `manual`, `como montar`, `curso`, `aula`, `emprego`, `vaga`, `youtube`.

Revisar o relatório de termos de pesquisa durante a fase de teste para ampliar a lista somente com consultas claramente sem intenção comercial.

## 4. Anúncios responsivos de pesquisa

### RSA 1 — Comparação

**Títulos**
1. Melhores Bicicletas Spinning 2026
2. Compare Antes de Comprar
3. Guia Completo de Compra
4. Veja os Melhores Modelos
5. Escolha a Bicicleta Ideal

**Descrições**
1. Compare modelos de bicicleta spinning e descubra qual opção combina com seu treino em casa.
2. Análise completa com pontos positivos, negativos e custo-benefício.

### RSA 2 — Para casa

**Títulos**
1. Bicicleta Spinning Para Casa
2. Veja Nossa Análise Completa
3. Qual Modelo Vale a Pena?
4. Compare as Melhores Opções

**Descrição**
- Veja um comparativo das principais bicicletas spinning e escolha com mais segurança.

### RSA 3 — Profissional e apartamento

**Títulos**
1. Bicicleta Spinning Profissional
2. Opções Para Apartamento
3. Guia Atualizado 2026

**Descrição**
- Descubra quais características analisar antes de comprar uma bicicleta spinning.

**Regra editorial:** não usar afirmações de superioridade, preço, desconto ou disponibilidade que não possam ser verificadas na página no momento da publicação.

## 5. Extensões

### Sitelinks

| Texto | Destino |
|---|---|
| Melhores Bicicletas Spinning | `/melhores-bicicletas-spinning` |
| Como Escolher | `/como-escolher-bicicleta-spinning` |
| Bicicleta Para Apartamento | `/bicicleta-spinning-apartamento` |
| Perguntas Frequentes | `/melhores-bicicletas-spinning#faq` |

### Snippet estruturado

**Cabeçalho:** Critérios analisados  
**Valores:** Conforto, Resistência, Custo-benefício, Recursos

## 6. Mensuração e UTMs

Todos os anúncios devem usar URLs com parâmetros UTM consistentes. Modelo:

`https://opiniaoreal.com/melhores-bicicletas-spinning?utm_source=google&utm_medium=cpc&utm_campaign=bicicleta_spinning&utm_term={keyword}&utm_content={creative}`

Parâmetros principais:

- `utm_source=google`
- `utm_medium=cpc`
- `utm_campaign=bicicleta_spinning`
- `utm_term={keyword}`
- `utm_content={creative}`

O rastreamento existente também preserva identificadores de campanha como `gclid`, `gbraid` e `wbraid` quando presentes.

## 7. Eventos e funil

O funil de análise deve ser lido nesta ordem:

1. `page_view` — chegada à página.
2. `scroll_depth` — avanço de leitura.
3. `product_view` — produto efetivamente visualizado.
4. `comparison_view` — tabela comparativa visualizada.
5. `faq_interaction` — interação com FAQ.
6. `affiliate_click` — clique em oferta/link de afiliado.
7. Venda/comissão — dado externo da plataforma de afiliados.

**Conversão primária recomendada para a primeira fase:** `affiliate_click` qualificado.  
**Conversão de negócio:** venda confirmada na plataforma de afiliados. O site não deve simular esse dado.

## 8. Configuração de conversões

### Fase 1

Importar/usar no Google Ads o evento de clique de afiliado como sinal de intenção comercial, separando-o de eventos de navegação.

### Fase 2

Quando houver volume suficiente de vendas confirmadas, avaliar a migração para uma conversão de negócio baseada em venda/comissão real.

**Não otimizar automaticamente para `page_view`, `scroll_depth` ou `faq_interaction` como objetivo principal de vendas.** Esses eventos são sinais auxiliares.

## 9. Dashboard de acompanhamento

| Data | Investimento | Cliques Google Ads | CPC | Visitantes | Cliques Mercado Livre | Vendas | Comissão | Lucro/prejuízo |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
|  |  |  |  |  |  |  |  |  |

### Indicadores derivados

**CTR** = cliques / impressões  
**CPC médio** = investimento / cliques  
**Taxa de clique afiliado** = cliques afiliados / visitantes da campanha  
**CPA de clique afiliado** = investimento / cliques afiliados  
**CPA de venda** = investimento / vendas  
**ROAS de comissão** = comissão / investimento  
**Lucro/prejuízo** = comissão - investimento

## 10. Critério econômico principal

A pergunta da campanha é:

> **Consigo gerar uma venda de bicicleta spinning pagando menos em mídia do que a comissão recebida?**

Exemplo de leitura, sem assumir números reais:

- Comissão por venda: `C`
- Investimento acumulado: `I`
- Vendas confirmadas: `V`
- CPA real: `I / V`

A campanha é economicamente sustentável quando o CPA real fica abaixo da comissão líquida recebida, considerando eventuais custos adicionais.

## 11. Rotina de otimização

### Primeiros dias

- Conferir termos de pesquisa.
- Conferir cliques afiliados no GA4/GTM.
- Verificar se as UTMs chegam corretamente.
- Identificar consultas sem intenção comercial.
- Não tomar decisões agressivas com amostra muito pequena.

### Após volume inicial de dados

**Pausar ou reduzir:**
- termos que consomem orçamento sem gerar interação relevante;
- anúncios com desempenho consistentemente inferior;
- consultas claramente informacionais ou fora do produto;
- páginas/CTAs que recebem tráfego mas não geram cliques afiliados.

**Aumentar gradualmente:**
- grupos que geram cliques afiliados qualificados;
- anúncios com melhor relação entre tráfego e clique afiliado;
- termos com intenção comercial comprovada;
- conteúdos que demonstram melhor taxa de avanço no funil.

## 12. Testes A/B

A infraestrutura do site aceita uma variante `a` ou `b` por sessão.

### Teste inicial sugerido

**CTA A:** `Ver preço atualizado`  
**CTA B:** `Conferir melhor oferta`

Manter o restante da página igual durante o teste. Comparar principalmente:

- taxa de clique afiliado;
- cliques afiliados por visitante;
- desempenho por dispositivo;
- desempenho por grupo de anúncios.

Depois, testar títulos, posição dos CTAs, tabela comparativa e imagens, uma variável por vez sempre que possível.

## 13. Orçamento e fases

### Fase 1 — Validação

R$ 30/dia durante os primeiros dias, observando qualidade do tráfego e termos de pesquisa.

### Fase 2 — Expansão controlada

Até R$ 50/dia quando houver evidência de que o tráfego gera cliques afiliados e a página apresenta boa interação.

### Fase 3 — Escala

Só aumentar orçamento depois de comprovar economia unitária positiva ou evidência consistente de que o funil está próximo do ponto de equilíbrio.

## 14. Checklist antes de publicar

- [ ] Produtos reais cadastrados na página.
- [ ] Especificações conferidas.
- [ ] Links de afiliado reais e funcionais.
- [ ] Transparência de afiliados visível.
- [ ] GA4 configurado com Measurement ID real.
- [ ] GTM configurado com Container ID real, se utilizado.
- [ ] Evento `affiliate_click` validado.
- [ ] UTM validada.
- [ ] Conversão do Google Ads validada.
- [ ] Página mobile revisada.
- [ ] Termos de pesquisa e negativas definidos.
- [ ] Nenhuma métrica, venda, avaliação ou preço fictício.

## 15. Regra de decisão após 30 dias

Classificar a campanha em uma das três situações:

**Escalar:** há vendas confirmadas e CPA abaixo da comissão líquida, com qualidade de tráfego aceitável.

**Otimizar:** há cliques afiliados consistentes, mas ainda não há volume suficiente de vendas ou o CPA está próximo do limite econômico.

**Pausar:** há gasto relevante sem cliques afiliados qualificados ou sem evidência de intenção comercial após otimizações razoáveis.

A decisão deve ser baseada em dados observados, nunca em métricas inventadas ou projeções apresentadas como resultado.
