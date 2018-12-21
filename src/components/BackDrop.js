import React, { Component } from 'react';

import '../scss/components/backDrop.scss';

class BackDrop extends Component {
  render() {
    return (
      <div className="BackDrop" onClick={this.props.click} />
    )
  }
}

export default BackDrop;