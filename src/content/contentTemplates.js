/**
 * Opinião Real — sistema editorial escalável.
 *
 * Estes contratos padronizam o conteúdo antes de sua publicação. Eles não
 * inventam produtos, preços, especificações ou avaliações. Dados comerciais
 * devem entrar somente depois de verificação editorial.
 */

export const CONTENT_TYPES = Object.freeze({
  REVIEW: 'review',
  GUIDE: 'guide',
  COMPARISON: 'comparison'
});

export const REQUIRED_SEO = Object.freeze([
  'slug',
  'metaTitle',
  'metaDescription',
  'h1',
  'canonical',
  'breadcrumbs',
  'schemaType'
]);

export const REVIEW_TEMPLATE = Object.freeze({
  type: CONTENT_TYPES.REVIEW,
  sections: [
    'intro',
    'quickChoices',
    'comparison',
    'individualReviews',
    'howToChoose',
    'faq',
    'conclusion',
    'relatedContent',
    'affiliateDisclosure'
  ],
  quickChoices: [
    'Melhor escolha geral',
    'Melhor custo-benefício',
    'Melhor para iniciantes',
    'Melhor para espaços pequenos'
  ],
  comparisonColumns: [
    'Produto',
    'Melhor para',
    'Principais características',
    'Pontos positivos',
    'Pontos negativos',
    'Indicação'
  ],
  productFields: [
    'name',
    'image',
    'summary',
    'idealFor',
    'pros',
    'cons',
    'editorialVerdict',
    'affiliateUrl'
  ],
  primaryCta: 'Ver preço atualizado'
});

export const GUIDE_TEMPLATE = Object.freeze({
  type: CONTENT_TYPES.GUIDE,
  sections: [
    'intro',
    'explanation',
    'benefits',
    'drawbacks',
    'comparisons',
    'faq',
    'relatedContent'
  ],
  primaryCta: 'Ver produtos recomendados'
});

export const COMPARISON_TEMPLATE = Object.freeze({
  type: CONTENT_TYPES.COMPARISON,
  sections: [
    'intro',
    'directComparison',
    'comparisonTable',
    'advantagesAndDrawbacks',
    'whichToChoose',
    'faq',
    'relatedContent',
    'affiliateDisclosure'
  ],
  comparisonColumns: [
    'Critério',
    'Produto A',
    'Produto B',
    'Veredito'
  ],
  primaryCta: 'Ver preço atualizado'
});

export const CLUSTERS = Object.freeze({
  fitness: {
    name: 'Fitness',
    pillar: '/melhores-bicicletas-spinning',
    articles: [
      '/bicicleta-spinning-vale-a-pena',
      '/bicicleta-spinning-apartamento',
      '/bicicleta-spinning-emagrece',
      '/como-escolher-bicicleta-spinning'
    ]
  },
  esteiras: {
    name: 'Esteiras',
    pillar: '/melhores-esteiras-dobraveis',
    articles: [
      '/esteira-vale-a-pena',
      '/esteira-dobravel-para-apartamento',
      '/esteira-eletrica-ou-mecanica'
    ]
  },
  ferramentas: {
    name: 'Ferramentas',
    pillar: '/melhores-kits-ferramentas',
    articles: [
      '/melhor-parafusadeira',
      '/kit-ferramentas-para-casa',
      '/ferramenta-sem-fio-vale-a-pena'
    ]
  }
});

export const EDITORIAL_CALENDAR_RULES = Object.freeze({
  high: {
    label: 'Prioridade alta',
    criteria: ['intenção de compra', 'ticket potencial', 'comissão potencial']
  },
  medium: {
    label: 'Prioridade média',
    criteria: ['educacional', 'apoio à decisão', 'potencial de descoberta orgânica']
  },
  low: {
    label: 'Prioridade baixa',
    criteria: ['informacional amplo', 'baixa intenção comercial']
  }
});

export const CTA_TRACKING_CONTRACT = Object.freeze({
  event: 'affiliate_click',
  requiredAttributes: [
    'data-affiliate',
    'data-product-id',
    'data-product-name',
    'data-cta-position'
  ]
});

export function createArticleMetadata({
  type,
  slug,
  metaTitle,
  metaDescription,
  h1,
  canonical,
  breadcrumbs,
  schemaType = type === CONTENT_TYPES.REVIEW ? 'Article' : 'Article',
  cluster,
  relatedContent = []
}) {
  return {
    type,
    slug,
    metaTitle,
    metaDescription,
    h1,
    canonical,
    breadcrumbs,
    schemaType,
    cluster,
    relatedContent
  };
}

export function validateArticleMetadata(article) {
  const missing = REQUIRED_SEO.filter(field => !article?.[field]);
  if (!Array.isArray(article?.breadcrumbs) || article.breadcrumbs.length < 2) {
    missing.push('breadcrumbs');
  }
  if (!Object.values(CONTENT_TYPES).includes(article?.type)) {
    missing.push('type');
  }
  return { valid: missing.length === 0, missing: [...new Set(missing)] };
}

export function buildAffiliateAttributes({ productId, productName, position }) {
  if (!productId || !productName || !position) {
    throw new Error('Links de afiliado exigem produto e posição de CTA identificáveis.');
  }
  return {
    'data-affiliate': 'true',
    'data-product-id': productId,
    'data-product-name': productName,
    'data-cta-position': position
  };
}
