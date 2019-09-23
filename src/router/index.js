import Vue from 'vue'
import Router from 'vue-router'
import ListaProdutos from '../pages/produtos/Lista'
import DetalheProduto from '../pages/produtos/Detalhe'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'ListaProdutos', component: ListaProdutos},
    {path: '/produto/:id', name: 'DetalheProduto', component: DetalheProduto}
  ]
})
