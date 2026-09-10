import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * Standard commercial CTA. Keep product/category/position explicit so
 * analytics can attribute affiliate clicks without inventing product data.
 */
export default function AffiliateButton({ href, children = 'Ver preço atualizado', productId = '', productName = '', category = '', position = 'unknown', className = 'primary' }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-affiliate="true"
      data-product-id={productId}
      data-product-name={productName}
      data-category={category}
      data-cta-position={position}
    >
      {children}
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  );
}
