import { createStore } from 'vuex'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

import AppSearch from './modules/AppSearch.js'
import AppPerson from './modules/AppPerson.js'

export default createStore({
  state() {
    return state
  },
  getters,
  mutations,
  actions,
  modules: {
    appSearch: AppSearch,
    appPerson: AppPerson,
  },
})
