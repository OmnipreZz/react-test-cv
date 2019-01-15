import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link }  from 'mobx-router';


import ToggleButton from './ToggleButton';

import '../scss/components/header.scss';


@inject('store', 'routes')
@observer
class Header extends Component {

  render() {

    const router = this.props.store.router
    const routes = this.props.routes

    return (
      <div className="Header">
        <div className="Burger">
          <ToggleButton click={this.props.handleMobileClick}/>
        </div>
        <div className="HeaderTitle">
          <h1>Geoffrey Frioli</h1>
        </div>
        <div className="HeaderNav">
          <Link view={routes.home} router={router}> Accueil </Link>
          <Link view={routes.project} router={router}> Projets </Link>
          <h3>contact</h3>
        </div>
      </div>
    )
  }
}

export default Header;