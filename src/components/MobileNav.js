import React, { Component } from 'react'

import '../scss/components/mobileNav.scss'

class MobileNav extends Component {
  render() {
    let mobileNavClass = 'MobileNav'
    if (this.props.show) {
      mobileNavClass = 'MobileNav open'
    }
    return (
      <div className={mobileNavClass}>
        <ul>
          <li>mobile</li>
          <li>nav</li>
        </ul>
      </div>
    )
  }
}

export default MobileNav