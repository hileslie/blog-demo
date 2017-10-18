<template>
  <section class="about">
    <header class="head">
      <div class="avatar">
        <img src="../assets/img/timg.gif" alt="">
      </div>
    </header>
    <section class="content">
      <section class="section">
        <h1 class="title">关于我</h1>

      </section>
      <section class="section">
        <h1 class="title">个人作品</h1>
        <ul class="items">
          <li class="item">
            <a href="https://github.com/hileslie" target="_blank">GitHub</a>
          </li>
          <li class="item">
            <a href="https://github.com/hileslie/blog" target="_blank">个人博客项目源码</a>
          </li>
          <li class="item">
            <a href="http://hileslie.top/reader" target="_blank">仿追书神器</a>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.about {
  padding: 0;

  .head {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: rgba(68, 68, 68, 0.6);

    .avatar {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
      width: 100px;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .content {
    padding: 10px;

    .section {
      .title {
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        margin-top: 20px;
      }

      .items {
        .item {
          padding: 10px 0;
          border-bottom: 1px dashed #ccc;
        }
      }
    }
  }
}
</style>

