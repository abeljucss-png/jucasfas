# Central de gestão de afiliados

## Objetivo

Concentrar os indicadores necessários para decidir quando cortar, melhorar ou escalar produtos, campanhas e páginas do Opinião Real.

## Modelo de dados

### Produto

- `product_id`
- `product_name`
- `category`
- `ad_spend`
- `clicks`
- `affiliate_clicks`
- `sales`
- `commission`
- `profit = commission - ad_spend`
- `updated_at`

### Campanha

- `campaign`
- `cpc`
- `ctr`
- `conversion_rate`
- `cost_per_sale`
- `result`

### Conteúdo

- `path`
- `title`
- `views`
- `affiliate_clicks`
- `sales`

## KPIs

- Investimento em anúncios = soma de `ad_spend`.
- Comissões recebidas = soma de `commission`.
- Lucro/prejuízo = comissões − investimento.
- ROI = lucro ÷ investimento × 100.

Se o investimento for zero, o ROI deve ser exibido como `—`, e não como infinito ou zero interpretado como resultado.

## Alertas

- **Gastando sem resultado:** gasto relevante sem venda após uma janela mínima de teste.
- **Muito tráfego, poucos cliques:** volume de acessos relevante e taxa de clique afiliado abaixo do limite definido pela operação.
- **Sinal de escala:** conversão e margem positivas, com volume suficiente para reduzir o risco de uma decisão baseada em poucos eventos.

Os limiares devem ser configuráveis conforme categoria e histórico. O painel não deve apresentar uma regra estatística como verdade universal.

## Fonte de verdade

A página `/gestao-afiliados/` inclui dados demonstrativos apenas para validar a interface. A produção deve receber dados de fontes reais, como GA4/Google Ads e relatórios das redes de afiliados, por uma camada de backend ou integração segura.

Não colocar tokens, chaves privadas ou credenciais de redes de anúncios/afiliados no JavaScript público.

## Decisão operacional

1. **Cortar:** produto/campanha com gasto e ausência persistente de retorno.
2. **Melhorar:** página com tráfego e baixa taxa de clique afiliado.
3. **Escalar:** produto com conversão, comissão e margem verificadas.
4. **Revalidar:** sempre que mudar oferta, criativo, página, comissão ou intenção de busca.

O dashboard é uma central de decisão, não uma fonte para inventar vendas ou atribuir receita sem evidência.