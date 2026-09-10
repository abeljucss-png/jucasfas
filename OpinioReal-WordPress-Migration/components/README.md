# Components

Estrutura-alvo para reconstrução, sem alterar o projeto atual:

```text
components/
├── layout/
│   ├── header
│   ├── navigation
│   ├── breadcrumbs
│   └── footer
├── editorial/
│   ├── hero
│   ├── article-card
│   ├── quick-choice
│   ├── trust-block
│   ├── related-content
│   └── faq
├── commerce/
│   ├── product-card
│   ├── comparison-table
│   ├── pros-cons
│   ├── recommendation
│   └── affiliate-cta
└── content/
    ├── buying-guide
    ├── sources
    └── disclosure
```

No WordPress, cada item deve virar template-part PHP, bloco Gutenberg ou componente Elementor reutilizável conforme a necessidade. Não copiar estado React desnecessário para o CMS.