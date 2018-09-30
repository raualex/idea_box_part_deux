import React, { Component } from 'react';
import './CSS/Container.css';
import Card from './Card.js'

class Container extends Component {
  constructor() {
    super();

    this.state = {
      ideaList: []
    }

    this.retrieveIdeas = this.retrieveIdeas.bind(this)
  }

  retrieveIdeas() {
    for (var i = 0; i < localStorage.length; i++) {
      let retrievedIdea = localStorage.getItem(localStorage.key(i));
      let parsedIdea = JSON.parse(retrievedIdea);
      this.state.ideaList.push(parsedIdea)
    }
  }

  render() {
    if (localStorage.length) { 
      this.retrieveIdeas()
      return(
        <div className="container-body">
          <Card cardData={this.state.ideaList} />
        </div>
      )
    } else {
      return(
        <div className="container-body">
          <p> </p>
        </div>
      )
    }
  }
}

export default Container;