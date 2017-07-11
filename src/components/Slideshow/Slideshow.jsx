// @flow

import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import SlideshowPhoto from '../SlideshowPhoto/SlideshowPhoto';
// import FullPhoto from '../FullPhoto/FullPhoto';

import './Slideshow.css';

class Slideshow extends Component {
	props: {
		photos: Array<Object>
	};

	state = {
		activeIndex : 0
	};

	constructor(){
		super();

		// this.buildPhoto = this.buildPhoto.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// loadPhoto = (path: string) =>{
	// 	return require(`../../images/${path}`);
	// }

	// buildPhoto = (component: Object) =>{
	// 	const photoPath = this.loadPhoto(component.source);
	// 	let photoComponent = <FullPhoto src={photoPath} alt={component.caption}/>;

	// 	return <SlideshowPhoto caption={component.caption} cutline={component.cutline} key={Math.random()}>{photoComponent}</SlideshowPhoto>;
	// }

	handleClick = () =>{

		let maxIndex = this.props.photos.length - 1;
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

    	this.setState(prevState => ({
      		activeIndex: newIndex
   		}));
	}

	render(){

		const slideshowPhotos = this.props.photos.map((photo, index)=>{
			return <SlideshowPhoto source={photo.source} caption={photo.caption} cutline={photo.cutline} key={index}/>
		});

		return(
			<div className='Slideshow' onClick={this.handleClick}>
			<CSSTransitionGroup
				transitionName='slideshow'
				transitionEnterTimeout={500}
				transitionLeave={false}>
				{slideshowPhotos[this.state.activeIndex]}
			</CSSTransitionGroup>
			</div>
		)
	}
}

export default Slideshow;