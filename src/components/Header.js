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
        <div className="HeaderTitle">
            <h1>Geoffrey Frioli</h1>
        </div>
        <div className="HeaderNav">
          <Link className="NavLink" view={routes.home} router={router}> Accueil </Link>
          <div className="NavBorder">
            <Link className="NavLink" view={routes.portfolio} router={router}> A Propos </Link>
          </div>
          <div className="NavBorder">
            <Link className="NavLink" view={routes.portfolio} router={router}> Portfolio </Link>
          </div>
          <div className="NavBorder">
            <Link className="NavLink" view={routes.home} router={router}> Contact </Link>
          </div>
        </div>
        <div className="Burger">
          <ToggleButton click={this.props.handleMobileClick}/>
        </div>
      </div>
    )
  }
}

export default Header;