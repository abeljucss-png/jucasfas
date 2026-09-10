<?php
/** Template Name: Landing Page */
get_header(); ?><article class="or-article"><div class="or-container"><div class="or-content"><?php while(have_posts()): the_post(); the_content(); endwhile; ?></div></div></article><?php get_footer(); ?>
