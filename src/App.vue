<template>
  <div id="root">
    <div class="main">
      <!-- 头部导航 -->
      <div class="zuo-navbar dark is-fixed-top">
        <div class="nav">
          <div class="nav-left">
            <a href="/" class="zuo-brand">
              <i class="iconfont icon-iconlogo"></i>
              <span class="web-version"> HONEY WASABI </span>
            </a>
          </div>
          <div class="nav-center">
            <ul class="nav-list list-inline"> 
              <li>
                <router-link to="/zuo/home" class="nav-link v-link-active">首页</router-link>
              </li>
              <li>
                <router-link to="/zuo/articles" class="nav-link">深度</router-link>
              </li>
              <li class="zuo-search-mobile"> 
                <a class="nav-link"> 
                  <i class="iconfont icon-iconhomesearch"></i> 
                </a>
              </li>
              <li class="nav-download-link"> 
                <a class="nav-link download-qrcode-link" v-on:click="showApp()">下载APP</a>
              </li>
            </ul>
            <div class="nav-search-form">
              <div class="zuo-form-group">
                <input type="text" placeholder="输入关键字搜索" class="form-control">
                <a id="submit-search">
                  <i class="iconfont icon-iconhomesearch"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="nav-right">
            <ul class="nav-list list-inline">
              <li>
                <a id="sign-in" class="nav-link" @click="showLogin">
                  <i class="iconfont icon-iconhomelogin"></i>
                  <span>登录</span>
                </a>
              </li>
              <li class="sign-up">
                <a id="sign-up" class="nav-link" @click="showRegister">注册</a>
              </li> 
            </ul>
          </div>
        </div>
      </div>
      <!-- 内容主体 -->
      <router-view></router-view>
      <!-- 下载app -->
      <div id="zuo-download-app" v-bind:class="{show:appdownload}" v-on:click="showApp()">
        <img src="/static/images/scan.png" alt="download qrcode">
      </div>
      <!-- 微信公众号 -->
      <div id="zuo-wechat-account" v-bind:class="{show:webchathao}" v-on:click="showWeb()">
        <img src="/static/images/scan-wechat.png" alt="wechat qrcode">
      </div>
      <!-- 返回顶部导航按钮 -->
      <div class="zuo-right-bottom">
        <div class="rb-actions">
          <a id="back-to-top" class="show">
            <svg class="icon icon-top">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-top"></use>
            </svg>
          </a> 
        </div>
      </div>
      <!-- 登录弹出层 -->
      <login-layout v-if="loginBox"></login-layout>
      <!-- 注册弹出层 -->
      <register-layout v-if="registerBox"></register-layout>
      <!-- 忘记密码弹出层 -->
      <forget-password-layout v-if="forgetpasswordBox"></forget-password-layout>
      <!-- 底部 -->
      <footer class="zuo-footer">
        <div class="footer-inner">
          <div class="footer-actions">
            <a class="scan-wechat-account-link" v-on:click="showWeb()">关注公众号</a>
            <a href="http://zuodesign.cn/about" target="_blank"> 关于<strong>ZUO</strong> </a>
            <a class="feedback-link">反馈吐槽</a>
          </div>
          <div class="zuo-law-rights">
            <span class="company">上海设慧网络科技有限公司2016版权所有</span>
            <span class="icp-num">沪ICP备15013372号</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import loginLayout from './components/loginLayout/loginLayout'
import registerLayout from './components/registerLayout/registerLayout'
import forgetPasswordLayout from './components/forgetPasswordLayout/forgetPasswordLayout'
export default {
  name: 'app',
  components: {
    loginLayout,
    registerLayout,
    forgetPasswordLayout
  },
  data: function () {
    return {
    }
  },
  computed: {
    appdownload () {
      return this.$store.state.appdown
    },
    webchathao () {
      return this.$store.state.webchat
    },
    loginBox () {
      return this.$store.state._login
    },
    registerBox () {
      return this.$store.state._register
    },
    forgetpasswordBox () {
      return this.$store.state._forgetpwd
    }
  },
  methods: {
    showApp: function () {
      this.$store.commit('appDownloadShow')
    },
    showWeb: function () {
      this.$store.commit('webchatShow')
    },
    showLogin: function () {
      this.$store.commit('loginBoxShow')
    },
    showRegister: function () {
      this.$store.commit('registerBoxShow')
    }
  }
}
</script>
