import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  corSubMenu: 'grey'
}
const mutations = {
  setCorSubMenu (state, playload) { state.corSubMenu = playload }
}
const actions = {}
const getters = {
  corSubMenu (state) { return state.corSubMenu }
}

export default new Vuex.Store({ state, mutations, actions, getters })
