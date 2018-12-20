import React, { Component } from 'react'

import '../scss/components/sidebar.scss'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <ul>
          <li>events</li>
          <li>archives</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar