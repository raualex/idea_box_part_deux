import React, { Component } from 'react';
import './CSS/Card.css'

class Card extends Component {
  constructor() {
    super();

    this.state = {
      cardArray: []
    }
  }

  componentWillMount() {
    this.setState({
      cardArray: this.props.cardData
    })
  }

  render() {
    return this.state.cardArray.map((idea, index) => {
      return(
        <div className="card" key={index}>
          <h3 className="card-title">{idea.title}</h3>
          <p className="card-body">{idea.body}</p>
        </div>
      )
    })
  }
}

export default Card;