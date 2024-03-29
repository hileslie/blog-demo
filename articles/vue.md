{
  "title": "vue",
  "path":"vue",
  "tags": ["vue-cli", "vue", "JavaScript"],
  "categories": "笔记",
  "date": "2017-07-13",
  "desc": "vue",
  "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1507613119&di=577aadc9b2da7ea63edaa012a51950b4&src=http://img.mp.itc.cn/upload/20161008/e8fadf087de643e8862d2836d0a65bba_th.png"
}

# vue
***

## 路由懒加载

使用普通的import路由导出方式，打包时会打包到一个js文件中，但当项目大的时候，js文件夹会过大，导致页面初始化加载时非常慢：

	import Vue from 'vue'
	import App from './App'
	import VueRouter from 'vue-router';

	import about from './components/about/about.vue'
	import join from './components/join/join.vue'

	Vue.use(VueRouter)

	const routes = [
		{
			path: '/about',
    		component: about
		},
		{
			path: '/join',
    		component: join
		}
	]

	const router = new VueRouter({
	  routes
	}

	new Vue({
	  el: '#app',
	  template: '<App/>',
	  components: {App},
	  router
	})
***
这时使用路由懒加载模式，可以按需加载路由，优化页面的加载速度：

	import Vue from 'vue'
	import App from './App'

	import VueRouter from 'vue-router';

	const home = resolve => require(['./components/home/home.vue'], resolve);
	const about = resolve => require(['./components/about/about.vue'], resolve);

	Vue.use(VueRouter);
***
但是在开发时，过多的路由懒加载，会导致修改代码，页面热更新时的速度非常慢，不利于开发，这时可以自定义封装一个方法，例如_import()方法，在正式环境下才使用懒加载：


	import Vue from 'vue'
	import App from './App'

	import VueRouter from 'vue-router';

	const _import = require('./_import_' + process.env.NODE_ENV);

	const home = _import('./components/home/home.vue');
	const about = _import('./components/about/about.vue');

	Vue.use(VueRouter);

以上笔记借鉴出处[https://segmentfault.com/a/1190000010043013#articleHeader1](https://segmentfault.com/a/1190000010043013#articleHeader1)
***

## vue倒计时功能demo

	<div id="app">
        <button @click="countDown" :disabled="disabled">{{countdown}}</button>
    </div>

	new Vue({
        el: '#app',
        data() {
            return {
                disabled: false,
                countdown: '点击倒计时',
                time: 10
            }
        },
        methods: {
            countDown() {
                let that = this
                let init = setInterval(function () {
                    that.countdown = '剩余(' + that.time + ')秒'
                    that.time--
                    that.disabled = true
                    if (that.time < 0) {
                        that.countdown = '点击倒计时'
                        that.disabled = false
                        that.time = 10
                        clearInterval(init)
                    }
                },1000)
            }
        }
    })

![](http://i.imgur.com/ewkdj8j.png)
***

## 设置vue全局过滤器filter

新建一个filter.js文件，内容如下：

	export function fromTime(now) {
	  var date = new Date(now);
	  var seperator1 = "-";
	  var seperator2 = ":";
	  var month = date.getMonth() + 1;
	  var strDate = date.getDate();
	  if (month >= 1 && month <= 9) {
	    month = "0" + month;
	  }
	  if (strDate >= 0 && strDate <= 9) {
	    strDate = "0" + strDate;
	  }
	  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
	  return currentdate;
	}

在main.js文件中，内容如下：

	import * as filters from './filters/filters.js' // 全局vue filter
	Object.keys(filters).forEach(key => {
	  Vue.filter(key, filters[key])
	});

或者：

	import { fromTime } from './filters/filters.js'
	Vue.filter('fromTime', fromTime)

在模板中直接使用，内容如下：

	<tr class="item" v-for="x in recurrenceList" :key="x">
		<td>预后随访{{x.id}}</td>
        <td>{{x.createTime | fromTime}}</td>
	</tr>
