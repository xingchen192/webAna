import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
