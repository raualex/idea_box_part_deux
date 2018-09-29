import React, { Component } from 'react';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      ideas: {}
    }

    this.handleClick = this.handleClick.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let ideaTitle = document.querySelector('.input-title').value
    let ideaBody = document.querySelector('.input-body').value
    this.setState({
      ideas: `{${ideaTitle}: ${ideaBody}}`
    })
    this.clearInputs()
  }

  clearInputs() {
    document.querySelector('.input-title').value = ''
    document.querySelector('.input-body').value = ''    
  }

  render() {
    return(
      <div className="header">
        <h1 className="title-bar">idea<span className="box-title">box</span></h1>
        <form className="input-form">
          <input type="text" className="input-title" />
          <input type="text" className="input-body" />
          <button className="input-button" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }



}

export default Header;