import React, { Component } from 'react';

import ToggleButton from './ToggleButton';

import '../scss/components/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>logo</h1>
        <ToggleButton click={this.props.handleMobileClick}/>
        <h1>search bar</h1>
        <h1>user</h1>
      </div>
    )
  }
}

export default Header;