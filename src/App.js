import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { MobxRouter, startRouter } from 'mobx-router';

// router
import views from "./config/views";
import appStore from "./stores/AppStore";

//components
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import BackDrop from './components/BackDrop';

import './scss/app.scss';


class App extends Component {
  constructor(props) {
    super(props)
    startRouter(views, appStore)
    this.state = {
      mobileNavOpen: false
    }
  }

  handleToggleClick = () => {
    this.setState((prevState) => {
      return {mobileNavOpen: !prevState.mobileNavOpen}
    })
  }

  handleBackDropClick = () => {
    this.setState({mobileNavOpen: false})
  }

  render() {
    let backdrop

    if (this.state.mobileNavOpen) {
      backdrop = <BackDrop click={this.handleBackDropClick} />
    } else {
      backdrop = null
    }

    return (
      <Provider store={appStore} routes={views}>
        <div className="App AppWrapper">
          <div className="AppBackground">

          </div>
          <div className="AppBlur">

          </div>
          <div>
            <Header handleMobileClick={this.handleToggleClick} />
            <MobileNav show={this.state.mobileNavOpen}/>
            {backdrop}
            <MobxRouter />
            <Footer />
          </div>  
        </div>
      </Provider>
    );
  }
}

export default App;
