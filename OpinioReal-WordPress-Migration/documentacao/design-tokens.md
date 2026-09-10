# Design Tokens Opinião Real

Valores consolidados a partir dos estilos existentes. O objetivo é transportar o design atual, não criar outro.

## Cores

| Elemento | Valor | Uso |
|---|---|---|
| Primary / Navy | `#0B1F3A` | header, títulos, CTA primário, superfícies escuras |
| Editorial Blue | `#294D75` | links, interação, destaque editorial |
| White | `#FFFFFF` | fundo e cards |
| Soft | `#F6F8FB` | seções de respiro |
| Text | `#172033` | texto principal |
| Muted | `#667085` | texto secundário |
| Line | `#E5E9EF` | bordas/divisórias |
| Gold | `#C98B3C` | detalhe de marca/check, uso pontual |
| Focus | `#597798` | foco de campos |

## Tipografia

| Elemento | Família | Peso | Tamanho de referência |
|---|---|---:|---:|
| H1 Home | Playfair Display / Georgia | 600–700 | 58px desktop; 45px tablet; 38px mobile |
| H1 artigo | Playfair Display / Georgia | 600–700 | 52px desktop; 40px tablet; 35px mobile |
| H2 | Playfair Display / Georgia | 600–700 | 35px; artigos 29px |
| H3 | DM Sans | 600–700 | 16–22px conforme componente |
| Corpo | DM Sans / system-ui | 400 | 14–18px conforme contexto |
| Menu | DM Sans | 400–600 | ~14px |
| CTA | DM Sans | 600 | ~14–16px |
| Eyebrow | DM Sans | 700 | 10–11px, letter-spacing 1.1–1.7px |

## Espaçamento e layout

- Container principal: `min(1160px, 100% - 48px)`.
- Container estreito: `min(820px, 100% - 48px)`.
- Header desktop: 76px; mobile: 68px.
- Seções: ~88px vertical; mobile ~65px.
- Grid de categorias/artigos: 3 colunas desktop, 1 coluna até 850px.
- Grid de conteúdo dividido: normalmente 1.04fr/0.96fr ou variações próximas conforme a seção.
- Gaps recorrentes: 18–30px em cards; 45–90px em composições amplas.

## Bordas e superfícies

- Border base: `1px solid #E5E9EF`.
- Radius de cards: 12px.
- Radius de elementos maiores: 14–18px.
- Botão primário: radius 7px.
- Campos: radius 7px.
- Superfícies: branco; seções agrupadas `#F6F8FB`.

## Sombras

- CTA: `0 5px 15px #0B1F3A18`.
- CTA hover: `0 8px 20px #0B1F3A25`.
- Cards hover: aproximadamente `0 12px 30px #1720330D`.
- Score/painéis: `0 8px 24px #17203314`.

## Transições e estados

- Transição padrão de interação: ~`0.2s`.
- Hover de cards: `translateY(-3px)` + sombra discreta.
- Hover CTA: `translateY(-1px)` + sombra maior.
- Active: reforçar cor/weight sem deslocamento perceptível.
- Focus: borda `#597798` + anel de foco de baixa opacidade.
- Disabled: usar estado nativo do componente com contraste suficiente; não inventar estilo fora da linguagem existente.

## Referências

`src/styles.css` é a fonte principal dos tokens e estados; `docs/brand-guidelines.md` define a identidade editorial. fileciteturn639file0L2-L2