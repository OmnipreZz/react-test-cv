import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { MobxRouter, startRouter } from 'mobx-router';
import views from './config/views';

import appStore from './stores/AppStore';

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import './scss/app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    startRouter(views, appStore)
  }

  render() {
    return (
      <Provider store={appStore}>
        <div className="App AppWrapper">
          <Header />
          <Sidebar />
          <MobxRouter />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
