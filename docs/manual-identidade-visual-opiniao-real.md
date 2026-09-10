# Manual de Identidade Visual Opinião Real

**Versão:** 1.0  
**Finalidade:** referência única para reconstrução do Opinião Real em WordPress, preservando a linguagem visual atual.

## 1. Identidade da marca

### Nome
**Opinião Real**

### Posicionamento
Portal de análises, comparativos e guias de compra.

### Como a marca deve ser percebida
O usuário deve perceber o Opinião Real como uma publicação editorial confiável, clara e criteriosa: menos aparência de vitrine e mais aparência de veículo que ajuda a tomar uma decisão. A interface deve transmitir pesquisa, transparência, organização e bom gosto, sem promessas exageradas.

### Personalidade visual
- **Tom:** direto, informativo, humano e seguro, sem linguagem agressiva de venda.
- **Sensação:** confiança, calma, clareza e sofisticação editorial.
- **Valores visuais:** transparência, hierarquia, legibilidade, equilíbrio e utilidade.
- **Estilo:** revista digital contemporânea, com bastante espaço em branco, tipografia editorial nos títulos e sans-serif limpa no conteúdo funcional.
- Evitar estética de marketplace genérico, excesso de badges, urgência artificial, sombras pesadas e elementos decorativos sem função.

## 2. Paleta de cores

| Token | HEX | Uso recomendado |
|---|---|---|
| Navy / Ink | `#0B1F3A` | Logo, títulos, header, CTA principal, blocos de confiança |
| Editorial Blue | `#294D75` | Links, CTA secundário, destaques editoriais |
| Text Dark | `#172033` | Texto principal e títulos de apoio |
| Muted | `#667085` | Texto secundário, descrições e metadados |
| Line | `#E5E9EF` | Bordas, divisores e tabelas |
| Soft | `#F6F8FB` | Fundos alternados e áreas de apoio |
| White | `#FFFFFF` | Fundo principal, cards e superfícies |
| Gold / Accent | `#C98B3C` | Acentos de marca, detalhes e pequenos indicadores |
| Soft Blue | `#EEF3F8` | Ícones, áreas de destaque leve |
| Alert / Attention | `#8A5A16` | Atenção editorial, somente quando necessária |
| Error | `#B42318` | Erros de formulário/API, nunca para criar urgência |
| Success | `#247A52` | Confirmações e estados positivos |

### Regras de cor
- Navy é a cor estrutural; não usar azul/gold em excesso.
- CTA primário deve priorizar `#0B1F3A` com texto branco.
- Gold é acento, não fundo dominante.
- Cards usam branco sobre fundos `#F6F8FB` ou branco sobre branco com borda.
- Tabelas usam cabeçalho `#F7F9FB`, linhas `#E5E9EF` e texto `#172033`.
- Estados de erro/sucesso devem ser semanticamente claros e discretos.

## 3. Tipografia

### Família principal
**DM Sans**, com fallback `system-ui, sans-serif`. Usada em menus, corpo, botões, metadados e interface.

### Família editorial
**Playfair Display**, com fallback `Georgia, serif`. Usada em H1/H2/H3 editoriais e títulos de destaque.

### Escala recomendada
| Elemento | Desktop | Mobile | Peso |
|---|---:|---:|---:|
| H1 hero | 58px | 38–45px | 600–700 |
| H1 artigo | 52px | 35–40px | 600–700 |
| H2 seção | 35px | 28–32px | 600–700 |
| H3 | 20–22px | 18–20px | 600–700 |
| Texto normal | 16–17px | 15–16px | 400 |
| Lead | 18px | 16px | 400 |
| Metadados | 11–13px | 11–13px | 500–600 |
| CTA | 14–16px | 14–16px | 600 |

Corpo: `line-height: 1.55`; texto editorial longo: aproximadamente `1.75–1.8`.

## 4. Sistema de espaçamento

Base recomendada: escala de 4px/8px, mantendo os valores atuais quando já estabelecidos.

