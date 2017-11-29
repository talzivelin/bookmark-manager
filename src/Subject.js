import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props)
		// this.state = {isToggleOn : true};
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isClicked: false,
			title: '',
			url: '',
			value: '',
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.deleteResource = this.deleteResource.bind(this);
    	this.deleteSubject = this.deleteSubject.bind(this);
	}	

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
		// console.log(this.state);
		const newResource = {
			title: this.state.title,
			url: this.state.url,
		}
		this.props.addResource(this.props.index, newResource);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	    // console.log(this.state);
	 }

	// event handlers
	clickSubject(event) {
	    // alert('OUCH!');
	    console.log('Subject Clicked');
      	event.currentTarget.style.color = '#cc0000';
  		//e.setAttribute("class", blue); //For Most Browsers
		// e.setAttribute("className", blue); //For IE; harmless to other browsers.
		 
	  }

	handleClick() {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked
		}));

		console.log(this.state.isClicked);

		setTimeout(() => {
			console.log(this.state.isClicked)
			console.log('------------------')
		}, 100)
	}  

	deleteResource(event){
		event.preventDefault();
		const subject = this.props.index;
		const resource = event.target.value;	
		this.props.deleteResource(subject, resource);
		console.log("in Subject.js", subject, resource);
	}

  	deleteSubject(event){
		event.preventDefault();
		this.props.deleteSubject(this.props.index);
	}

	render() {
		return(
			<div className="container">
				<h2 onClick={this.clickSubject.bind(this)}>{this.props.items.subject}</h2>
				<div className="week container">
				<ul>
					{this.props.items.resources.map((resource, index) => { 
						return(	
							<li key={index} className="list-group-item">							
								<a href={resource.url} target="_blank">{resource.title}</a>
								&nbsp;&nbsp;&nbsp;
								<input 
									type="checkbox" 
									value={index} 
									onClick={this.deleteResource}/> <span class="delete">Delete</span>
							</li>	
						)} 
					)}
				</ul>
			    <form>
			        <label>
			          Title:
			        </label>  
			        <input
				        name="title"
				        placeholder="Title"
				        type="text"
				        value={this.state.title}
				        onChange={this.handleInputChange}>
				    </input>
			        <label>
			          URL: 
			        </label>  
			          <input
			            name="url"
			            placeholder="URL"
			            type="text"
			            value={this.state.url}
			            onChange={this.handleInputChange} >
			        </input>
			        <button className="btn btn-lg btn-info" onClick={this.handleSubmit}>Add Resource</button><br/><br/>

					<br/><br/>
			        
			        <button className="btn btn-lg btn-warning" onClick={this.deleteSubject}>Delete Subject</button>&nbsp;&nbsp;
			        
			      </form>
			    </div>
			</div>
		)
	}
}