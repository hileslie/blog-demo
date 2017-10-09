<template>
  <div class="home">
    <ul class="items">
      <li class="item" v-for="(x, index) in articlesArr" :key="index" @click="$router.push(`/${articlesArr[index].name.replace(/\.md/, '')}`)">
        <div class="top">
          <img v-if="x.cover" :src="x.cover" alt="">
          <h2 class="title">{{x.title}}</h2>
        </div>
        <p class="desc">{{x.desc}}</p>
        <div class="label">
          <div class="left">{{x.date}}</div>
          <div class="right">{{x.tags}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
const articles = require('@articles/articles.json')
const articlesArr = Object.keys(articles).map((name) => {
  return {
    name: name,
    title: articles[name].title,
    tags: articles[name].tags,
    date: articles[name].date,
    cover: articles[name].cover,
    desc: articles[name].desc
  }
})
export default {
  data () {
    return {
      articlesArr: articlesArr
    }
  },
  created () {
    // console.log(articlesArr)
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/css/mixin.styl'

.home{
  max-width :1024px
  margin :0 auto
  .items{
    .item{
      margin :10px 0 10px 0
      background-color :#fff
      overflow :hidden
      border-radius :5px
      box-shadow: 0px 1px 10px #888888
      transition(all,.5s,ease)
      .top{
        position :relative
        height :240px
        img {
          position :absolute
          width :100%
          height :100%
          z-index :10
          object-fit: cover
        }
        .title{
          position :absolute
          top :50%
          left :10%
          z-index :20
          color :#fff
        }
        &:after{
          content: ""
          display: block
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          background: rgba(0,0,0,.3)
          z-index: 15
        }
      }
      .desc{
        font-size: 1.4rem
        padding: 10px
      }
      .label{
        overflow :hidden
        padding :10px
        .left{
          float :left
        }
        .right{
          float :right
        }
      }
      &:hover{
        box-shadow: 0px 3px 10px #888888
      }
    }
  }
}
</style>
