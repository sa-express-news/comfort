// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo/PhotoInfo';

import './SlideshowPhoto.css';

class SlideshowPhoto extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string,
		displayClass: string
	};

	render(){

		return(
			<div className='SlideshowPhoto'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default SlideshowPhoto;