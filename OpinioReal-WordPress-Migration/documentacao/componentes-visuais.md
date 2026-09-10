# Componentes visuais

## Header / Navigation

- Altura: 76px desktop, 68px mobile.
- Fundo branco translúcido, borda inferior e blur no desktop.
- Marca: símbolo OR + nome Opinião Real.
- Menu desktop horizontal com gap aproximado de 30px.
- Mobile: menu colapsado em painel vertical abaixo do header.
- Estado ativo: Navy + peso 600; hover muda para Navy.

**WordPress:** `header.php` + template part de navegação. **Elementor:** Theme Builder Header.

## Footer

- Fundo branco, borda superior.
- Grid de 4 colunas no desktop; 2 em tablet; 1 em telas estreitas.
- Marca/descrição, navegação editorial, institucional e suporte/links.
- Copyright separado por linha superior.

**WordPress:** `footer.php` + template parts. **Elementor:** Theme Builder Footer.

## Hero

- Grid de duas colunas no desktop; uma no mobile.
- Eyebrow curto, H1 serifado, lead e CTA.
- Visual lateral com superfície clara, borda e raio 18px.
- Não substituir por banner promocional genérico.

## Card de categoria

- Card branco, borda `#E5E9EF`, radius 12px.
- Padding ~29px.
- Número/eyebrow, título e lista de subtemas.
- Hover: elevação curta e sombra discreta.

## Card de artigo

- Imagem/área visual superior ~205px.
- Corpo ~23px.
- Categoria pequena, título Playfair, resumo e link textual.
- Grade de 3 colunas desktop e 1 coluna mobile.

## Card de produto

Hierarquia: imagem → posição/indicação → nome → resumo → mini especificações → prós → contras → CTA.

Regra: não publicar preço, especificação, nota, avaliação, disponibilidade ou teste sem dado verificável.

CTA comercial deve usar URL real e `rel="sponsored noopener noreferrer"`.

## Quick Choice / Resumo rápido

Bloco de decisão com rótulos como Melhor escolha geral, Melhor custo-benefício, Melhor para iniciantes e Melhor para apartamento. Só usar recomendações quando houver evidência editorial suficiente.

## Trust / Como avaliamos

Superfície escura Navy, título claro e lista de critérios. Reforça comparação, avaliações pesquisadas, custo-benefício e pontos positivos/negativos, sem criar números artificiais.

## Tabela comparativa

- Container com borda e radius.
- Cabeçalho em fundo suave.
- Texto compacto.
- `min-width` para preservar leitura.
- Em mobile, rolagem horizontal; nunca quebrar colunas para caber à força.

**Elementor:** tabela HTML/Widget de tabela ou TablePress quando a manutenção editorial exigir. Manter a mesma estrutura visual.

## Pros / Cons

Duas colunas em desktop, uma no mobile. Rótulos claros e conteúdo curto. Não usar estrelas ou notas sem metodologia/dados.

## Guia de compra

Bloco de critérios numerados, com títulos curtos e explicações. Deve responder à intenção de compra antes de empurrar para afiliado.

## FAQ

Acordeão acessível: botão ocupa a largura, pergunta visível e resposta expandida. O schema deve ser derivado das mesmas perguntas/respostas visíveis.

## CTA

Exemplos aprovados pelo design editorial:
- `Ver preço atualizado`
- `Confira a oferta`
- `Veja a análise completa`

Evitar urgência artificial e linguagem de liquidação.

## Breadcrumbs

Linha curta acima do título, com hierarquia Início → Categoria → Página. No WordPress, preferir breadcrumbs do Rank Math quando disponíveis e fallback do tema.

## Requisitos de acessibilidade

HTML semântico, foco visível, contraste adequado, alt textual em imagens, alvos de toque confortáveis, tabelas roláveis e navegação por teclado. Ícones decorativos não devem competir com o texto.