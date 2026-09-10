# Conversão Lovable/React → WordPress + Elementor

| Atual | WordPress/Elementor | Observação |
|---|---|---|
| Header React | Elementor Theme Builder Header / `header.php` | preservar 76/68px e menu mobile |
| Marca | Logo Widget/SVG do tema | usar asset oficial |
| Hero | Container + Heading + Text + Button | manter grid e hierarquia |
| Card categoria | Container/Loop | borda, radius e hover atuais |
| Card artigo | Loop Grid | conteúdo vindo do CMS |
| Card produto | Loop/Container ou bloco customizado | campos estruturados e CTA rastreável |
| Quick Choice | Container/Loop | etiquetas editoriais |
| Trust | Section/Container | superfície Navy |
| Tabela | HTML/TablePress/Widget | rolagem horizontal |
| Prós e contras | Containers em duas colunas | uma coluna no mobile |
| FAQ | Accordion | schema derivado do conteúdo visível |
| CTA | Button + Pretty Links quando configurado | `rel="sponsored"` em afiliados |
| Breadcrumb | Rank Math Breadcrumbs | fallback do tema |
| Footer React | Elementor Footer / `footer.php` | 4→2→1 colunas |

## Tema

O repositório já contém um scaffold em `wordpress-theme/opiniao-real/` com templates WordPress. Ele deve ser tratado como referência de implementação e não como motivo para alterar o design atual.

## GeneratePress/Astra

Se GeneratePress ou Astra for escolhido na instalação real, preferir child theme + Elementor Theme Builder. Não reconstruir o site usando widgets que alterem tipografia, espaçamento ou responsividade por padrão.

## Conteúdo

Elementor controla apresentação; WordPress controla conteúdo. Artigos, categorias, produtos, FAQs, fontes e metadados devem continuar editáveis no CMS.

## Pretty Links

Não criar URLs fictícias. O botão pode apontar para a URL afiliada real diretamente; Pretty Links entra somente após instalação/configuração do plugin.

## Performance

Evitar excesso de widgets, addons e animações. Preferir HTML semântico, CSS do tema, SVG leve e carregamento sob demanda de scripts que não são necessários na primeira pintura.