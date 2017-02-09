<template>
<div class="zuo-overlay" @click.self="showLogin">
  <div id="zuo-login-box">
    <div class="auth-box">
      <i class="iconfont icon-iconhomeclose icon-welcome_close" @click="showLogin"></i>
      <div class="auth-box-body">
        <header class="box-title">
          <i class="iconfont icon-iconregisterwelcomelogo"></i>
          <span class="title-text">欢迎回到&nbsp;<strong>ZUO</strong></span>
        </header>
        <div class="form-wrap">
          <div class="social-auth">
            <div class="social-choices">
              <a class="weibo-link">
                <i class="iconfont icon-iconregisterweibo"></i>
              </a>
              <a class="weixin-link">
                <i class="iconfont icon-iconregisterwechatsvg"></i>
              </a>
            </div>
            <div class="social-tip">你可以使用第三方社交账号直接登录</div>
            <div class="divider">
              <div class="line left"></div>
              <div class="c-text">或者</div>
              <div class="line right"></div>
            </div>
          </div>
          <div class="form-body">
            <div class="zuo-form">
              <div class="zuo-control-group phone">
                <input type="text" name="phone" placeholder="手机号" class="zuo-control"> 
              </div>
              <div class="zuo-control-group code" v-if="codeLogin">
                <input id="code" type="text" name="code" placeholder="验证码" class="zuo-control"> <button id="zuo-get-code" class="zuo-btn zuo-btn-theme">发送验证码</button>
              </div>
              <div class="zuo-control-group pass" v-else>
                <input type="password" name="password" placeholder="密码" class="zuo-control">
              </div>
            </div>
            <div class="other-actions" v-if="codeLogin"> 
              <a id="sign-up-link" @click="goToReg">没有账号？去注册</a>
              <a id="pass-login-link" @click="loginType">
                <i class="iconfont icon-iconloginpsw"></i>
                <span>手机密码登录</span>
              </a>
            </div>
            <div class="other-actions" v-else>
              <a id="forget-pass-link" @click="forgetpassword">忘记密码？</a> 
              <a id="sms-login-link" @click="loginType">
                <i class="iconfont icon-iconlogincode"></i>
                <span>手机验证码登录</span>
              </a> 
            </div>
            <button id="zuo-login" class="zuo-btn zuo-btn-theme zuo-btn-block">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      codeLogin: true
    }
  },
  computed: {
  },
  methods: {
    showLogin: function () {
      this.$store.commit('loginBoxShow')
    },
    loginType: function () {
      this.codeLogin = !this.codeLogin
    },
    goToReg: function () {
      this.$store.commit('loginBoxShow')
      this.$store.commit('registerBoxShow')
    },
    forgetpassword: function () {
      this.$store.commit('loginBoxShow')
      this.$store.commit('forgetPwdBoxShow')
    }
  }
}
</script>

<style>
@import './style.css'
</style>