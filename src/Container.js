import React, { Component } from 'react';
import './CSS/Container.css';
import Card from './Card.js'

class Container extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="container-body">
        <Card />
      </div>
    )
  }
}

export default Container;