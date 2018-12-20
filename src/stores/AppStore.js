import { RouterStore } from 'mobx-router'


class AppStore {

  router = new RouterStore()

}

export default new AppStore()