<template>
	<div class="feed-list-bar">
  		<div :class="[{dropdown:true},{open:toggle}]" @click.stop="dropdowntoggle(currentmenu)">
  			<div data-toggle="dropdown" id="scene-tag-menu" class="bar-left-part dropdown-toggle">
  	    		<span class="bar-left-main">
  	    			<i v-bind:class="currentmenu.iconclass" v-bind:style="currentmenu.iconstyle"></i>
  	    			<span class="bar-text" v-text="currentmenu.text"></span>
  	    		</span>
  	    		<i class="iconfont icon-iconhomedropmenu"></i>
  			</div>
  			<ul aria-labelledby="scene-tag-menu" class="dropdown-menu">
  				<span class="dropdown-arrow up"></span>
  				<li class="scene-menu-item" v-for="menu in menus" @click.stop="dropdowntoggle(menu)">
  					<a class="change-secne-link">
  						<i v-bind:class="menu.iconclass" v-bind:style="menu.iconstyle"></i> 
  						<span class="s-t-text" v-text="menu.text"></span>
					</a>
				</li>
			</ul>
  		</div>
  		<div class="bar-right-part">
  			<a data-type="good" class="zuo-design-item good" v-bind:class="{uncheck:gooduncheck}" @click="goodDesignCheck()">
  				<span class="icon-item">
  					<i class="iconfont icon-iconhomecheckbox"></i>
				</span>
				<span class="design-text">好设计</span>
			</a>
			<a data-type="bad" class="zuo-design-item bad" v-bind:class="{uncheck:baduncheck}" @click="badDesignCheck()">
				<span class="icon-item">
				<i class="iconfont icon-iconhomecheckbox"></i>
				</span>
				<span class="design-text">坏设计</span>
			</a>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false,
      menus: [
        {text: '全部', iconclass: ['iconfont', 'icon-iconhomecatagory'], iconstyle: {}},
        {text: '日用', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(228, 204, 169)'}},
        {text: '公共', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(161, 228, 64)'}},
        {text: '关爱', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(255, 71, 71)'}},
        {text: '家居', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(88, 0, 24)'}},
        {text: '时尚', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(174, 0, 255)'}},
        {text: '美食', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(255, 150, 0)'}},
        {text: '数码', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(33, 140, 124)'}},
        {text: '视觉', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(255, 234, 0)'}},
        {text: '空间', iconclass: ['icon', 'icon-circle'], iconstyle: {backgroundColor: 'rgb(0, 191, 243)'}}
      ],
      currentmenu: {text: '全部', iconclass: ['iconfont', 'icon-iconhomecatagory'], iconstyle: {}},
      gooduncheck: false,
      baduncheck: false,
      designchange: {text: '全部', goodcheck: true, badcheck: true}
    }
  },
  methods: {
    dropdowntoggle: function (menu) {
      this.toggle = !this.toggle
      this.currentmenu = menu
      this.designchange.text = this.currentmenu.text
    },
    goodDesignCheck: function () {
      if (this.baduncheck) {
        window.alert('请至少选择一种类型的设计！')
      } else {
        this.gooduncheck = !this.gooduncheck
        this.designchange.goodcheck = !this.gooduncheck
      }
    },
    badDesignCheck: function () {
      if (this.gooduncheck) {
        window.alert('请至少选择一种类型的设计！')
      } else {
        this.baduncheck = !this.baduncheck
        this.designchange.badcheck = !this.baduncheck
      }
    }
  },
  created () {
    document.addEventListener('click', (e) => {
      if (this.$el.querySelector('.open')) this.toggle = false
    })
  },
  watch: {
    'designchange': {
      handler: function (designchange) {
        this.$emit('designchoose', designchange)
      },
      deep: true
    }
  }
}
</script>

<style>
.feed-list-bar {
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
  	padding-bottom: 18px;
}
.dropdown{
  position: relative;
}
.bar-right-part {
  	display: flex;
  	align-items: center;
}
.feed-list-bar #scene-tag-menu {
    cursor: pointer;
}
.icon-iconhomecatagory {
    font-size: 14px;
}
.feed-list-bar .dropdown-menu {
    top: 25px;
    min-width: 100px;
    left: -15px;
    padding: 5px 10px;
}
.feed-list-bar li.scene-menu-item {
    border-bottom: 1px solid #ececec;
    padding: 5px 0;
}
.feed-list-bar .scene-menu-item a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 4px;
    margin-bottom: 0!important;
    font-size: 15px;
}
.feed-list-bar .icon-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.feed-list-bar .scene-menu-item a:hover {
    color: #272c2f;
}
.bar-right-part {
    display: flex;
    align-items: center;
}
.feed-list-bar a.zuo-design-item {
    display: flex;
    align-items: center;
    margin-left: 18px;
    color: #959697;
}
a.zuo-design-item.good .icon-iconhomecheckbox {
    color: #1fd7e2;
}
a.zuo-design-item.bad .icon-iconhomecheckbox {
    color: #f94815;
}
a.zuo-design-item.uncheck .icon-iconhomecheckbox {
    color: #959697;
}
.feed-list-bar a.zuo-design-item .design-text {
    padding-left: 10px;
}
</style>
