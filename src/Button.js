import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers
	  handleClick(e) {
	    event.preventDefault();
	    alert('OUCH!');
	  }
	
	render() {
		return(
			<div>
		        <button onClick={this.handleClick}>This is button</button>
	        </div>
		)
	}
}