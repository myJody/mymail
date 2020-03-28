import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'
import 'assets/css/reset.less'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$bus=new Vue()

Vue.use(Antd);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


