import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate/src";
import VueRouter from "vue-router";
import router from './routes'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
