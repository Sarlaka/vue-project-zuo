<template>
<div class="zuo-loader-wrap">
  <div class="timeline-wrapper" _v-9809c182="">
    <div class="timeline-item" _v-9809c182="">
      <div class="animated-background" _v-9809c182="">
        <div class="background-masker header-top" _v-9809c182=""></div>
        <div class="background-masker header-left" _v-9809c182=""></div>
        <div class="background-masker header-right" _v-9809c182=""></div>
        <div class="background-masker header-bottom" _v-9809c182=""></div>
        <div class="background-masker subheader-left" _v-9809c182=""></div>
        <div class="background-masker subheader-right" _v-9809c182=""></div>
        <div class="background-masker subheader-bottom" _v-9809c182=""></div>
        <div class="background-masker content-top" _v-9809c182=""></div>
        <div class="background-masker content-first-end" _v-9809c182=""></div>
        <div class="background-masker content-second-line" _v-9809c182=""></div>
        <div class="background-masker content-second-end" _v-9809c182=""></div>
        <div class="background-masker content-third-line" _v-9809c182=""></div>
        <div class="background-masker content-third-end" _v-9809c182=""></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.zuo-loader-wrap {
    padding-top: 18px;
    padding-bottom: 18px;
}
.timeline-item[_v-9809c182] {
    min-height: 200px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    padding: 12px;
    margin: 0px auto 18px;
}
.animated-background[_v-9809c182] {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: -webkit-linear-gradient(left,#eee 8%,#ddd 18%,#eee 33%);
    background: linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);
    background-size: 800px 104px;
    height: 96px;
    position: relative;
}
@-webkit-keyframes placeHolderShimmer {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}
.background-masker[_v-9809c182] {
    background: #fff;
    position: absolute;
}
/* Every thing below this is just positioning */

.background-masker.header-top[_v-9809c182],
.background-masker.header-bottom[_v-9809c182],
.background-masker.subheader-bottom[_v-9809c182] {
    top: 0;
    left: 40px;
    right: 0;
    height: 10px;
}

.background-masker.header-left[_v-9809c182],
.background-masker.subheader-left[_v-9809c182],
.background-masker.header-right[_v-9809c182],
.background-masker.subheader-right[_v-9809c182] {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
}

.background-masker.header-bottom[_v-9809c182] {
    top: 18px;
    height: 6px;
}

.background-masker.subheader-left[_v-9809c182],
.background-masker.subheader-right[_v-9809c182] {
    top: 24px;
    height: 6px;
}

.background-masker.header-right[_v-9809c182],
.background-masker.subheader-right[_v-9809c182] {
    width: auto;
    left: 300px;
    right: 0;
}

.background-masker.subheader-right[_v-9809c182] {
    left: 230px;
}

.background-masker.subheader-bottom[_v-9809c182] {
    top: 30px;
    height: 10px;
}

.background-masker.content-top[_v-9809c182],
.background-masker.content-second-line[_v-9809c182],
.background-masker.content-third-line[_v-9809c182],
.background-masker.content-second-end[_v-9809c182],
.background-masker.content-third-end[_v-9809c182],
.background-masker.content-first-end[_v-9809c182] {
    top: 40px;
    left: 0;
    right: 0;
    height: 6px;
}

.background-masker.content-top[_v-9809c182] {
    height: 20px;
}

.background-masker.content-first-end[_v-9809c182],
.background-masker.content-second-end[_v-9809c182],
.background-masker.content-third-end[_v-9809c182] {
    width: auto;
    left: 380px;
    right: 0;
    top: 60px;
    height: 8px;
}

.background-masker.content-second-line[_v-9809c182] {
    top: 68px;
}

.background-masker.content-second-end[_v-9809c182] {
    left: 420px;
    top: 74px;
}

.background-masker.content-third-line[_v-9809c182] {
    top: 82px;
}

.background-masker.content-third-end[_v-9809c182] {
    left: 300px;
    top: 88px;
}
</style>