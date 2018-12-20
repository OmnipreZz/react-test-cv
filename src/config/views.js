import React from 'react';
import { Route } from 'mobx-router';


import Jumbotron from '../components/Jumbotron';
import Project from '../components/Project';


const views = {

  home: new Route({
    path: '/',
    component: <Jumbotron />
  }),

  project: new Route({
    path: '/projet',
    component: <Project />
  }),

}


export default views;