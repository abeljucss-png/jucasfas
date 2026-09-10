/* WordPress integration: public read-only configuration. Never place credentials here. */
window.OPINIA_REAL_WORDPRESS = Object.assign({
  enabled: false,
  baseUrl: '',
  apiNamespace: 'wp/v2',
  articlePostType: 'seo_article',
  categoryTaxonomy: 'category',
  productPostType: 'product',
  comparisonPostType: 'comparison',
  timeoutMs: 8000
}, window.OPINIA_REAL_WORDPRESS || {});
