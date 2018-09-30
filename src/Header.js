import React, { Component } from 'react';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }

    this.handleTitleInput = this.handleTitleInput.bind(this)
    this.handleBodyInput = this.handleBodyInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  handleTitleInput(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleBodyInput(event) {
    this.setState({
      body: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault()
    let title = this.state.title
    let body = this.state.body
    let ideaObj = { title: title, body: body }
    this.props.storeIdeas(ideaObj)
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
          <input type="text" className="input-title" onChange={this.handleTitleInput} />
          <input type="text" className="input-body" onChange={this.handleBodyInput} />
          <button className="input-button" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }



}

export default Header;