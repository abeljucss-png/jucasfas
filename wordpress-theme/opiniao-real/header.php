<?php if (!defined('ABSPATH')) exit; ?><!doctype html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="<?php echo esc_attr(get_bloginfo('description') ?: 'Comparativos e análises honestas para ajudar você a escolher melhor.'); ?>"><?php wp_head(); ?></head>
<body <?php body_class(); ?>>
<a class="or-skip" href="#main-content">Pular para o conteúdo</a>
<header class="site-header"><div class="or-container or-header-inner">
<a class="or-brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Opinião Real - início"><img src="<?php echo esc_url(get_template_directory_uri().'/assets/images/opiniao-real-mark.svg'); ?>" alt=""><span>Opinião <strong>Real</strong></span></a>
<button class="or-menu-toggle" type="button" aria-expanded="false" aria-controls="or-primary-nav" aria-label="Abrir menu">☰</button>
<nav id="or-primary-nav" class="or-nav" aria-label="Menu principal">
<?php if (has_nav_menu('primary')) { wp_nav_menu(array('theme_location'=>'primary','container'=>false,'fallback_cb'=>false,'items_wrap'=>'%3$s')); } else { ?>
<a href="<?php echo esc_url(home_url('/')); ?>">Início</a><a href="<?php echo esc_url(home_url('/fitness/')); ?>">Fitness</a><a href="<?php echo esc_url(home_url('/ferramentas/')); ?>">Ferramentas</a><a href="<?php echo esc_url(home_url('/casa/')); ?>">Casa</a><a href="<?php echo esc_url(home_url('/comparativos/')); ?>">Comparativos</a><a href="<?php echo esc_url(home_url('/guias-de-compra/')); ?>">Guias de Compra</a><a href="<?php echo esc_url(home_url('/sobre-nos/')); ?>">Sobre Nós</a>
<?php } ?><a class="or-header-cta" href="<?php echo esc_url(home_url('/comparativos/')); ?>">Ver recomendações</a></nav>
</div></header><main id="main-content">
