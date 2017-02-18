<template>
	<div class="zuo-content-container">
        <!-- 欢迎页面 -->
        <div class="zuo-welcome" v-if="welcome">
          <div class="welcome-body">
            <h1 @click="getTopic">可能是全宇宙最ZUO的图片社区</h1>
            <div class="subtip">
              <span class="subtip1">和像你一样认真对待生活的人一起</span><br>
              <span class="subtip2">从设计的视角，重新认识世界</span>
            </div>
            <a href="https://itunes.apple.com/cn/app/zuo-she-ji/id980946146?l=en&amp;mt=8" class="welcome-download-link zuo-btn zuo-btn-primary download-qrcode-link">下载iOS版ZUO App</a>
            <button id="new-zuoer-link" class="zuo-btn zuo-btn-theme">创建ZUO账号</button>
          </div>
          <a class="welcome-close" v-on:click="welcomeshow">
            <i class="iconfont icon-iconhomeclose"></i>
          </a>
        </div>
        <!-- 主体 -->
        <div class="zuo-home">
          <div class="zuo-home-content">
            <div class="left-col">
              <div class="zd-topic-card" v-if="topicLoaded">
                <div class="topic-body">
                  <div class="topic-info">
                    <div class="topic-mask"></div>
                    <div class="topic-info-body">
                      <div class="top-tip">
                        <div class="tip-title">话题</div>
                        <div class="tip-divider"></div>
                      </div>
                      <div class="topic-title">
                        <span>{{topic.title}}</span>
                        <i class="iconfont icon-hometopicentry"></i>
                      </div>
                      <div class="topic-counts">
                        <span class="topic-stars">{{topic.collect_count}}人收藏</span>
                        <span class="vertical-line">|</span>
                        <span class="topic-comment">{{topic.comment_count}}个讨论</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="topic-comments-carousel">
                  <div class="carousel-item">
                    <div class="carousel-body">
                      <div class="carousel-body-inner">
                        <a class="carousel-link" href="/u/zhudankegu/posts">竹淡刻骨<span>:</span></a> <span class="carousel-content">@Steve J ls说的方格本确实挺合适画流程图用的。要是觉得格子太拘束，点阵的内页也可以。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <feed-loading v-else></feed-loading>
              <div class="left-content">
                <feed-list-bar v-on:designchoose="designchange"></feed-list-bar>
                <!-------------------------------------->
                <article class="zuo-feed" v-for="hotPost in hotPosts">
                  <feed-recommend-badge v-if="hotPost.isRecommend"></feed-recommend-badge>
                  <div class="zuo-feed-inner">
                    <feed-header :userInfo="hotPost.owner" :likeCount="hotPost.likeCount"></feed-header>
                    <div class="feed-body">
                      <div class="feed-image">
                        <div class="feed-image-overlay"></div>
                        <img :src="hotPost.postImage.url" :alt="hotPost.postImage.name">
                        <a class="feed-halo is-liked" :class="[hotPost.isGoodDesign?'good':'bad']" :style="{left:hotPost.haloCenterRatio.width_ratio*100+'%',top: hotPost.haloCenterRatio.height_ratio*100+'%'}" v-if="hotPost.isLiked"> 
                          <div class="liking-tip good"> Bravo </div>
                        </a>
                        <a class="feed-halo normal" :class="[hotPost.isGoodDesign?'good':'bad']" :style="{left:hotPost.haloCenterRatio.width_ratio*100+'%',top: hotPost.haloCenterRatio.height_ratio*100+'%'}" v-else>
                          <div class="like-tip">
                            <div class="like-tip-big">赞同</div>
                            <div class="like-tip-small">这个态度</div>
                          </div>
                          <span class="animated" :class="[hotPost.isGoodDesign?'animated-pop':'animated-shrink']"></span>
                          <div class="liking-tip good">Bravo</div>
                        </a>
                      </div>
                      <div class="feed-content">
                        <div class="feed-text">{{hotPost.postDescription}}</div>
                        <div class="feed-tags big">
                          <div class="tag-body">
                            <a class="tag-item" :href="'/zuo/tag/'+hotPost.sceneTag.name">
                              <i class="icon icon-tag" :style="{backgroundColor: hotPost.sceneTag.color}"></i>
                              <span class="name">{{hotPost.sceneTag.name}}</span>
                            </a>
                            <a v-for="tag in hotPost.tags" class="tag-item" :href="'/zuo/tag/'+tag">
                              <i class="icon icon-tag"></i>
                              <span class="name">{{tag}}</span>
                            </a>
                          </div>
                        </div>
                        <div class="feed-info">
                          <section class="comment-info">
                            <i class="iconfont icon-iconhomecomment"></i>
                            <span class="comment-count"> {{hotPost.commentedCount}}条评论 </span>
                            <span class="more-comments" v-if="hotPost.commentedCount>2">更多评论...</span>
                          </section>
                          <ul class="comment-list">
                            <li class="comment-item" v-for="comment in hotPost.comments">
                              <div class="comment-content">
                                <a target="_blank" class="owner-link" :href="'/u/'+comment.author.zuoId+'/posts'">{{comment.author.nickname}}</a>
                                <span> -&nbsp;</span>
                                <span class="comment-text"> {{comment.text}} </span>
                              </div>
                              <div class="comment-actions">
                                <span class="time">{{comment.timeAgo}}</span>
                                <span class="right-part">
                                  <a class="reply-link">回复</a>
                                  <span class="comment-like">
                                    <span class="like-text">
                                      <span class="comment-light-tip"> 点亮 </span>
                                      <strong class="comment-like-count">{{comment.likeNumber}}</strong>
                                      <i class="iconfont icon-iconhomelight"></i>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="add-comment">
                          <div class="add-body">
                            <div class="input-wrap">
                              <input type="text" placeholder="写下你的评论..." class="new-comment">
                              <textarea placeholder="写下你的评论..." class="comment-textarea" style="display:none"></textarea>
                            </div>
                            <div class="add-comment-actions" style="display:none">
                              <a class="cancel-new-comment">取消</a>
                              <a class="post-new-comment">评论</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <!-------------------------------------->
                <feed-loading v-if='this.hotPostsLoading'></feed-loading>
              </div>
            </div>
            <div class="right-col">
              <div class="side-bar">
                <div class="hot-tags">
                  <header class="side-title">热门标签</header>
                  <div class="hot-tags-list" v-if="hotTagsLoaded">
                    <a class="tag-link" v-for="hotTag in hotTags" :href="'/zuo/search?q='+hotTag.content">{{hotTag.content}}</a>
                  </div>
                  <feed-loading v-else></feed-loading>
                </div>
                <div class="recommend-users">
                  <header class="side-title">推荐关注</header>
                  <div class="users-list" v-if="reco_usersLoaded">
                    <div class="user-item" v-for="reco_user in reco_users">
                      <div class="user-text-info">
                        <div class="user-name">
                          <a :href="'/u/'+reco_user.zuoId">{{reco_user.nickname}}</a>
                        </div>
                        <div class="user-intro">
                          <a :href="'/u/'+reco_user.zuoId">{{reco_user.introduction}}</a>
                        </div>
                      </div>
                      <div class="user-avatar">
                        <a title="九月" :href="'/u/'+reco_user.zuoId">
                          <div class="user-avatar-overlay"></div>
                          <img alt="avatar" class="zuo-img-rounded" :src="reco_user.avatar">
                        </a>
                      </div>
                    </div>
                  </div>
                  <feed-loading v-else></feed-loading>
                </div>
                <div class="zuo-intro">
                  <div class="zuo-app-download">
                    <a class="download-qrcode-link" v-on:click="showApp()">下载iOS版 App</a>
                    <svg class="icon icon-download">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-download"></use>
                    </svg>
                    <svg class="icon icon-download_hover">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-download_hover"></use>
                    </svg>
                  </div>
                  <div class="zuo-weixin-account">
                    <a class="scan-wechat-account-link" v-on:click="showWeb()">关注微信公众号</a>
                    <svg class="icon icon-wechat_qr">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-wechat_qr"></use>
                    </svg>
                    <svg class="icon icon-wechat_qr_hover">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-wechat_qr_hover"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import feedListBar from '../components/feedListBar/feedListBar'
