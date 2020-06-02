import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './../mock/mock.js';
import axios from 'axios';
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded' //设置axios 发出post跨域请求
};
// axios.defaults.// 配置请求的基准URL地址
// axios.defaults.baseURL = 'http://127.0.0.1:8081'
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/reset.css';
Vue.use(ViewUI);
Vue.config.productionTip = false;

// 日历插件
import VCalendar from 'v-calendar';
Vue.use(VCalendar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')