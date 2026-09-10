import React from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { buildAffiliateAttributes, CONTENT_TYPES } from './contentTemplates';

/**
 * Blocos visuais reutilizáveis para novos artigos.
 * O conteúdo é fornecido pelo artigo; estes componentes não criam dados comerciais.
 */
export function RelatedContent({ items = [], title = 'Veja também' }) {
  if (!items.length) return null;
  return <section className="contentTemplateRelated" aria-labelledby="related-content-title">
    <p className="eyebrow">CONTINUE LENDO</p>
    <h2 id="related-content-title">{title}</h2>
    <div className="contentTemplateRelatedGrid">
      {items.map(item => <a key={item.href} href={item.href}>
        <span>{item.category || 'Guia'}</span>
        <strong>{item.title}</strong>
        <ArrowRight size={16} aria-hidden="true" />
      </a>)}
    </div>
  </section>;
}

export function TrustBlock({ items = [
  'Pesquisa de características',
  'Comparação de modelos',
  'Análise de avaliações de consumidores',
  'Custo-benefício'
] }) {
  return <section className="contentTemplateTrust" aria-labelledby="trust-title">
    <div><p className="eyebrow">COMO ANALISAMOS</p><h2 id="trust-title">Critérios editoriais</h2><p>Usamos informações verificáveis e deixamos claras as limitações da análise. Não inventamos testes, avaliações ou resultados.</p></div>
    <div>{items.map(item => <div key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></div>)}</div>
  </section>;
}

export function AffiliateCta({ href, productId, productName, position, children = 'Ver preço atualizado' }) {
  const attrs = buildAffiliateAttributes({ productId, productName, position });
  return <a className="primary contentTemplateCta" href={href} target="_blank" rel="noopener noreferrer sponsored" {...attrs}>{children}<ExternalLink size={16} aria-hidden="true" /></a>;
}

export function ReviewProductCard({ product, position }) {
  return <article className="contentTemplateProduct">
    <div className="contentTemplateProductImage">
      <img src={product.image.src} alt={product.image.alt} loading="lazy" />
    </div>
    <div>
      <p className="eyebrow">PRODUTO RECOMENDADO</p>
      <h3>{product.name}</h3>
      <p>{product.summary}</p>
      <p><strong>Ideal para:</strong> {product.idealFor}</p>
      <div className="contentTemplateProsCons">
        <div><strong>Pontos positivos</strong>{product.pros.map(item => <span key={item}>+ {item}</span>)}</div>
        <div><strong>Pontos negativos</strong>{product.cons.map(item => <span key={item}>− {item}</span>)}</div>
      </div>
      <p><strong>Nossa avaliação:</strong> {product.editorialVerdict}</p>
      <AffiliateCta href={product.affiliateUrl} productId={product.id} productName={product.name} position={position} />
    </div>
  </article>;
}

export function ReviewArticle({ article }) {
  if (article.type !== CONTENT_TYPES.REVIEW) throw new Error('ReviewArticle exige um conteúdo do tipo review.');
  return <article className="contentTemplateArticle">
    <header><p className="eyebrow">REVIEW DE PRODUTO</p><h1>{article.h1}</h1><p className="contentTemplateIntro">{article.intro}</p></header>
    <section className="contentTemplateChoices"><h2>Melhores escolhas</h2><div>{article.quickChoices.map(choice => <div key={choice.label}><strong>{choice.label}</strong><span>{choice.product}</span><p>{choice.summary}</p></div>)}</div></section>
    <TrustBlock />
    <section><h2>Comparativo</h2><div className="contentTemplateTableWrap"><table><thead><tr>{article.comparison.columns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{article.comparison.rows.map(row => <tr key={row.id}>{article.comparison.columns.map(column => <td key={column}>{row[column]}</td>)}</tr>)}</tbody></table></div></section>
    <section><h2>Análise individual</h2>{article.products.map((product, index) => <ReviewProductCard key={product.id} product={product} position={`review-${index + 1}`} />)}</section>
    <section><h2>Como escolher</h2>{article.howToChoose.map(item => <div className="contentTemplateCriterion" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</section>
    <RelatedContent items={article.relatedContent} />
  </article>;
}

export function GuideArticle({ article }) {
  if (article.type !== CONTENT_TYPES.GUIDE) throw new Error('GuideArticle exige um conteúdo do tipo guide.');
  return <article className="contentTemplateArticle"><header><p className="eyebrow">GUIA INFORMATIVO</p><h1>{article.h1}</h1><p className="contentTemplateIntro">{article.intro}</p></header>{article.sections.map(section => <section key={section.title}><h2>{section.title}</h2><div dangerouslySetInnerHTML={{ __html: section.html }} /></section>)}<RelatedContent items={article.relatedContent} /></article>;
}

export function ComparisonArticle({ article }) {
  if (article.type !== CONTENT_TYPES.COMPARISON) throw new Error('ComparisonArticle exige um conteúdo do tipo comparison.');
  return <article className="contentTemplateArticle"><header><p className="eyebrow">COMPARAÇÃO DIRETA</p><h1>{article.h1}</h1><p className="contentTemplateIntro">{article.intro}</p></header><section><h2>Comparação direta</h2><div className="contentTemplateTableWrap"><table><thead><tr>{article.comparison.columns.map(column => <th key={column}>{column}</th>)}</tr></thead><tbody>{article.comparison.rows.map(row => <tr key={row.id}>{article.comparison.columns.map(column => <td key={column}>{row[column]}</td>)}</tr>)}</tbody></table></div></section><section><h2>Qual escolher?</h2><p>{article.verdict}</p></section><RelatedContent items={article.relatedContent} /></article>;
}
