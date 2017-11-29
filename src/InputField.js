import React, { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	// event handlers
	  handleClick(e) {
	  }

	handleChange(event) {
    	this.setState({value: event.target.value});
	}
	
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
		        <label>
		          Name:
		          <input type="text" value={this.state.value} onChange={this.handleChange} />
		        </label>
		        <input type="submit" value="Submit" />
	      	</form>
		)
	}
}