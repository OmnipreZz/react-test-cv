import React from 'react';
import { Route } from 'mobx-router';


import Home from '../components/Home';
import Portfolio from '../components/Portfolio';


const views = {

  home: new Route({
    path: '/',
    component: <Home />
  }),

  portfolio: new Route({
    path: '/portfolio',
    component: <Portfolio />
  })

}


export default views;