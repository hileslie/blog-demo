import Vue from 'vue'
import Router from 'vue-router'
import articlesInfo from '@articles/articles.json'

const routes = [
  { path: '/', component: () => import('@pages/home') },
  { path: '/archives', component: () => import('@pages/archives') },
  { path: '/categories', component: () => import('@pages/categories') },
  { path: '/tags', component: () => import('@pages/tags') },
  { path: '/tags/:id', component: () => import('@pages/tag') },
  { path: '/about', component: () => import('@pages/about') },
  { path: '*', component: () => import('@pages/404') }
]

const scrollBehavior = (to, from, savedPosition) => {  // 路由跳转后回到页面dn
  window.scrollTo(0, 0)
}

Object.keys(articlesInfo).forEach((key) => {
  routes.splice(1, 0, {
    // path: `/${key.replace(/\.md/, '')}`,
    // path: '/' + articlesInfo[key].date + '/' + key.replace(/\.md/, ''),
    path: '/' + articlesInfo[key].date + '/' + articlesInfo[key].path,
    component: () => import(`@articles/${key}`),
    name: `/${key.replace(/\.md/, '')}`
  })
})

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes,
  scrollBehavior
})
