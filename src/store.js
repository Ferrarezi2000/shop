import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  plataforma: null,
  corSubMenu: 'grey',
  meusProdutos: []
}
const mutations = {
  setCorSubMenu (state, playload) { state.corSubMenu = playload },
  setPlataforma (state, playload) { state.plataforma = playload },
  setMeusProdutos (state, playload) { state.meusProdutos.push(playload) },
  removerProdutos (state, playload) { state.meusProdutos.splice(playload, 1) },
  zerarCarrinho (state) { state.meusProdutos = [] }
}
const getters = {
  corSubMenu (state) { return state.corSubMenu },
  getPlataforma (state) { return state.plataforma },
  getMeusProdutos (state) { return state.meusProdutos }
}

export default new Vuex.Store({ state, mutations, getters })
