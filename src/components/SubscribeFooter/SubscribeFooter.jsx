// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './SubscribeFooter.css';

class SubscribeFooter extends Component {
	render(){
		return(
			<div className='SubscribeFooter'>
			<div>
				<h4>Support thoughtful journalism.</h4>
				<p>Great deals on your new Toyota Corolla. If we can't make this two lines we might as well die.</p>
				<Button link='http://expressnews.com' text='Subscribe'/>
			</div>
			</div>
		)
	}
}

export default SubscribeFooter;