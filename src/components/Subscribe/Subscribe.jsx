// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './Subscribe.css';

class Subscribe extends Component {
	render(){
		return(
			<div className='SubscribeContainer'>
				<h4>Give us your money.</h4>
				<p>We need it right now.</p>
				<Button link='http://expressnews.com' text='Subscribe now'/>
			</div>
		)
	}
}

export default Subscribe;