/**
 * Internal dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import ProfileBox from './profile';
import SocialIcons from './social';
import AvatarColumn from './avatar';
import icons from './../utils/icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	MediaUpload
} = wp.editor;

const { Button, Dashicon } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class Edit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes: {
				profileName,
				profileTitle,
				profileContent,
				profileAlignment,
				profileImgURL,
				profileImgID,
				profileImgAlt,
				profileTextColor
			},
			setAttributes
		} = this.props;

		return [

			/* Show the block alignment controls on focus */
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ profileAlignment }
					onChange={ ( value ) => setAttributes({ profileAlignment: value }) }
				/>
			</BlockControls>,

			/* Show the block controls on focus */
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,

			/* Show the block markup in the editor */
			<ProfileBox { ...this.props }>
				<AvatarColumn { ...this.props }>
					<figure className="cb-profile-image-square">
						<MediaUpload
							buttonProps={ {
								className: 'change-image'
							} }
							onSelect={ ( img ) => setAttributes(
								{
									profileImgID: img.id,
									profileImgURL: img.url,
									profileImgAlt: img.alt
								}
							) }
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ profileImgID }
							render={ ({ open }) => (
								<Fragment>
									<Button
										onClick={ open }
									>
										{ ! profileImgID ? icons.upload : <img
											className={ classnames(
												'cb-profile-avatar',
												'cb-change-image',
												'wp-image-' + profileImgID
											) }
											src={ profileImgURL }
											alt={ profileImgAlt }
											/>
										}
									</Button>
									{ profileImgID && (
										<Button
											className="cb-remove-image"
											onClick={ () => {
												setAttributes({
													profileImgID: null,
													profileImgURL: null,
													profileImgAlt: null
												});
											} }
										>
											<Dashicon icon={ 'dismiss' } />
										</Button>
									) }
								</Fragment>
							) }
						>
						</MediaUpload>
					</figure>
				</AvatarColumn>

				<div
					className={ classnames(
						'cb-profile-column cb-profile-content-wrap'
					) }
				>
					<RichText
						tagName="h2"
						placeholder={ __( 'Add name', 'contact-blocks' ) }
						keepPlaceholderOnFocus
						value={ profileName }
						className='cb-profile-name'
						style={ {
							color: profileTextColor
						} }
						onChange={ ( value ) => setAttributes({ profileName: value }) }
					/>

					<RichText
						tagName="p"
						placeholder={ __( 'Add title', 'contact-blocks' ) }
						keepPlaceholderOnFocus
						value={ profileTitle }
						className='cb-profile-title'
						style={ {
							color: profileTextColor
						} }
						onChange={ ( value ) => setAttributes({ profileTitle: value }) }
					/>



					<div class="cb-row">
						{ profileContent && (
							<div class="cb-col cb-col-auto">
								<RichText
									tagName="div"
									className='cb-profile-text'
									multiline="p"
									placeholder={ __( 'Add profile text...', 'contact-blocks' ) }
									keepPlaceholderOnFocus
									value={ profileContent }
									formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
									onChange={ ( value ) => setAttributes({ profileContent: value }) }
								/>
							</div>
						) }
						<div class="cb-col">
							<SocialIcons { ...this.props } />
						</div>
					</div>
				</div>
			</ProfileBox>
		];
	}
}
