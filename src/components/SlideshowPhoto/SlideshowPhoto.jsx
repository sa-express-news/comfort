// @flow

import React, {Component} from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';
import PhotoInfo from '../PhotoInfo/PhotoInfo';

import './SlideshowPhoto.css';

class SlideshowPhoto extends Component {
	props: {
		source: string,
		caption: string,
		cutline: string,
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){

		return(
			<div className='SlideshowPhoto'>
				<FullPhoto src={this.loadPhoto(this.props.source)} alt={this.props.caption}/>
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>

			</div>
		)
	}
}

export default SlideshowPhoto;