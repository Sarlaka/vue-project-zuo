// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import home from './zuo/home'
import articles from './zuo/articles'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

const routes = [
  { path: '', component: home },
  { path: '/zuo/home', component: home },
  { path: '/zuo/articles', component: articles }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const store = new Vuex.Store({
  state: {
    appdown: false,
    webchat: false,
    _login: false,
    _register: false,
    _forgetpwd: false
  },
  mutations: {
    appDownloadShow: function (state) {
      state.appdown = !state.appdown
    },
    webchatShow: function (state) {
      state.webchat = !state.webchat
    },
    loginBoxShow: function (state) {
      state._login = !state._login
    },
    registerBoxShow: function (state) {
      state._register = !state._register
    },
    forgetPwdBoxShow: function (state) {
      state._forgetpwd = !state._forgetpwd
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router: router
})
