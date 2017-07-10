// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './SubscribeFooter.css';

class SubscribeFooter extends Component {
	render(){
		return(
			<div className='SubscribeFooter'>
			<div>
				<h4>Seriously, give us your money.</h4>
				<p>This is your final chance to support the biased fake news.</p>
				<Button link='http://expressnews.com' text='Subscribe now'/>
			</div>
			</div>
		)
	}
}

export default SubscribeFooter;