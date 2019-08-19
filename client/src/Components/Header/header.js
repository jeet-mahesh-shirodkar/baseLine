import React, { Component } from 'react';

import '../Header/header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <h1>{this.props.name}</h1>
        </div>
    );
  }
}

export default Header;