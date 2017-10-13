const articles = require('@articles/articles.json')
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
const actions = {
  getArticleList ({commit}) {
    commit('GET_ARYICLES_LISTS', articlesArr)
  }
}

export default actions
