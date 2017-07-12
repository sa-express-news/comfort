// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo/PhotoInfo';

import './FullPhotoContainer.css';

class FullPhotoContainer extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='FullPhotoContainer'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default FullPhotoContainer;