# Importação dos 30 artigos SEO no WordPress

## O que foi preparado

O tema `wordpress-theme/opiniao-real` agora contém um importador idempotente para os 30 artigos iniciais do Opinião Real.

Arquivo principal:

`wordpress-theme/opiniao-real/inc/class-or-content-importer.php`

O importador cria ou atualiza:

- 30 posts no CPT `seo_article`;
- 3 categorias principais: `fitness`, `ferramentas`, `casa`;
- subcategorias previstas para Fitness e Ferramentas;
- 3 páginas-pilar: `/melhores-bicicletas-spinning/`, `/melhores-ferramentas/` e `/melhores-produtos-casa/`;
- imagens destacadas SVG editoriais geradas localmente no WordPress;
- foco de palavra-chave do Rank Math;
- título SEO e descrição SEO;
- canonical;
- tipo editorial;
- autor editorial `Equipe Opinião Real`;
- links internos entre artigos da mesma categoria;
- CTA editorial com fallback para a página-pilar.

Os artigos são publicados pelo importador como `publish`. O conteúdo não inventa preços, notas, testes, especificações ou avaliações de produtos. As áreas comerciais devem receber dados e links reais antes de serem tratadas como recomendações específicas.

## Como executar

### WordPress Admin

Com o tema ativo, um administrador encontra:

**Ferramentas → Importar Opinião Real**

O botão **Importar e publicar 30 artigos** executa o processo.

### WP-CLI

Também é possível usar:

```bash
wp eval-file wordpress-theme/opiniao-real/inc/class-or-content-importer.php
```

O arquivo registra o comando:

```bash
wp opiniao-real import-content
```

O processo pode ser executado novamente sem criar uma segunda cópia dos mesmos artigos.

## URLs

O tema preserva URLs de artigos no nível raiz, por exemplo:

- `/melhores-bicicletas-spinning/`
- `/bicicleta-spinning-vale-a-pena/`
- `/melhores-kits-de-ferramentas-para-casa/`

Categorias usam:

- `/fitness/`
- `/ferramentas/`
- `/casa/`

Subcategorias podem usar a estrutura hierárquica correspondente.

## Rank Math

O importador grava os campos públicos do Rank Math:

- `_rank_math_focus_keyword`
- `_rank_math_title`
- `_rank_math_description`
- `_rank_math_canonical_url`

O tema limita título SEO a aproximadamente 60 caracteres e descrição a aproximadamente 160 quando esses campos são atualizados.

Article Schema é produzido pelo Rank Math quando o plugin está ativo. Sem Rank Math, o tema possui fallback de `Article`.

FAQ Schema é derivado da seção FAQ visível do próprio artigo, evitando schema de perguntas que não aparecem para o usuário.

## Imagens

As imagens destacadas são SVG editoriais geradas pelo próprio importador. Isso evita dependência de imagens externas, placeholders de produto ou material de terceiros não licenciado.

ALT é preenchido com o assunto editorial do artigo.

Para a versão comercial definitiva, cada artigo pode receber uma imagem fotográfica/editorial real na Media Library, mantendo o mesmo contrato de ALT.

## Links internos

Cada artigo inclui links para outros conteúdos da mesma categoria. A página-pilar correspondente é usada como destino principal de conversão editorial.

A camada comercial não cria URLs de afiliados fictícias. O campo `_or_affiliate_url` deve receber um destino real, preferencialmente gerenciado pelo Pretty Links.

Quando esse campo existe, o template exibe **Ver preço atualizado** com `rel="sponsored noopener noreferrer"`. Sem destino configurado, o CTA aponta para conteúdo editorial e informa que o link comercial ainda não foi configurado.

## O que ainda depende do ambiente WordPress

Este repositório não possui credenciais nem conexão administrativa com a instalação WordPress de produção. Portanto, não foi possível executar a importação no servidor real, nem:

- instalar/ativar Rank Math;
- instalar/ativar Pretty Links;
- enviar sitemap ao Google Search Console;
- testar URLs HTTP reais;
- medir PageSpeed/Core Web Vitals no domínio publicado;
- verificar imagens no navegador real;
- confirmar indexação.

Essas etapas devem ser executadas após instalar o tema no WordPress de produção.

## Checklist pós-importação

- [ ] Ativar tema Opinião Real.
- [ ] Instalar/ativar Elementor.
- [ ] Instalar/ativar Rank Math.
- [ ] Instalar/ativar Pretty Links.
- [ ] Executar importação.
- [ ] Conferir 30 posts publicados.
- [ ] Conferir `/fitness`, `/ferramentas` e `/casa`.
- [ ] Conferir todas as URLs antigas e redirects necessários.
- [ ] Conferir canonical e sitemap.
- [ ] Configurar links afiliados reais.
- [ ] Conferir `rel=sponsored` nos CTAs comerciais.
- [ ] Revisar imagens e ALT.
- [ ] Testar desktop, tablet e mobile.
- [ ] Testar FAQ e dados estruturados.
- [ ] Conectar Search Console e solicitar indexação das URLs prioritárias.
- [ ] Medir PageSpeed/Core Web Vitals após o conteúdo real entrar.
