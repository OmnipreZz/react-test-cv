import React from 'react';
import { Route } from 'mobx-router';


import Home from '../components/Home';
import Project from '../components/Project';


const views = {

  home: new Route({
    path: '/',
    component: <Home />
  }),

  project: new Route({
    path: '/projet',
    component: <Project/>,
    beforeExit: () => {
      const result = window.confirm('Are you sure you want to leave the gallery?');
      return result;
    }
  })

}


export default views;