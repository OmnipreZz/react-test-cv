import React, { Component } from 'react';

import '../scss/components/footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterIcon">
          <div className="OneIcon">
          <i className="fab fa-github"></i>
          </div>
          <div className="OneIcon">
          <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="OneIcon">
          <i className="fab fa-twitter"></i>
          </div>
          <div className="OneIcon">
          <i className="fab fa-instagram"></i>
          </div>

        </div>
      </div>
    )
  }
}

export default Footer;