<?php get_header(); ?>
<?php while(have_posts()): the_post(); $content=get_post_field('post_content',get_the_ID()); $affiliate=or_meta('or_affiliate_url'); $fallback=or_meta('or_pillar_url') ?: home_url('/comparativos/'); ?>
<article class="or-article"><div class="or-container"><header class="or-article-header"><?php or_breadcrumbs(); ?><p class="or-eyebrow"><?php $terms=get_the_terms(get_the_ID(),'topic'); echo $terms && !is_wp_error($terms) ? esc_html($terms[0]->name) : 'Análise e guia'; ?></p><h1><?php the_title(); ?></h1><div class="or-meta">Publicado em <?php echo esc_html(get_the_date()); ?> · Atualizado em <?php echo esc_html(get_the_modified_date()); ?> · Equipe Opinião Real</div><?php if(has_post_thumbnail()): ?><div class="or-featured"><?php the_post_thumbnail('full',array('loading'=>'eager')); ?></div><?php endif; ?></header>
<div class="or-content"><?php the_content(); ?><aside class="or-summary or-article-cta" aria-label="Próximo passo"><p class="or-eyebrow">Próximo passo</p><h2>Veja os modelos recomendados</h2><p>Compare opções relacionadas antes de decidir.</p><a class="or-btn or-btn-primary" href="<?php echo esc_url($affiliate ?: $fallback); ?>"<?php echo $affiliate ? ' rel="sponsored noopener noreferrer" target="_blank"' : ''; ?>><?php echo $affiliate ? 'Ver preço atualizado' : 'Ver melhores recomendações'; ?></a><?php if(!$affiliate): ?><p class="or-meta">Configure o destino afiliado real no campo comercial do artigo para ativar o CTA de preço.</p><?php endif; ?></aside></div></div></article>
<?php
/* FAQ schema is generated from the same visible FAQ section in post_content. */
if(preg_match('/## FAQ\s*(.*?)\s*## Conclusão/is',$content,$faqSection)){
  $entities=array();
  if(preg_match_all('/###\s+(.+?)\s*\n\s*(.+?)(?=\n###\s|$)/is',$faqSection[1],$rows,PREG_SET_ORDER)){
    foreach($rows as $row){$entities[]=array('@type'=>'Question','name'=>wp_strip_all_tags(trim($row[1])),'acceptedAnswer'=>array('@type'=>'Answer','text'=>wp_kses_post(trim($row[2]))));}
  }
  if($entities) echo '<script type="application/ld+json">'.wp_json_encode(array('@context'=>'https://schema.org','@type'=>'FAQPage','mainEntity'=>$entities),JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE).'</script>';
}
?>
<?php endwhile; ?>
<?php get_footer(); ?>