| Token | Valor | Uso |
|---|---:|---|
| XS | 4–8px | ícone/texto, pequenos gaps |
| Pequeno | 12–16px | padding interno e metadados |
| Médio | 20–30px | cards e grupos |
| Grande | 45–65px | separação entre blocos |
| Seção | 65–90px | distância vertical entre seções |
| Hero | 76–90px | respiro principal desktop |

Container principal: `min(1160px, 100% - 48px)` desktop; em telas menores, aproximadamente `100% - 32px`.

## 5. Componentes visuais

### Header
- Altura desktop: **76px**; mobile: **68px**.
- Sticky no topo.
- Fundo branco translúcido com blur discreto.
- Borda inferior `#E5E9EF`.
- Logo à esquerda; navegação central/direita.
- Marca: símbolo OR em bloco navy arredondado + nome Opinião Real.
- Mobile: navegação recolhida em menu; painel branco abaixo do header.

### Menu
Itens principais atuais: **Início, Fitness, Ferramentas, Casa, Comparativos, Sobre Nós**. A arquitetura também contempla Guias de Compra e Vídeos.

- Gap desktop: cerca de 30px.
- Estado normal: `#667085`.
- Hover/ativo: `#0B1F3A`.
- Ativo: peso 600.
- Botões sem aparência de botão pesado.

### CTA principal
Modelo: **Ver preço atualizado** / **Confira a oferta**.
- Fundo `#0B1F3A`.
- Texto branco.
- Border radius: 7px.
- Padding aproximado: 13px 19px.
- Peso: 600.
- Sombra curta e discreta.
- Hover: leve elevação, sem animação exagerada.
- Links afiliados devem manter `rel="sponsored noopener noreferrer"`.

### CTA secundário
Modelo: **Comparar modelos**.
- Fundo transparente/branco.
- Borda `#CCD3DC`.
- Texto `#0B1F3A`.
- Mesmo raio do primário.

### Cards de produto
Estrutura: imagem real → etiqueta de posição → nome → resumo → mini-especificações → prós/contras → CTA.
- Card branco, borda `#E5E9EF`, raio aproximadamente 12px.
- Imagem com área própria e proporção consistente.
- Não publicar preço, especificação, avaliação ou disponibilidade sem fonte/verificação.
- Em grade, manter leitura equilibrada; no mobile, uma coluna.

### Cards de artigo
Estrutura: imagem → categoria → título → resumo → ação.
- Imagem em torno de 205px de altura no desktop, adaptável no mobile.
- Título em Playfair Display.
- Categoria/metadado pequeno em uppercase e letter-spacing.
- CTA textual discreto com seta.

### Tabela comparativa
- Container com borda e raio de aproximadamente 10px.
- Cabeçalho em `#F7F9FB`.
- Tipografia de cabeçalho pequena, uppercase e espaçada.
- Linhas separadas por `#E5E9EF`.
- Colunas comerciais e CTA claramente identificáveis.
- Mobile: overflow horizontal controlado; nunca esmagar a tabela.

### Box de recomendação
Usar como bloco editorial, não como selo artificial.
- **Melhor escolha:** pode receber acento de marca.
- **Melhor custo-benefício:** enfatiza equilíbrio de preço e uso quando os dados estiverem verificados.
- **Melhor alternativa:** opção contextual, sem sugerir superioridade absoluta.
- Fundo recomendado `#F4F6F8`, borda `#E1E6EB`, raio 14px.
- Título Playfair Display.
- Prós e contras lado a lado no desktop e empilhados no mobile.

### FAQ
- Pergunta em botão sem borda pesada.
- Divisores finos.
- Resposta aparece abaixo da pergunta.
- Foco de teclado visível.
- FAQ schema deve reproduzir somente perguntas/respostas realmente visíveis.

## 6. Estrutura da Home

