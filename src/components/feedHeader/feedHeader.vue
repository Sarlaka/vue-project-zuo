<template>
<header class="feed-top">
	<div class="top-inner">
		<div class="owner-info">
			<div class="owner-avatar">
				<a class="owner-link" :href="'/u/'+this.userInfo.objectId+'/posts'">
					<img alt="photo" class="zuo-img-circle" :src="this.userInfo.avatar">
				</a>
				<svg class="icon icon-professional" v-if="this.userInfo.userRole==='professional'">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-professional"></use>
				</svg>
				<svg class="icon icon-consumer" v-if="this.userInfo.userRole==='consumers'">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-consumer"></use>
				</svg>	
			</div>
			<div class="owner-name">
				<a class="owner-link" :href="'/u/'+this.userInfo.objectId+'/posts'">{{this.userInfo.nickname}}</a> 
			</div>
		</div>
		<div class="feed-right-actions">
			<svg class="icon icon-not_liked">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-not_liked"></use>
			</svg>
			<span class="feed-like-count"> {{this.likeCount}}个赞同 </span>
			<a class="share-toggle">
				<i class="iconfont icon-iconhomeshare"></i>
			</a>
			<div class="dropdown">
				<a data-toggle="dropdown" class="dropdown-toggle">
					<i class="iconfont icon-iconhomemore"></i>
				</a>
				<ul class="dropdown-menu">
					<span class="dropdown-arrow up"></span>
					<li class="cuser-dropdown-item">
						<a class="report-link">举报</a>
					</li> 
				</ul>
			</div>
		</div>
	</div>
</header>
</template>

<script>
export default {
  props: ['userInfo', 'likeCount']
}
</script>

<style>
.feed-top {
    padding: 10px 18px;
    height: 60px;
    position: relative;
    z-index: 1300;
}
.top-inner {
    justify-content: space-between;
}
.owner-info, .top-inner {
    display: flex;
    align-items: center;
}
.owner-info {
    justify-content: flex-start;
}
.owner-avatar {
    font-size: 0;
    position: relative;
}
.owner-avatar, .owner-avatar img {
    width: 40px;
    height: 40px;
}
.icon-professional {
    position: absolute;
    top: 0;
    right: -8px;
}
.icon-consumer {
    position: absolute;
    top: 0;
    left: -8px;
}
.zuo-img-circle {
    border-radius: 50%;
}
.owner-name {
    padding-left: 10px;
}
.owner-name a {
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
}
.feed-right-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    line-height: 20px;
    color: #959697;
}
.feed-like-count {
    padding-left: 10px;
}
.feed-like-count, .share-toggle {
    padding-right: 18px;
}
.feed-top .dropdown-menu {
    left: -45px;
}
</style>