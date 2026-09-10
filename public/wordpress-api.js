/* Read-only WordPress REST client. Writes/authentication belong on a trusted server. */
(function () {
  'use strict';
  if (window.opiniaoRealWordPress) return;

  const defaults = {
    enabled: false,
    baseUrl: '',
    apiNamespace: 'wp/v2',
    articlePostType: 'seo_article',
    categoryTaxonomy: 'category',
    productPostType: 'product',
    comparisonPostType: 'comparison',
    timeoutMs: 8000
  };

  function config() {
    return Object.assign({}, defaults, window.OPINIA_REAL_WORDPRESS || {});
  }

  function apiRoot() {
    const c = config();
    if (!c.enabled || !c.baseUrl) return '';
    return `${String(c.baseUrl).replace(/\/+$/, '')}/wp-json/${c.apiNamespace}`;
  }

  async function request(path, params = {}) {
    const root = apiRoot();
    if (!root) return null;
    const url = new URL(`${root}/${String(path).replace(/^\/+/, '')}`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') url.searchParams.set(key, String(value));
    });
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), config().timeoutMs);
    try {
      const response = await fetch(url.toString(), { headers: { Accept: 'application/json' }, signal: controller.signal });
      if (!response.ok) throw new Error(`WordPress REST ${response.status}`);
      return await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  function normalizePost(post) {
    if (!post) return null;
    return {
      id: post.id,
      slug: post.slug,
      title: post.title?.rendered || '',
      excerpt: post.excerpt?.rendered || '',
      content: post.content?.rendered || '',
      link: post.link || '',
      date: post.date || null,
      modified: post.modified || null,
      featuredMedia: post.featured_media || 0,
      raw: post
    };
  }

  window.opiniaoRealWordPress = {
    isEnabled: () => Boolean(apiRoot()),
    getConfig: () => config(),
    listArticles: async (params = {}) => {
      const c = config();
      const data = await request(c.articlePostType, Object.assign({ per_page: 10, status: 'publish' }, params));
      return Array.isArray(data) ? data.map(normalizePost) : [];
    },
    getArticle: async (slug) => {
      if (!slug) return null;
      const c = config();
      const data = await request(c.articlePostType, { slug, status: 'publish' });
      return Array.isArray(data) && data[0] ? normalizePost(data[0]) : null;
    },
    listCategories: async (params = {}) => {
      const c = config();
      const data = await request(c.categoryTaxonomy, Object.assign({ per_page: 100 }, params));
      return Array.isArray(data) ? data : [];
    },
    listProducts: async (params = {}) => {
      const c = config();
      const data = await request(c.productPostType, Object.assign({ per_page: 20, status: 'publish' }, params));
      return Array.isArray(data) ? data.map(normalizePost) : [];
    },
    listComparisons: async (params = {}) => {
      const c = config();
      const data = await request(c.comparisonPostType, Object.assign({ per_page: 20, status: 'publish' }, params));
      return Array.isArray(data) ? data.map(normalizePost) : [];
    }
  };
})();
