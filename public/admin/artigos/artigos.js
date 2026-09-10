(() => {
  'use strict';

  const KEY = 'opiniao_real_cms_articles_v1';
  const STATUS = { draft: 'Rascunho', review: 'Em revisão', published: 'Publicado' };
  const TYPE = { review: 'Review', guide: 'Guia', comparison: 'Comparativo' };
  const $ = (id) => document.getElementById(id);
  const fields = ['title','slug','type','category','status','publishDate','metaTitle','metaDescription','primaryKeyword','secondaryKeywords','canonical','imageAlt','h1','intro','quickSummary','howToChoose','body','dailyUse','conclusion','comparison','products','faq','relatedContent','sources','affiliateDisclosure'];
  let articles = load();
  let activeId = null;

  function load() {
    try { const data = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(data) ? data : []; }
    catch { return []; }
  }
  function persist() {
    localStorage.setItem(KEY, JSON.stringify(articles));
    $('saveState').textContent = 'Salvo localmente';
    render();
  }
  function blank() {
    return { id: crypto?.randomUUID?.() || `art-${Date.now()}`, title:'', slug:'', type:'review', category:'Fitness em Casa', status:'draft', publishDate:'', metaTitle:'', metaDescription:'', primaryKeyword:'', secondaryKeywords:'', canonical:'', imageAlt:'', h1:'', intro:'', quickSummary:'', howToChoose:'', body:'', dailyUse:'', conclusion:'', comparison:'', products:'', faq:'', relatedContent:'', sources:'', affiliateDisclosure:'', updatedAt:new Date().toISOString() };
  }
  function esc(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function slugify(value) { return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,100); }
  function collect() {
    const article = { id: $('articleId').value || blank().id };
    fields.forEach(id => article[id] = $(id).value.trim());
    article.updatedAt = new Date().toISOString();
    return article;
  }
  function fill(article) {
    fields.forEach(id => { $(id).value = article[id] || ''; });
    $('articleId').value = article.id;
    activeId = article.id;
    $('editorTitle').textContent = article.title || 'Novo artigo';
    $('duplicateArticle').disabled = false;
    $('deleteArticle').disabled = false;
    validate(article);
    renderList();
  }
  function newArticle() {
    const article = blank();
    fill(article);
    $('articleId').value = article.id;
    $('editorTitle').textContent = 'Novo artigo';
    $('title').focus();
  }
  function save(event) {
    event.preventDefault();
    const article = collect();
    const check = validate(article);
    if (check.errors.length) { $('validation').className = 'validation error'; $('validation').textContent = check.errors.join(' · '); return; }
    const index = articles.findIndex(a => a.id === article.id);
    if (index >= 0) articles[index] = article; else articles.unshift(article);
    activeId = article.id;
    persist();
    fill(article);
    $('validation').className = 'validation ok';
    $('validation').textContent = 'Artigo salvo. O conteúdo permanece como dado editorial até ser conectado ao publicador.';
  }
  function validate(article) {
    const errors = [];
    const warnings = [];
    if (!article.title) errors.push('Título obrigatório');
    if (!article.slug) errors.push('Slug obrigatório');
    if (!article.primaryKeyword) errors.push('Palavra-chave principal obrigatória');
    if (!article.h1) warnings.push('H1 ainda não definido');
    if (!article.metaTitle) warnings.push('Meta title ainda não definido');
    if (!article.metaDescription) warnings.push('Meta description ainda não definida');
    if (!article.intro) warnings.push('Introdução vazia');
    if (!article.body) warnings.push('Conteúdo principal vazio');
    if (article.metaTitle.length > 60) warnings.push('Meta title acima de 60 caracteres');
    if (article.metaDescription.length > 160) warnings.push('Meta description acima de 160 caracteres');
    if (article.status === 'published' && (!article.sources || !article.affiliateDisclosure)) warnings.push('Publicação deve ter fontes e transparência editorial conferidas');
    const message = errors.length ? errors.join(' · ') : warnings.length ? `Pode salvar, mas revise: ${warnings.join(' · ')}` : 'Estrutura SEO mínima preenchida.';
    $('validation').className = errors.length ? 'validation error' : warnings.length ? 'validation warn' : 'validation ok';
    $('validation').textContent = message;
    return { errors, warnings };
  }
  function render() { renderStats(); renderList(); }
  function renderStats() {
    $('statTotal').textContent = articles.length;
    $('statDraft').textContent = articles.filter(a => a.status === 'draft').length;
    $('statReview').textContent = articles.filter(a => a.status === 'review').length;
    $('statPublished').textContent = articles.filter(a => a.status === 'published').length;
  }
  function renderList() {
    const query = $('articleSearch').value.toLowerCase().trim();
    const status = $('statusFilter').value;
    const type = $('typeFilter').value;
    const list = articles.filter(a => (status === 'all' || a.status === status) && (type === 'all' || a.type === type) && `${a.title} ${a.slug} ${a.primaryKeyword}`.toLowerCase().includes(query));
    $('articleList').innerHTML = list.length ? list.map(a => `<button class="articleItem ${a.id === activeId ? 'active' : ''}" type="button" data-id="${esc(a.id)}"><strong>${esc(a.title || 'Sem título')}</strong><small>/${esc(a.slug || 'sem-slug')}</small><span class="status">${esc(STATUS[a.status] || a.status)} · ${esc(TYPE[a.type] || a.type)}</span></button>`).join('') : '<div class="empty">Nenhum artigo encontrado.<br>Comece por criar um novo artigo.</div>';
    document.querySelectorAll('.articleItem').forEach(button => button.addEventListener('click', () => { const article = articles.find(a => a.id === button.dataset.id); if (article) fill(article); }));
  }
  function duplicate() {
    const source = articles.find(a => a.id === activeId) || collect();
    const copy = {...source, id: crypto?.randomUUID?.() || `art-${Date.now()}-${Math.random()}`, title: source.title ? `${source.title} — cópia` : '', slug: source.slug ? `${source.slug}-copia` : '', status:'draft', publishDate:'', updatedAt:new Date().toISOString()};
    articles.unshift(copy); activeId = copy.id; persist(); fill(copy);
  }
  function remove() {
    if (!activeId) return;
    const article = articles.find(a => a.id === activeId);
    if (!article || !window.confirm(`Excluir “${article.title || 'este artigo'}”?`)) return;
    articles = articles.filter(a => a.id !== activeId); activeId = null; persist(); newArticle();
  }
  function exportJson() {
    const article = collect();
    const blob = new Blob([JSON.stringify(article, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = `${article.slug || 'artigo-seo'}.json`; link.click(); URL.revokeObjectURL(url);
  }
  $('articleForm').addEventListener('submit', save);
  $('newArticle').addEventListener('click', newArticle);
  $('duplicateArticle').addEventListener('click', duplicate);
  $('deleteArticle').addEventListener('click', remove);
  $('exportArticle').addEventListener('click', exportJson);
  $('articleSearch').addEventListener('input', renderList);
  $('statusFilter').addEventListener('change', renderList);
  $('typeFilter').addEventListener('change', renderList);
  $('title').addEventListener('input', () => { if (!$('slug').value || activeId === $('articleId').value && !articles.find(a => a.id === activeId)?.slug) $('slug').value = slugify($('title').value); if (!$('h1').value) $('h1').value = $('title').value; $('editorTitle').textContent = $('title').value || 'Novo artigo'; });
  $('slug').addEventListener('blur', () => $('slug').value = slugify($('slug').value));
  fields.forEach(id => $(id).addEventListener('input', () => validate(collect())));

  render();
  if (articles.length) fill(articles[0]); else newArticle();
})();
