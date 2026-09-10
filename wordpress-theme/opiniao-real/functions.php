<?php
/** Opinião Real theme bootstrap. */
if (!defined('ABSPATH')) { exit; }
define('OR_THEME_VERSION', '1.0.0');
function or_setup() {
    add_theme_support('title-tag'); add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption','style','script'));
    add_theme_support('custom-logo', array('height'=>64,'width'=>64,'flex-height'=>true,'flex-width'=>true));
    add_theme_support('elementor');
    register_nav_menus(array('primary'=>'Menu principal','footer_categories'=>'Footer: categorias','footer_institutional'=>'Footer: institucional'));
}
add_action('after_setup_theme','or_setup');
function or_assets() {
    wp_enqueue_style('or-fonts','https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap',array(),null);
    wp_enqueue_style('or-style',get_stylesheet_uri(),array(),OR_THEME_VERSION);
    wp_enqueue_script('or-theme',get_template_directory_uri().'/assets/js/theme.js',array(),OR_THEME_VERSION,true);
}
add_action('wp_enqueue_scripts','or_assets');
function or_register_content_types() {
    register_post_type('seo_article',array('labels'=>array('name'=>'Artigos SEO','singular_name'=>'Artigo SEO'),'public'=>true,'show_in_rest'=>true,'has_archive'=>true,'rewrite'=>array('slug'=>'artigos'),'supports'=>array('title','editor','excerpt','thumbnail','revisions','author'),'menu_icon'=>'dashicons-edit-page'));
    register_post_type('product',array('labels'=>array('name'=>'Produtos','singular_name'=>'Produto'),'public'=>true,'show_in_rest'=>true,'has_archive'=>true,'rewrite'=>array('slug'=>'produtos'),'supports'=>array('title','editor','excerpt','thumbnail','revisions'),'menu_icon'=>'dashicons-products'));
    register_post_type('comparison',array('labels'=>array('name'=>'Comparativos','singular_name'=>'Comparativo'),'public'=>true,'show_in_rest'=>true,'has_archive'=>true,'rewrite'=>array('slug'=>'comparativos'),'supports'=>array('title','editor','excerpt','thumbnail','revisions'),'menu_icon'=>'dashicons-chart-bar'));
    register_taxonomy('topic',array('seo_article','product','comparison'),array('labels'=>array('name'=>'Tópicos','singular_name'=>'Tópico'),'public'=>true,'show_in_rest'=>true,'hierarchical'=>true,'rewrite'=>array('slug'=>'categoria')));
    register_taxonomy('content_type',array('seo_article'),array('labels'=>array('name'=>'Tipo editorial','singular_name'=>'Tipo editorial'),'public'=>true,'show_in_rest'=>true,'hierarchical'=>false,'rewrite'=>array('slug'=>'tipo')));
}
add_action('init','or_register_content_types');
function or_elementor_compatibility() { if (did_action('elementor/loaded')) { add_post_type_support('page','elementor'); add_post_type_support('seo_article','elementor'); add_post_type_support('comparison','elementor'); } }
add_action('init','or_elementor_compatibility',20);
function or_rank_math_breadcrumbs() { if (function_exists('rank_math_the_breadcrumbs')) { rank_math_the_breadcrumbs(); return true; } return false; }
function or_fallback_breadcrumbs() {
    echo '<nav class="or-breadcrumbs" aria-label="Breadcrumb"><a href="'.esc_url(home_url('/')).'">Início</a><span aria-hidden="true"> / </span>';
    if (is_singular()) { $obj=get_queried_object(); if ($obj instanceof WP_Post) { $topics=get_the_terms($obj->ID,'topic'); if ($topics && !is_wp_error($topics)) echo '<a href="'.esc_url(get_term_link($topics[0])).'">'.esc_html($topics[0]->name).'</a><span aria-hidden="true"> / </span>'; echo '<span>'.esc_html(get_the_title()).'</span>'; } }
    elseif (is_archive()) echo '<span>'.esc_html(get_the_archive_title()).'</span>'; else echo '<span>'.esc_html(wp_get_document_title()).'</span>'; echo '</nav>';
}
function or_breadcrumbs() { if (!or_rank_math_breadcrumbs()) or_fallback_breadcrumbs(); }
function or_meta($key,$post_id=null) { return get_post_meta($post_id ?: get_the_ID(),$key,true); }
function or_affiliate_url($url) { return esc_url($url); }
function or_schema_fallback() {
    if (class_exists('RankMath\\Schema\\JsonLD\\JsonLD') || !is_singular(array('post','seo_article','comparison','product'))) return;
    $data=array('@context'=>'https://schema.org','@type'=>is_singular('product')?'Product':'Article','headline'=>get_the_title(),'url'=>get_permalink(),'dateModified'=>get_the_modified_date('c'),'datePublished'=>get_the_date('c'),'description'=>wp_strip_all_tags(get_the_excerpt()));
    if (has_post_thumbnail()) $data['image']=array(get_the_post_thumbnail_url(get_the_ID(),'full'));
    echo '<script type="application/ld+json">'.wp_json_encode($data,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE).'</script>';
}
add_action('wp_head','or_schema_fallback',30);
function or_favicon() { echo '<link rel="icon" href="'.esc_url(get_template_directory_uri().'/assets/images/favicon.svg').'" type="image/svg+xml">'; }
add_action('wp_head','or_favicon',2);
