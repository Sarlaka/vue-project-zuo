<template>
<div class="feed-recommend-badge">
	<div class="badge-inner">
		<i class="iconfont icon-iconstaffpicks"></i>
		<span class="badge-text">编辑推荐</span>
	</div>
</div>
</template>

<script>
export default {}
</script>

<style>
.feed-recommend-badge {
    position: absolute;
    left: -103px;
    top: 10px;
    z-index: 410;
    -webkit-transform: translate(65px);
    transform: translate(65px);
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
}
.feed-recommend-badge:hover {
    -webkit-transform: translate(0);
    transform: translate(0);
}
.badge-inner {
    width: 103px;
    text-align: center;
    background-color: #1fd7e2;
    color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.icon-iconstaffpicks {
    font-size: 19px;
    line-height: 19px;
}
.badge-text {
    padding-left: 8px;
}
</style>