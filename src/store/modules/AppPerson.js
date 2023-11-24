// import { consts } from '@/store/consts'
// import axios from 'axios'

export default {
  state() {
    return { stTheme: false }
  },
  getters: {
    stTheme(state) {
      return state.stTheme
    },
  },
  mutations: {
    setStateTheme(state, payload) {
      state.stTheme = payload.value
    },
  },
  actions: {},
}
