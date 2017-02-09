<template>
<div class="zuo-overlay" @click.self="showRegister">
  <div id="zuo-signup-box">
    <div class="auth-box">
      <i class="iconfont icon-iconhomeclose icon-welcome_close" @click="showRegister"></i>
      <div class="auth-box-body">
        <header class="box-title">
          <i class="iconfont icon-iconregisterwelcomelogo"></i>
          <span class="title-text">
            <strong class="logo-text">ZUO&nbsp;</strong>
            <span>欢迎你的加入</span>
          </span>
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
              <div class="zuo-control-group code">
                <input id="code" type="text" name="code" placeholder="验证码" class="zuo-control"> <button id="zuo-get-code" class="zuo-btn zuo-btn-theme">发送验证码</button> 
              </div>
              <div class="zuo-control-group pass">
                <input type="password" name="password" placeholder="密码" class="zuo-control"> 
              </div>
              <div class="zuo-control-group repass">
                <input type="password" name="repass" placeholder="确认密码" class="zuo-control">
              </div>
            </div>
            <div class="other-actions">
              <div :class="['zuo-remeber-me-link',{'uncheck':unchecked}]">
                <i class="iconfont icon-iconhomecheckbox" @click="userProtocol"></i>
                <span class="policy-tip">我已经认真阅读并同意<strong>ZUO</strong>的</span>
                <a href="http://zuoooodesign.lofter.com/post/1d1a2c6b_6478482" target="_blank">《用户协议》</a>
              </div>
              <a id="login-link" @click="goToLogin">已有账号，登录</a>
            </div>
            <button id="zuo-sign-up" class="zuo-btn zuo-btn-theme zuo-btn-block" :disabled="unchecked">注册账号</button>
          </div>
        </div
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      unchecked: false
    }
  },
  methods: {
    showRegister: function () {
      this.$store.commit('registerBoxShow')
    },
    goToLogin: function () {
      this.$store.commit('loginBoxShow')
      this.$store.commit('registerBoxShow')
    },
    userProtocol: function () {
      this.unchecked = !this.unchecked
    }
  }
}
</script>

<style>
@import './style.css'
</style>