import feedRecommendBadge from '../components/recommendBadge/recommendBadge'
import feedHeader from '../components/feedHeader/feedHeader'
import feedLoading from '../components/loading/loading'
import $ from 'jquery'

export default {
  components: {
    feedListBar,
    feedRecommendBadge,
    feedHeader,
    feedLoading
  },
  data: function () {
    return {
      welcome: true,
      topic: {
        title: '',
        collect_count: '',
        comment_count: ''
      },
      topicLoaded: false,
      hotTags: [],
      hotTagsLoaded: false,
      reco_users: [],
      reco_usersLoaded: false,
      hotPosts: [],
      hotPostsLoading: true,
      morePostParams: {
        design: '',
        scene: '全部',
        after: ''
      },
      has_next: true,
      getMoreFlag: true
    }
  },
  computed: {
  },
  methods: {
    welcomeshow: function () {
      this.welcome = false
    },
    showApp: function () {
      this.$store.commit('appDownloadShow')
    },
    showWeb: function () {
      this.$store.commit('webchatShow')
    },
    designchange: function (data) {
      console.log(data)
    },
    getTopic: function () {
      // 获取标题
      this.$http.get('/api/topics').then(res => {
        this.topic.title = res.body.topic.title
        this.topic.collect_count = res.body.topic.collect_count
        this.topic.comment_count = res.body.topic.comment_count
      }).then(function () {
        this.topicLoaded = true
      })
    },
    getTags: function () {
      // 获取热门标签
      this.$http.get('/api/web_hot_tags').then(res => {
        this.hotTags = res.body.hot_tags
      }).then(function () {
        this.hotTagsLoaded = true
      })
    },
    getRecoUsers: function () {
      // 获取推荐作者
      this.$http.get('/api/web_reco_users').then(res => {
        this.reco_users = res.body.reco_users
        // console.log(this.reco_users)
      }).then(function () {
        this.reco_usersLoaded = true
      })
    },
    getHotPosts: function () {
      // 获取热门设计
      this.$http.get('/api/web_hot_posts').then(res => {
        this.hotPosts = res.body.posts
        // console.log(this.hotPosts)
      }).then(function () {
        this.hotPostsLoading = false

        var _this = this
        // var content = $('#root')
        $(window).scroll(function () {
          var winHeight = $(window).height()
          var docHeight = $('#root').height()
          var scrollTop = $(window).scrollTop()
          if ((scrollTop + winHeight + 200 > docHeight) && _this.getMoreFlag) {
            _this.getMoreFlag = false
            _this.getMorePosts()
          }
        })
      })
    },
    getMorePosts: function () {
      // 获取更多设计
      this.hotPostsLoading = true
      this.$http.get('/api/posts', {params: {design: this.morePostParams.design, scene: this.morePostParams.scene, after: this.morePostParams.after}}).then(res => {
        console.log(res.body)
        var length = res.body.posts.length
        var posts = res.body.posts
        this.hotPosts = this.hotPosts.concat(posts)
        this.has_next = res.body.has_next
        if (this.has_next) {
          this.morePostParams.after = posts[length - 1].createdAt
        }
        this.hotPostsLoading = false
        this.getMoreFlag = true
      })
    }
  },
  created () {
    // 页面初始化加载
    this.getTopic()
    this.getTags()
    this.getRecoUsers()
    this.getHotPosts()
  }
}
</script>

<style>
</style>