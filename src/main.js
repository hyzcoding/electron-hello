import Vue from 'vue'
import App from './views/App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/route'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
