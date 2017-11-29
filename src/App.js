import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './Subject';
import NewSubject from './NewSubject';
// import Button from './Button';
// import InputField from './InputField';

// import Content from './Content.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.addNewResource = this.addNewResource.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);

    this.state =  { 

                    subject: '',
                    resources : [

                    {subject : "Functional Programming Basics", 
                    resources :[
                      
                      {
                        title: "Higher-order functions - Part 1 of Functional Programming in JavaScript", 
                        url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},

                      {
                        title: "var, let and const - What, why and how - ES6 JavaScript Features", 
                        url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"}, 
                      
                      {
                        title: "Arrow functions in JavaScript - What, Why and How - FunFunFunction #32", 
                        url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"}
                    ]},

                    {

                    subject : "ES6", 
                    resources :[

                      {
                        title: "Essential ES6 / ES2015 JavaScript", 
                        url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
                      
                      {
                        title: "JavaScript ES6+: var, let, or const?", 
                        url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae"},
                      
                      {
                        title: "Arrow functions", 
                        url: "http://stack.formidable.com/es6-interactive-guide/#/"},
                      
                      {
                        title: "Javascript ES6 Cheatsheet - the best of JS ES6", 
                        url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
                      
                      {
                        title: "Javascript ES6 Cheatsheet #2 - the best of JS ES6", 
                        url: "https://www.youtube.com/watch?v=LmL0Gh193M0"},
                      
                      {
                        title: "ECMAScript 6 / ES6 New Features - Tutorial 1 - Let", 
                        url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt"},
                      
                      {
                        title: "Learn ES6 (ECMAScript 2015)", 
                        url: "https://egghead.io/courses/learn-es6-ecmascript-2015"}
                    ]},

                    {
                      subject : "Introduction to React", 
                      resources :[

                      {
                        title: "Handling Events", 
                        url: "https://facebook.github.io/react/docs/handling-events.html"},
                      
                      {
                        title: "React Stateless Functional Components: Nine Wins You Might Have Overlooked", 
                        url: "https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.jblm2w9dp"},
                      
                      {
                        title: "Events & ReactJS", 
                        url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"},
                      
                      {
                        title: "State of Components", 
                        url: "https://www.youtube.com/watch?v=e5n9j9n83OM&index=9&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                      
                      {
                        title: "How does ReactJS update the DOM?", 
                        url: "https://www.youtube.com/watch?v=Iw2BLUjQo1E&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=10"},
                      
                      {
                        title: "Stateless Components", 
                        url: "https://www.youtube.com/watch?v=SEkfzqIgvTo&index=11&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
                      
                      {
                        title: "Understanding JavaScript’s Function.prototype.bind", 
                        url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"},
                    ]}
                  ]}
  }

  // event handlers go here

  addNewResource(subject,resource) {
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    this.setState(tempState);
  }

  addNewSubject(subject) {
    const tempState = this.state;
    tempState.resources.push(subject);
    this.setState(tempState);
  }

  deleteSubject(subject){
    const tempState = this.state;
    tempState.resources.splice(subject, 1);
    this.setState(tempState);
  }

  deleteResource(subject, resource){
    console.log("in app.js", subject, resource);
    const tempState = this.state;
    tempState.resources[subject].resources.splice(resource, 1);
    this.setState(tempState);
    
  }

  render() {
    return (
      <div>
        {this.state.resources.map((resource, index) => {
          return (
                  <div>
                    <Subject 
                    index={index} 
                    addResource={this.addNewResource}
                    deleteResource={this.deleteResource}
                    deleteSubject={this.deleteSubject} 
                    items={resource} 
                    key={index} />
                  </div>       
            )
          }
        )}
        <NewSubject addNewSubject={this.addNewSubject} />
      </div>
    );
  }
}

export default App;
