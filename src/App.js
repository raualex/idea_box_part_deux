import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header.js'
import Container from './Container.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      idea: {},
      ideaArray: []
    }

    this.storeIdeas = this.storeIdeas.bind(this)
    this.sendStateToContainer = this.sendStateToContainer.bind(this)
  }

  sendStateToContainer() {
    this.setState({
      counter: Date.now()
    })
  }

  storeIdeas(idea) {
    let stringifiedIdea = JSON.stringify(idea)
    localStorage.setItem(Date.now(), stringifiedIdea)
    this.setState({
      idea: idea
    })
  }

  render() {

    return (
      <div className="App">
        <Header storeIdeas={this.storeIdeas} sendStateToContainer={this.sendStateToContainer} />
        <Container ideaArray={this.state.ideaArray} />
      </div>
    )
  }
}

export default App;
