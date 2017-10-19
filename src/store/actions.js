const articles = require('@articles/articles.json')
// 数组去重
function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

// 文章全部列表
const articlesArr = Object.keys(articles).map((name) => {
  return {
    name: name,
    title: articles[name].title,
    path: articles[name].path,
    tags: articles[name].tags,
    categories: articles[name].categories,
    date: articles[name].date,
    cover: articles[name].cover,
    desc: articles[name].desc
  }
})
articlesArr.sort(function (a, b) {
  return Date.parse(b.date) - Date.parse(a.date)
})
// console.log(articlesArr)

// 时间归档
const timeArr = []
// 分类
const typeArr = []
// 标签
const tagsArr = []
for (let i = 0, _len = articlesArr.length; i < _len; i++) {
  timeArr.push(articlesArr[i].date.substring(0, 4))
  typeArr.push(articlesArr[i].categories)
  articlesArr[i].tags.forEach((value, index) => {
    tagsArr.push(value)
  })
}

const actions = {
  // 获取全部文章列表
  getArticleList ({commit}) {
    commit('GET_ARYICLES_LISTS', articlesArr)
  },

  // 获取归档文章列表
  getArchives ({commit}) {
    const time = unique(timeArr).reverse()
    let archives = {}
    let archivesArr = []
    for (let i = 0, _len = time.length; i < _len; i++) {
      archives[time[i]] = []
      for (let j = 0, _len = articlesArr.length; j < _len; j++) {
        if (time[i] === articlesArr[j].date.substring(0, 4)) {
          archives[time[i]].push(articlesArr[j])
        }
      }
      archivesArr.unshift(archives[time[i]])
    }
    commit('GET_ARCHIVES', archivesArr)
  },

  // 获取分类文章列表
  getCategories ({commit}) {
    const types = unique(typeArr)
    let categories = {}
    for (let i = 0, _len = types.length; i < _len; i++) {
      categories[types[i]] = []
      for (let j = 0, _len = articlesArr.length; j < _len; j++) {
        if (types[i] === articlesArr[j].categories) {
          categories[types[i]].push(articlesArr[j])
        }
      }
    }
    commit('GET_CATEGORIES', categories)
  },

  // 获取分类文章列表
  getTags ({commit}) {
    const newTagsArr = unique(tagsArr)
    let tagsLists = {}
    for (let i = 0, _len = newTagsArr.length; i < _len; i++) {
      tagsLists[newTagsArr[i]] = []
      for (let j = 0, _len = articlesArr.length; j < _len; j++) {
        if (articlesArr[j].tags.indexOf(newTagsArr[i]) !== -1) {
          tagsLists[newTagsArr[i]].push(articlesArr[j])
        }
      }
    }
    commit('GET_TAGS', tagsLists)
  }
}

export default actions
