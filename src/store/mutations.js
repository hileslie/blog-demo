const mutations = {
  // 全部文章列表
  GET_ARYICLES_LISTS: (state, articleLists) => {
    state.articleLists = articleLists
  },
  // 归档文章列表
  GET_ARCHIVES: (state, archives) => {
    state.archives = archives
  },

  // 分类文章列表
  GET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },

  // 分类文章列表
  GET_TAGS: (state, tags) => {
    state.tags = tags
  }
}

export default mutations
