# Responsividade

## Desktop

- Container até ~1160px.
- Header 76px.
- Hero e blocos de decisão em duas colunas.
- Categorias/artigos em 3 colunas.
- Footer em 4 colunas.
- Tabelas preservam largura mínima.

## Tablet / telas até 850px

- Container passa para `100% - 32px`.
- Header 68px.
- Menu vira painel mobile.
- Hero, método e blocos amplos passam a uma coluna.
- Categorias e artigos passam a uma coluna.
- Footer passa a duas colunas.
- Tabelas continuam roláveis.

## Mobile até 480px

- H1 Home ~38px; H1 de páginas ~35px.
- Lead ~16px.
- Hero visual ~275px.
- Footer em uma coluna.
- CTAs podem quebrar linha.
- Grids de prós/contras tornam-se uma coluna.
- Imagens e superfícies ocupam a largura disponível sem overflow.

## Estados críticos

Menu: botão acessível, aberto/fechado e área de navegação legível.

Cards: hover apenas em ponteiros; conteúdo continua acessível sem hover.

Tabelas: rolagem horizontal, nunca compressão ilegível.

Imagens: `max-width: 100%`, proporção preservada e ALT.

Foco: anel visível em inputs e controles.

A referência atual de CSS define os breakpoints em `850px` e `480px` e os comportamentos correspondentes. fileciteturn639file0L2-L2