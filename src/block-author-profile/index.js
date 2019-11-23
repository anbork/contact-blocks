/**
 * BLOCK: Atomic Blocks Profile Box
 */

/**
 * Internal dependencies
 */
import Edit from './components/edit';
import Save from './components/save';
import './styles/style.scss';
import './styles/editor.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockAttributes = {
	profileName: {
		type: 'array',
		source: 'children',
		selector: '.cb-profile-name'
	},
	profileTitle: {
		type: 'array',
		source: 'children',
		selector: '.cb-profile-title'
	},
	profileContent: {
		type: 'array',
		selector: '.cb-profile-text',
		source: 'children'
	},
	profileAlignment: {
		type: 'string'
	},
	profileImgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img'
	},
	profileImgAlt: {
		type: 'string',
		source: 'attribute',
		selector: 'figure img',
		attribute: 'alt',
		default: ''
	},
	profileImgID: {
		type: 'number'
	},
	profileBackgroundColor: {
		type: 'string',
		default: '#f2f2f2'
	},
	profileTextColor: {
		type: 'string',
		default: '#32373c'
	},
	profileLinkColor: {
		type: 'string',
		default: '#392f43'
	},
	profileFontSize: {
		type: 'number',
		default: 18
	},
	profileAvatarShape: {
		type: 'string',
		default: 'square'
	},
	twitter: {
		type: 'url'
	},
	facebook: {
		type: 'url'
	},
	instagram: {
		type: 'url'
	},
	pinterest: {
		type: 'url'
	},
	google: {
		type: 'url'
	},
	youtube: {
		type: 'url'
	},
	github: {
		type: 'url'
	},
	linkedin: {
		type: 'url'
	},
	email: {
		type: 'url'
	},
	wordpress: {
		type: 'url'
	},
	website: {
		type: 'url'
	}
};

/**
 * Register the block
 */
registerBlockType( 'contact-blocks/cb-profile-box', {
	title: __( 'Author Profile', 'contact-blocks' ),
	description: __( 'Add a profile box with bio info and social media links.', 'contact-blocks' ),
	icon: 'admin-users',
	category: 'contact-blocks',
	keywords: [
		__( 'author', 'contact-blocks' ),
		__( 'profile', 'contact-blocks' ),
		__( 'atomic', 'contact-blocks' )
	],

	/* Setup the block attributes */
	attributes: blockAttributes,

	/* Render the block in the editor. */
	edit: props => {
		return <Edit { ...props } />;
	},

	/* Save the block markup. */
	save: props => {
		return <Save { ...props } />;
	}
});
