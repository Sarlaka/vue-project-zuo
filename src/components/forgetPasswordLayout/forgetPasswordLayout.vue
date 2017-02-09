<template>
<div class="zuo-overlay" @click.self="showForgetPwd">
	<div id="forget-pass-box">
		<div class="auth-box">
			<i class="iconfont icon-iconhomeclose icon-welcome_close" @click="showForgetPwd"></i>
			<div class="auth-box-body">
				<header class="box-title">忘记密码</header>
				<div class="form-wrap">
					<div class="form-body">
						<div class="zuo-form">
							<div class="zuo-control-group phone">
								<input type="text" name="phone" placeholder="手机号" class="zuo-control"> 
							</div>
							<div class="zuo-control-group code">
								<input id="code" type="text" name="code" placeholder="验证码" class="zuo-control">
								<button id="zuo-get-code" class="zuo-btn zuo-btn-theme">发送验证码</button>
							</div>
							<div class="zuo-control-group pass">
								<input type="password" name="password" placeholder="新密码" class="zuo-control"> 
							</div>
							<div class="zuo-control-group repass">
								<input type="password" name="repass" placeholder="新密码确认" class="zuo-control"> 
							</div>
						</div>
						<div class="actions">
							<button id="forget-pass-submit" class="zuo-btn zuo-btn-theme zuo-btn-block">确认修改</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  methods: {
    showForgetPwd: function () {
      this.$store.commit('forgetPwdBoxShow')
    }
  }
}
</script>

<style>
</style>