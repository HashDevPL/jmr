import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'typeface-josefin-sans'
import 'typeface-lobster'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
