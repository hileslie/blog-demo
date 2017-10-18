<template>
  <div class="home">
    <ul class="items">
      <li class="item" v-for="(x, index) in articleLists" :key="index"
       @click="$router.push({path: `/${articleLists[index].date}/${articleLists[index].path}`})">
        <div class="top">
          <img v-if="x.cover" :src="x.cover" alt="">
          <h2 class="title">{{x.title}}</h2>
        </div>
        <p class="desc">{{x.desc}}</p>
        <div class="label">
          <div class="left">发表于{{x.date}}</div>
          <div class="right">分类于{{x.categories}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.$store.dispatch('getArticleList')
  },
  computed: {
    ...mapGetters([
      'articleLists'
    ])
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/css/mixin.styl'
.main .main-view{
  box-shadow: none
}
.home{
  padding: 0
  .items{
    .item{
      margin-bottom :15px
      background-color :#fff
      overflow :hidden
      border-radius :5px
      box-shadow: 0px 1px 10px #888888
      transition(all,.5s,ease)
      &:hover{
        box-shadow: 0px 3px 10px #888888
      }
      &:active{
        box-shadow: 0px 3px 10px #888888
      }
      .top{
        position :relative
        height :250px
        img {
          position :absolute
          width :100%
          height :100%
          z-index :10
          object-fit: cover
        }
        .title{
          position :absolute
          bottom :10%
          left :10px
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
        border-bottom :1px solid #ddd
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
    }
  }
}

</style>
