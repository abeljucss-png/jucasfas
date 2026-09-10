# CSS export map

Não alterar os CSS atuais. Na reconstrução, consolidar somente os seletores necessários no tema.

| Fonte | Papel |
|---|---|
| `src/styles.css` | layout e interface global |
| `src/spinning.css` | cluster spinning |
| `public/portal.css` | portal/categorias |
| `public/seo-article.css` | artigos SEO |
| `public/authority.css` | autoridade e confiança |
| `public/audience.css` | captura de audiência |
| `public/brand.css` | identidade |
| `public/videos/video.css` | vídeo |
| `wordpress-theme/opiniao-real/style.css` | referência de tema WP já preparada |

## Estratégia

1. Copiar tokens.
2. Reproduzir layout base.
3. Migrar componentes por grupo.
4. Preservar breakpoints 850px/480px.
5. Remover apenas dependências de markup React depois de confirmar equivalência no PHP/Elementor.
6. Não introduzir framework CSS pesado sem necessidade.