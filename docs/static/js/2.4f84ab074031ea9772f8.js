webpackJsonp([2],{"V8+s":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("X4to"),o=n("o7Pn"),a=o(null,r.a,null,null,null);t.default=a.exports},X4to:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v('{\n"title": "vue",\n"tags": ["vue-cli", "vue"],\n"date": "2017-07-13",\n"desc": "vue",\n"cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1507613119&di=577aadc9b2da7ea63edaa012a51950b4&src=http://img.mp.itc.cn/upload/20161008/e8fadf087de643e8862d2836d0a65bba_th.png"\n}')]),e._v(" "),n("h2",[e._v("路由懒加载")]),e._v(" "),n("p",[e._v("使用普通的import路由导出方式，打包时会打包到一个js文件中，但当项目大的时候，js文件夹会过大，导致页面初始化加载时非常慢：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("import Vue from 'vue'\nimport App from './App'\nimport VueRouter from 'vue-router';\n\nimport about from './components/about/about.vue'\nimport join from './components/join/join.vue'\n\nVue.use(VueRouter)\n\nconst routes = [\n\t{\n\t\tpath: '/about',\n\t\tcomponent: about\n\t},\n\t{\n\t\tpath: '/join',\n\t\tcomponent: join\n\t}\n]\n\nconst router = new VueRouter({\n  routes\n}\n\nnew Vue({\n  el: '#app',\n  template: '<App/>',\n  components: {App},\n  router\n})\n")])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("这时使用路由懒加载模式，可以按需加载路由，优化页面的加载速度：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("import Vue from 'vue'\nimport App from './App'\n\nimport VueRouter from 'vue-router';\n\nconst home = resolve => require(['./components/home/home.vue'], resolve);\nconst about = resolve => require(['./components/about/about.vue'], resolve);\n\nVue.use(VueRouter);\n")])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("但是在开发时，过多的路由懒加载，会导致修改代码，页面热更新时的速度非常慢，不利于开发，这时可以自定义封装一个方法，例如_import()方法，在正式环境下才使用懒加载：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("import Vue from 'vue'\nimport App from './App'\n\nimport VueRouter from 'vue-router';\n\nconst _import = require('./_import_' + process.env.NODE_ENV);\n\nconst home = _import('./components/home/home.vue');\nconst about = _import('./components/about/about.vue');\n\nVue.use(VueRouter);\n")])]),e._v(" "),n("p",[e._v("以上笔记借鉴出处"),n("a",{attrs:{href:"https://segmentfault.com/a/1190000010043013#articleHeader1"}},[e._v("https://segmentfault.com/a/1190000010043013#articleHeader1")])]),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("vue倒计时功能demo")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("<div id=\"app\">\n    <button @click=\"countDown\" :disabled=\"disabled\">{{countdown}}</button>\n</div>\n\nnew Vue({\n    el: '#app',\n    data() {\n        return {\n            disabled: false,\n            countdown: '点击倒计时',\n            time: 10\n        }\n    },\n    methods: {\n        countDown() {\n            let that = this\n            let init = setInterval(function () {\n                that.countdown = '剩余(' + that.time + ')秒'\n                that.time--\n                that.disabled = true\n                if (that.time < 0) {\n                    that.countdown = '点击倒计时'\n                    that.disabled = false\n                    that.time = 10\n                    clearInterval(init)\n                }\n            },1000)\n        }\n    }\n})\n")])]),e._v(" "),n("p",[n("img",{attrs:{src:"http://i.imgur.com/ewkdj8j.png",alt:""}})]),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("设置vue全局过滤器filter")]),e._v(" "),n("p",[e._v("新建一个filter.js文件，内容如下：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('export function fromTime(now) {\n  var date = new Date(now);\n  var seperator1 = "-";\n  var seperator2 = ":";\n  var month = date.getMonth() + 1;\n  var strDate = date.getDate();\n  if (month >= 1 && month <= 9) {\n    month = "0" + month;\n  }\n  if (strDate >= 0 && strDate <= 9) {\n    strDate = "0" + strDate;\n  }\n  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;\n  return currentdate;\n}\n')])]),e._v(" "),n("p",[e._v("在main.js文件中，内容如下：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("import * as filters from './filters/filters.js' // 全局vue filter\nObject.keys(filters).forEach(key => {\n  Vue.filter(key, filters[key])\n});\n")])]),e._v(" "),n("p",[e._v("或者：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v("import { fromTime } from './filters/filters.js'\nVue.filter('fromTime', fromTime)\n")])]),e._v(" "),n("p",[e._v("在模板中直接使用，内容如下：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":""}},[e._v('<tr class="item" v-for="x in recurrenceList" :key="x">\n\t<td>预后随访{{x.id}}</td>\n    <td>{{x.createTime | fromTime}}</td>\n</tr>\n')])])])}],a={render:r,staticRenderFns:o};t.a=a},"ls+V":function(e,t,n){e.exports=n("V8+s")}});
//# sourceMappingURL=2.4f84ab074031ea9772f8.js.map