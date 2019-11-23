/**
 * Avatar Column Wrapper
 */

/* Setup the block */
const { Component } = wp.element;

/* Create an SocialIcons wrapper Component */
export default class AvatarColumn extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<div className="cb-profile-column cb-profile-avatar-wrap">
				<div className="cb-profile-image-wrap">
					{ this.props.children }
				</div>
			</div>
		);
	}
}
