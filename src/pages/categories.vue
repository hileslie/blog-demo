<template>
  <section class="categories">
    <div class="content-wrap">
      <div class="contents">
        <div class="content" v-for="(x, index) in categories" :key="index">
          <div class="collection-title">
            <h2 class="mg-left">{{x['0'].categories}}</h2>
          </div>
          <div class="collection-content" v-for="(y, index) in x" :key="index">
            <a class="mg-left" @click="$router.push({path: `/${y.date}/${y.path}`})">{{y.date}} -- {{y.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  }
}
</script>
<style lang="stylus" scoped>
.categories {
  .content-wrap {
    position: relative;

    .contents {
      &:after {
        content: ' ';
        position: absolute;
        top: 15px;
        left: 0;
        margin-left: -2px;
        width: 4px;
        height: 100%;
        background: #f5f5f5;
        z-index: -1;
      }

      .content {
        .collection-title {
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 50%;
            margin-left: -4px;
            margin-top: -4px;
            width: 8px;
            height: 8px;
            background: #bbb;
            border-radius: 50%;
          }

          .mg-left {
            margin-left: 20px;
          }
        }

        .collection-content {
          margin: 20px 0;
          padding-bottom: 10px;
          border-bottom: 1px dashed #ccc;
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 5px;
            width: 6px;
            height: 6px;
            margin-left: -4px;
            background: #bbb;
            border-radius: 50%;
            border: 1px solid #fff;
          }

          &:hover {
            border-bottom-color: #666;
          }

          &:hover:before {
            background: #222;
          }

          a {
            cursor: pointer;
          }

          .mg-left {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
