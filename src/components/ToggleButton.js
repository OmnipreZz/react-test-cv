import React, { Component } from 'react';

import '../scss/components/toggleButton.scss';

class ToggleButton extends Component {
  render() {
    return (
      <button className="ToggleButton" onClick={this.props.click}>
        <div className="ToggleButtonLine" />
        <div className="ToggleButtonLine" />
        <div className="ToggleButtonLine" />
      </button>
    )
  }
}

export default ToggleButton;