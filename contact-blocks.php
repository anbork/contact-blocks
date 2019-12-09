<?php
/**
 * Plugin Name: Contact Blocks for Gutenberg Editor
 * Plugin URI: https://github.com/tonborzenko/contact-blocks
 * GitHub Plugin URI: https://github.com/tonborzenko/contact-blocks
 * Description: Contact Blocks — is a small collection with messengers and personal contact info.
 * Author: tonborzenko
 * Author URI: https://github.com/tonborzenko
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
