import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from '../page/index/index.vue'
import Login from '../page/login/index.vue'
import Register from '../page/register/index.vue'
// import Qinzilist from '../page/navlist/qinzi/index.vue'
// import Tiyulist from '../page/navlist/tiyu/index.vue'
// import Wudaoilist from '../page/navlist/wudao/index.vue'
import Xijuilist from '../page/navlist/xiju/index.vue'
// import Yaogunilist from '../page/navlist/yaogun/index.vue'


const routes = [{
    path: '/',
    name: "Index",
    component: Index,
  }, {
    path: '/Index',
    name: "Index",
    component: Index,

  }, {
    path: '/Login',
    name: "Login",
    component: Login
  }, {
    path: '/Register',
    name: "Register",
    component: Register
  }, {
    // path: '/Xijuilist/:id',
    path: '/Xijuilist/:aid',
    name: 'Xijuilist',
    component: Xijuilist
  }
  // , {
  //   path: '/Yaogunilist/:aid',
  //   name: "Yaogunilist",
  //   component: Yaogunilist
  // }, {
  //   path: '/Qinzilist/:aid',
  //   name: "Qinzilist",
  //   component: Qinzilist
  // }, {
  //   path: '/Tiyulist/:aid',
  //   name: "Tiyulist",
  //   component: Tiyulist
  // }, {
  //   path: '/Wudaoilist/:aid',
  //   name: "Wudaoilist",
  //   component: Wudaoilist
  // }

]


const router = new VueRouter({
  // base: process.env.BASE_URL,
  // mode: 'history',
  routes
})

export default router