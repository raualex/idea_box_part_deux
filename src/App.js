import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header.js'
import Container from './Container.js'

class App extends Component {
  constructor() {
    super();

    this.storeIdeas = this.storeIdeas.bind(this)
  }

  storeIdeas(idea) {
    let stringifiedIdea = JSON.stringify(idea)
    localStorage.setItem(Date.now(), stringifiedIdea)
  }

  render() {
    return (
      <div className="App">
        <Header storeIdeas={this.storeIdeas} />
        <Container />
      </div>
    );
  }
}

export default App;
