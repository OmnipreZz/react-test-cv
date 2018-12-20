import React from 'react';
import { Route } from 'mobx-router';


import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';


const views = {

  jumbo: new Route({
    path: '/',
    component: <Jumbotron />
  }),

  home: new Route({
    path: '/home',
    component: <Layout />
  }),

}


export default views;