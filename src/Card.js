import React, { Component } from 'react';
import './CSS/Card.css'

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="card">
       <h3 className="card-title">Input title goes here</h3>
       <p className="card-body">Input body goes here</p>
      </div>
    )
  }
}

export default Card;