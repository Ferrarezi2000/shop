import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCurrencyFilter from 'vue-currency-filter'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(Toasted)
Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