### Mapa visual
```text
HEADER
  ↓
HERO
  ├─ eyebrow
  ├─ H1
  ├─ texto de valor
  ├─ CTA
  └─ visual editorial/produto
  ↓
CATEGORIAS
  ├─ Fitness em Casa
  ├─ Ferramentas
  └─ Casa e Utilidades
  ↓
PRODUTOS / GUIAS RECOMENDADOS
  ├─ card
  ├─ card
  └─ card
  ↓
ARTIGOS RECENTES
  ├─ card
  ├─ card
  └─ card
  ↓
COMO AVALIAMOS
  ├─ critérios
  └─ explicação de transparência
  ↓
CTA FINAL
  ↓
FOOTER
```

### Seções
1. **Hero:** posiciona o portal e direciona para a decisão de compra. O visual deve apoiar o assunto da página, sem inventar produto.
2. **Categorias:** três portas de entrada principais: Fitness em Casa, Ferramentas, Casa e Utilidades.
3. **Produtos recomendados:** dados vindos do CMS/DB quando disponíveis e verificados.
4. **Artigos recentes:** conteúdo editorial dinâmico do WordPress.
5. **Como avaliamos:** critérios e transparência.
6. **CTA final:** convite contextual para continuar a pesquisa ou comparar opções, sem urgência artificial.

## 7. Template de artigo

```text
Breadcrumbs
↓
Categoria + data/revisão
↓
H1
↓
Introdução / lead
↓
Imagem destacada
↓
Resumo rápido
↓
Critérios / como escolher
↓
Tabela comparativa
↓
Análises individuais
  ├─ imagem
  ├─ indicação
  ├─ resumo
  ├─ prós
  ├─ contras
  └─ CTA afiliado
↓
Uso no dia a dia / pontos de atenção
↓
FAQ
↓
Conclusão
↓
CTA afiliado/contextual
↓
Conteúdo relacionado
↓
Transparência / fontes
```

O artigo deve usar largura de leitura confortável, H2/H3 semânticos, parágrafos com bastante respiro e tabelas em scroll horizontal no mobile.

## 8. Template de página comercial

Para páginas do tipo **Melhores [produto]**:

1. Breadcrumb.
2. Hero com intenção de compra explícita.
3. Resumo da decisão.
4. Ranking de produtos reais e verificados.
5. Tabela comparativa.
6. Análises individuais.
7. Guia de compra/critério.
8. FAQ.
9. Conclusão.
10. CTA afiliado contextual.
11. Transparência e links relacionados.

Não usar placeholders de modelo na versão publicada.

## 9. Responsividade

### Desktop
- Container até 1160px.
- Hero em duas colunas.
- Categorias e artigos em três colunas.
- Blocos de método/recomendação podem usar duas colunas.
- Header horizontal.

### Tablet
- Container reduzido.
- Grids podem migrar para duas colunas conforme largura.
- Espaçamentos verticais menores.
- Tabelas preservam largura interna com scroll.

### Mobile
- Container com cerca de 16px de margem lateral.
- Header 68px com menu recolhido.
- Hero e blocos em uma coluna.
- H1 reduzido para aproximadamente 35–40px.
- Cards em uma coluna.
- Box de recomendação empilhado.
- Visual decorativo pode ser ocultado quando prejudicar a leitura.
- Tabela com scroll horizontal.
- CTAs devem permanecer confortáveis ao toque.
- Foco visível e ordem de navegação por teclado preservados.

## 10. Imagens e elementos gráficos

### Direção de arte
Imagens devem parecer editoriais e reais, com composição limpa, fundo controlado e foco no produto/assunto. Evitar imagens genéricas de banco quando uma imagem real do produto estiver disponível.

### Proporções
- **Produto:** área horizontal/quadriculada consistente dentro do card; preservar proporção original e não distorcer.
- **Artigo:** aproximadamente 16:9 ou 3:2, conforme fonte.
- **Banner/Hero:** preferir composição ampla 16:9.
- **Thumbnail:** 16:9 para vídeo/conteúdo editorial.

### Formatos
- SVG para logo, ícones e gráficos vetoriais.
- WebP/AVIF para fotos quando a infraestrutura WordPress suportar.
- PNG somente quando transparência ou compatibilidade justificar.

