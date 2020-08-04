import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './config/i18n.js';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from "materialize-css";



Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  M,


  render: h => h(App)
}).$mount('#app')