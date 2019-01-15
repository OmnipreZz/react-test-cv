import React, { Component } from 'react';

import '../scss/components/footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterIcon">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    )
  }
}

export default Footer;