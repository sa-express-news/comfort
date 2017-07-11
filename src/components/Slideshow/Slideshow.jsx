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
		activeIndex : 0,
		loadedPhotos: []
	};

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}
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
			<div className='Slideshow-load'>
				{this.props.photos.map((photo, index)=>{
					return <img src={this.loadPhoto(photo.source)} key={index}/>
				})}
			</div>
			</div>
		)
	}
}

export default Slideshow;