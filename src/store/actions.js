const articles = require('@articles/articles.json')
// 文章全部列表
const articlesArr = Object.keys(articles).map((name) => {
  return {
    name: name,
    title: articles[name].title,
    tags: articles[name].tags,
    categories: articles[name].categories,
    date: articles[name].date,
    cover: articles[name].cover,
    desc: articles[name].desc
  }
})
// 时间归档
const timeArr = []
for (let i = 0, _len = articlesArr.length; i < _len; i++) {
  timeArr.push(articlesArr[i].date.substring(0, 4))
}
function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

const actions = {
  // 获取全部文章列表
  getArticleList ({commit}) {
    commit('GET_ARYICLES_LISTS', articlesArr)
  },

  // 获取归档文章列表
  getArchives ({commit}) {
    const time = unique(timeArr)
    let archives = {}
    for (let i = 0, _len = time.length; i < _len; i++) {
      archives[time[i]] = []
      for (let j = 0, _len = articlesArr.length; j < _len; j++) {
        if (time[i] === articlesArr[j].date.substring(0, 4)) {
          archives[time[i]].push(articlesArr[j])
        }
      }
    }
    console.log(archives)
    // let archives = []
    for (let i in archives) {
      console.log('key:' + i + ', value:' + archives[i])
    }
    commit('GET_ARCHIVES', archives)
  }
}

export default actions
