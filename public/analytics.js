(function () {
  'use strict';
  var config = window.OPINIA_REAL_ANALYTICS || {};
  var dataLayer = window.dataLayer = window.dataLayer || [];
  var pageStart = Date.now();
  function push(event, params) {
    var payload = Object.assign({ event: event }, params || {});
    dataLayer.push(payload);
    if (config.debug && window.console) console.debug('[Opinião Real analytics]', payload);
    if (typeof window.gtag === 'function' && event !== 'gtm_ready') {
      var copy = Object.assign({}, payload); delete copy.event;
      window.gtag('event', event, copy);
    }
    try {
      var stored = JSON.parse(localStorage.getItem('opiniao_real_events') || '[]');
      stored.push({ event: event, timestamp: new Date().toISOString(), page: window.location.pathname });
      localStorage.setItem('opiniao_real_events', JSON.stringify(stored.slice(-100)));
    } catch (_) {}
  }
  window.opiniaoRealTrack = push;
  window.opiniaoRealAnalytics = { track: push, getCampaign: function () { return campaign; } };

  var params = new URLSearchParams(window.location.search);
  var campaignKeys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid'];
  var campaign = {};
  campaignKeys.forEach(function (key) { var value = params.get(key); if (value) campaign[key] = value; });
  if (Object.keys(campaign).length) { try { sessionStorage.setItem('opiniao_real_campaign', JSON.stringify(campaign)); } catch (_) {} }
  else { try { campaign = JSON.parse(sessionStorage.getItem('opiniao_real_campaign') || '{}'); } catch (_) { campaign = {}; } }

  function loadGtag(id) {
    if (!id || document.querySelector('script[data-opiniao-ga4]')) return;
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id); s.dataset.opiniaoGa4 = 'true'; document.head.appendChild(s);
    window.gtag = window.gtag || function () { dataLayer.push(arguments); };
    window.gtag('js', new Date()); window.gtag('config', id, { send_page_view: false, allow_google_signals: true });
  }
  function loadGtm(id) {
    if (!id || document.querySelector('script[data-opiniao-gtm]')) return;
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(id); s.dataset.opiniaoGtm = 'true'; document.head.appendChild(s);
    dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); push('gtm_ready', { gtm_container_id: id });
  }
  loadGtm(config.gtmContainerId); loadGtag(config.ga4MeasurementId);

  function pageContext() { return Object.assign({ page_location: window.location.href, page_path: window.location.pathname, page_title: document.title }, campaign); }
  push('page_view', pageContext());

  var lastScroll = 0, milestones = [25, 50, 75, 90], sent = {};
  function scrollDepth() {
    var doc = document.documentElement, max = Math.max(doc.scrollHeight - window.innerHeight, 1), percent = Math.round((window.scrollY / max) * 100);
    if (percent <= lastScroll) return; lastScroll = percent;
    milestones.forEach(function (mark) { if (percent >= mark && !sent[mark]) { sent[mark] = true; push('scroll_depth', Object.assign({ depth_percent: mark }, pageContext())); } });
  }
  window.addEventListener('scroll', scrollDepth, { passive: true });

  function closestProduct(el) {
    var root = el.closest('[data-product-id], .detailProduct, .productCard, article');
    var title = root && root.querySelector('h1,h2,h3,h4');
    return { product_id: root && root.dataset.productId || '', product_name: root && root.dataset.productName || title && title.textContent.trim() || '' };
  }
  document.addEventListener('click', function (event) {
    var el = event.target.closest('a,button,summary'); if (!el) return;
    if (el.matches('[data-affiliate], a[href*="mercadolivre.com"], a[href*="amazon."]')) {
      var product = closestProduct(el), card = el.closest('[data-cta-position], .productCard, .detailProduct, .comparisonSection, .hero, .buyingGuide');
      var position = el.dataset.ctaPosition || card && card.dataset.ctaPosition || card && card.className.split(' ')[0] || 'unknown';
      push('affiliate_click', Object.assign({ category: el.dataset.category || document.body.dataset.category || 'unknown', page: window.location.pathname, button_position: position, destination_url: el.href || '', link_text: el.textContent.trim() }, product));
    }
    if (el.matches('summary, [data-faq], .faqItem button')) {
      var faq = el.closest('details, [data-faq], .faqItem'), question = faq && (faq.querySelector('summary') || faq.querySelector('button'));
      push('faq_interaction', { question: question ? question.textContent.trim() : el.textContent.trim(), page: window.location.pathname });
    }
  }, true);

  var viewed = new WeakSet();
  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || viewed.has(entry.target)) return;
      viewed.add(entry.target); var el = entry.target;
      if (el.matches('[data-product-view], .detailProduct, .productCard')) push('product_view', Object.assign({ page: window.location.pathname }, closestProduct(el)));
      if (el.matches('[data-comparison-view], .comparisonSection')) push('comparison_view', { page: window.location.pathname, section: el.dataset.section || 'comparison' });
    });
  }, { threshold: 0.35 }) : null;
  function scanTrackedElements() {
    if (!observer) return;
    document.querySelectorAll('[data-product-view], .detailProduct, .productCard, [data-comparison-view], .comparisonSection').forEach(function (el) { observer.observe(el); });
  }
  scanTrackedElements();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scanTrackedElements);
  if ('MutationObserver' in window) new MutationObserver(scanTrackedElements).observe(document.documentElement, { childList: true, subtree: true });

  function experiment() {
    var requested = (params.get('ab_variant') || '').toLowerCase(), stored = '';
    try { stored = sessionStorage.getItem('opiniao_real_ab_variant') || ''; } catch (_) {}
    var variant = requested === 'a' || requested === 'b' ? requested : (stored === 'a' || stored === 'b' ? stored : 'a');
    try { sessionStorage.setItem('opiniao_real_ab_variant', variant); } catch (_) {}
    document.documentElement.dataset.abVariant = variant;
    document.querySelectorAll('[data-ab-test]').forEach(function (el) { if (el.dataset.abVariant) el.hidden = el.dataset.abVariant !== variant; });
    document.querySelectorAll('[data-ab-test]').forEach(function (el) { if (el.dataset.abVariant === variant && !el.dataset.abTracked) { el.dataset.abTracked = 'true'; push('experiment_exposure', { experiment: el.dataset.abTest, variant: variant, page: window.location.pathname }); } });
  }
  experiment();
  window.addEventListener('beforeunload', function () { push('engagement_time', Object.assign({ engagement_time_ms: Date.now() - pageStart }, pageContext())); });
  var originalPushState = history.pushState, originalReplaceState = history.replaceState;
  function routeChanged() { setTimeout(function () { push('page_view', pageContext()); scanTrackedElements(); experiment(); }, 0); }
  history.pushState = function () { var result = originalPushState.apply(this, arguments); routeChanged(); return result; };
  history.replaceState = function () { var result = originalReplaceState.apply(this, arguments); routeChanged(); return result; };
  window.addEventListener('popstate', routeChanged);
})();
