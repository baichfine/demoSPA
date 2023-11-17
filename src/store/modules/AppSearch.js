// import { consts } from '@/store/consts'
// import axios from 'axios'

export default {
  state() {
    return { valSearch: '', stStartSearch: false }
  },
  getters: {
    valSearch(state) {
      return state.valSearch
    },
    stStartSearch(state) {
      return state.stStartSearch
    },
  },
  mutations: {
    setValueSearch(state, payload) {
      state.valSearch = payload.value
    },
    setStateSearch(state, payload) {
      state.stStartSearch = payload.value
    },
  },
  actions: {},
}
