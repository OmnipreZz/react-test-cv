import React, { Component } from 'react';

import '../scss/components/footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterIcon">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    )
  }
}

export default Footer;