# Checklist de lançamento do Opinião Real

A checklist operacional está em `/lancamento/` e foi criada para evitar que o tráfego pago seja iniciado antes da validação das dependências externas.

## 1. Domínio

- domínio de produção conectado e resolvendo corretamente;
- HTTPS/SSL ativo sem alertas;
- teste em celular real;
- PageSpeed Insights/Lighthouse em Home e principal página comercial.

## 2. Páginas obrigatórias

Confirmar publicação e funcionamento de:

- Home;
- Sobre Nós;
- Como Avaliamos;
- Contato;
- Política de Privacidade;
- Termos de Uso;
- Aviso de Afiliados;
- Transparência.

## 3. SEO

- propriedade do Google Search Console verificada;
- `sitemap.xml` enviado;
- `video-sitemap.xml` enviado quando aplicável;
- `robots.txt` acessível;
- títulos e descrições revisados;
- URLs canônicas e amigáveis;
- dados estruturados validados.

## 4. Analytics

O repositório já possui uma camada de analytics configurável. A configuração real continua dependente dos IDs das contas de produção. Validar:

- GA4;
- Google Tag Manager;
- `page_view`;
- `affiliate_click`;
- conversão real definida para Google Ads;
- UTMs e identificadores de campanha;
- caminho anúncio → página → clique → conversão.

Não tratar `affiliate_click` automaticamente como venda. O evento mede intenção/clique; a conversão de negócio precisa ser definida com a fonte real de comissão.

## 5. Conteúdo inicial

Antes da primeira campanha:

- cinco artigos principais publicados e revisados;
- uma página comercial forte;
- páginas institucionais completas;
- nenhuma especificação, preço, avaliação, teste ou resultado inventado;
- links afiliados conferidos e rastreáveis.

## 6. Google Ads

- landing final acessível;
- links afiliados testados;
- tracking validado;
- palavras negativas configuradas;
- intenção de busca coerente com cada grupo;
- orçamento inicial controlado;
- conversão definida antes de otimizar para ela.

## 7. QA final

Testar em celular e desktop:

- formulários;
- botões;
- links internos e externos;
- links afiliados;
- menu;
- tabelas/comparativos;
- estados de erro e sucesso;
- velocidade;
- indexação básica;
- páginas institucionais.

## 8. Primeiros 30 dias

### Semana 1
Publicar, indexar, enviar sitemap e corrigir problemas de rastreamento.

### Semana 2
Iniciar Google Ads com orçamento controlado e monitoramento de consultas.

### Semana 3
Analisar CPC, CTR, cliques afiliados, conversões e desempenho por página/campanha.

### Semana 4
Cortar desperdícios, melhorar páginas com tráfego e poucos cliques afiliados e aumentar investimento apenas onde os dados justificarem escala.

## Regra de dados

A checklist deve distinguir entre **implementado no código** e **validado em produção**. IDs de GA4/GTM, Search Console, DNS, SSL, velocidade e contas de mídia não devem ser considerados concluídos apenas porque existe suporte técnico no repositório.
