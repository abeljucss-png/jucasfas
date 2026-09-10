<?php
/** Template Name: Guia de Compra */
get_header(); ?><section class="or-category-hero"><div class="or-container"><?php or_breadcrumbs(); ?><p class="or-eyebrow">Guia de compra</p><h1><?php the_title(); ?></h1><p><?php echo esc_html(get_the_excerpt()); ?></p></div></section><section class="or-section"><div class="or-container"><div class="or-content"><?php while(have_posts()): the_post(); the_content(); endwhile; ?></div></div></section><?php get_footer(); ?>
