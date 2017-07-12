// @flow

import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import SlideshowPhoto from '../SlideshowPhoto/SlideshowPhoto';
import SlideshowButton from '../SlideshowButton/SlideshowButton';

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
	 	this.moveForward = this.moveForward.bind(this);
	 	this.moveBackward = this.moveBackward.bind(this);
	}

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}
	moveForward = () =>{

		let maxIndex = this.props.photos.length - 1;
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

    	this.setState(prevState => ({
      		activeIndex: newIndex
   		}));
	}

	moveBackward = () =>{
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === 0 ? this.props.photos.length -1 : currentIndex -1;

		this.setState(prevState => ({
      		activeIndex: newIndex
   		}));
	}

	handleTouchStart = (event: Event) =>{

		
	}

	render(){

		const slideshowPhotos = this.props.photos.map((photo, index)=>{
			return <SlideshowPhoto source={photo.source} caption={photo.caption} cutline={photo.cutline} moveForward={this.moveForward} moveBackward={this.moveBackward} key={index}/>
		});

		return(
			<div className='Slideshow'>
			<CSSTransitionGroup
				transitionName='slideshow'
				transitionEnterTimeout={500}
				transitionLeave={false}>
				{slideshowPhotos[this.state.activeIndex]}
			</CSSTransitionGroup>
			<div className='Slideshow-load'>
				{this.props.photos.map((photo, index)=>{
					return <img src={this.loadPhoto(photo.source)} key={index} alt={photo.caption}/>
				})}
			</div>
			</div>
		)
	}
}

export default Slideshow;