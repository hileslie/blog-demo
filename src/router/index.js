import Vue from 'vue'
import Router from 'vue-router'
import articlesInfo from '@articles/articles.json'

const routes = [
  { path: '/', component: () => import('@pages/home') },
  { path: '/about', component: () => import('@pages/about') },
  { path: '*', component: () => import('@pages/404') }
]

Object.keys(articlesInfo).forEach((key) => {
  routes.splice(1, 0, {
    path: `/${key.replace(/\.md/, '')}`,
    component: () => import(`@articles/${key}`),
    name: `/${key.replace(/\.md/, '')}`
  })
})

Vue.use(Router)

export default new Router({
  routes
})