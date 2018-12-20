import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { MobxRouter, startRouter } from 'mobx-router';
import views from './config/views';

import appStore from './stores/AppStore';

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
          <MobxRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