### Tratamento
- Bordas e superfícies discretas.
- Não aplicar filtros pesados.
- ALT descritivo e factual.
- Lazy-load para imagens fora do primeiro viewport.
- Imagem destacada deve ter dimensões adequadas para evitar CLS.

## 11. Exportação para WordPress

| Elemento atual | Implementação WordPress recomendada |
|---|---|
| Header | `header.php` / Template Part ou Elementor Header Builder |
| Menu | WordPress Navigation / Elementor Nav |
| Footer | `footer.php` / Template Part |
| Hero | Gutenberg Pattern/Block ou Elementor Section |
| Card de artigo | Template Part + Loop de Posts/CPT |
| Card de produto | Template Part / bloco reutilizável |
| Tabela comparativa | Gutenberg custom block ou bloco Elementor com dados estruturados |
| Box de recomendação | Pattern/Block reutilizável |
| FAQ | Bloco reutilizável + schema derivado do conteúdo visível |
| CTA afiliado | Template Part + helper de afiliado; Pretty Links opcional |
| Breadcrumb | SEO plugin/tema, preservando schema |
| Artigos | CPT `seo_article` |
| Produtos | CPT `product` quando houver escala/dados reais |
| Comparativos | CPT `comparison` ou estrutura editorial equivalente |
| Categorias | Taxonomias WordPress |
| Imagens | Media Library + ALT |
| Estilos | `theme.json` + CSS do tema |
| Analytics | camada de eventos equivalente ao `opiniaoRealTrack` |

A REST API deve servir como contrato de integração quando o front-end ainda for separado. No tema WordPress final, artigos e páginas SEO devem ser renderizados pelo servidor.

## 12. Regras de uso

### Fazer
- Priorizar legibilidade e hierarquia.
- Manter navy, branco, cinzas e azul editorial como base.
- Usar Playfair Display apenas para criar contraste editorial.
- Manter CTAs claros e discretos.
- Usar imagens reais e ALT descritivo.
- Preservar URLs sempre que possível.
- Manter estados vazios, erro e carregamento compreensíveis.
- Derivar schema de dados visíveis.

### Evitar
- Gradientes chamativos.
- Sombras pesadas.
- Excesso de bordas e badges.
- Contadores ou avaliações inventados.
- Preços, descontos ou especificações não verificados.
- Urgência artificial.
- Keyword stuffing.
- Layout que dependa apenas de JavaScript para SEO.
- Credenciais ou tokens WordPress no JavaScript público.

## 13. Tokens para implementação

```css
:root {
  --or-ink: #0B1F3A;
  --or-blue: #294D75;
  --or-text: #172033;
  --or-muted: #667085;
  --or-line: #E5E9EF;
  --or-soft: #F6F8FB;
  --or-white: #FFFFFF;
  --or-gold: #C98B3C;
  --or-radius-sm: 7px;
  --or-radius-md: 12px;
  --or-radius-lg: 18px;
  --or-container: 1160px;
}
```

## 14. Referências do projeto atual

- `src/styles.css`: base visual, tipografia, cores, header, hero, cards, tabelas e responsividade.
- `public/brand.css`: tokens e identidade de marca.
- `public/brand/opiniao-real-mark.svg`: marca gráfica oficial.
- `public/portal.css`: portal/editorial.
- `public/seo-article.css`: artigos SEO.
- `public/authority.css`: confiança/institucional.
- `public/audience.css`: captura de audiência.
- `public/videos/video.css`: páginas de vídeo.
- `docs/wordpress-component-inventory.md`: inventário de componentes e contratos.
- `docs/wordpress-current-architecture.md`: arquitetura atual e mapa para WordPress.
- `docs/wordpress-migration-content-contract.json`: contrato de dados para REST/CMS.

## 15. Critério de fidelidade

Uma reconstrução WordPress é considerada fiel quando preserva simultaneamente: **hierarquia editorial + paleta + tipografia + espaçamento + componentes + responsividade + acessibilidade + URLs/SEO + regras de transparência**. O WordPress deve substituir a fonte de conteúdo, não descaracterizar a interface.
