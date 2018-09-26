import React, { Component } from 'react';
import './CSS/Header.css'


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="header">
        <h1 className="title-bar">idea<span className="box-title">box</span></h1>
        <form className="input-form">
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }



}

export default Header;