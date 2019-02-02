// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// axios.defaults.baseURL = 'http://localhost:3000'

axios.defaults.headers.get['Accepts'] = 'application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
