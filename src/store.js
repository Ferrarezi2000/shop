import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  plataforma: null,
  corSubMenu: 'grey'
}
const mutations = {
  setCorSubMenu (state, playload) { state.corSubMenu = playload },
  setPlataforma (state, playload) { state.corSubMenu = playload }
}
const actions = {}
const getters = {
  corSubMenu (state) { return state.corSubMenu },
  getPlataforma (state) { return state.plataforma }
}

export default new Vuex.Store({ state, mutations, actions, getters })
