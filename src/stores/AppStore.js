// import { action, observable } from 'mobx';
import { RouterStore } from 'mobx-router';

// import all the stores
import NavStore from './NavStore';


class AppStore {

  constructor() {
    this.navStore = NavStore
  }


  router = new RouterStore()

}

export default new AppStore();