import Vue from 'vue'
import Router from 'vue-router'
import ListaProdutos from '../pages/produtos/Lista'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'ListaProdutos', component: ListaProdutos}
  ]
})
