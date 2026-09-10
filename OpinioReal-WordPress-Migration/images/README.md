# Images

Catálogo de referência para a migração. Os arquivos originais permanecem em `public/` para evitar duplicação desnecessária.

| Categoria | Arquivo/origem | Formato | Dimensão | Uso |
|---|---|---|---|---|
| Logo | `public/brand/opiniao-real-mark.svg` | SVG | viewBox 64×64 | Header, favicon, avatar/pequenos espaços |
| Vídeo | `public/videos/thumb-*.svg` | SVG | definida no SVG | thumbnails editoriais de vídeo |
| Produto | imagens reais a obter/conferir | PNG/JPG/WebP | registrar dimensão real | cards, reviews, comparativos |
| Banners | conforme inventário em `public/` | SVG/PNG/JPG | registrar dimensão real | somente onde já houver uso |
| Fundo | superfícies CSS atuais | CSS | n/a | backgrounds e seções |
| Ilustrações | assets existentes em `public/` | SVG/PNG | registrar dimensão real | seções específicas |

**Importante:** não converter placeholders de produto em fotografias. O logo oficial é um SVG 64×64 e usa `#0B1F3A`, branco e `#C98B3C`. fileciteturn642file0L2-L2

## Regra para WordPress

1. Fazer upload na Media Library.
2. Preservar nomes estáveis quando possível.
3. Preencher ALT editorial.
4. Preferir WebP/AVIF para fotos quando a qualidade permitir.
5. Manter SVG apenas para assets confiáveis/necessários.
6. Não usar imagens genéricas para simular produto real.