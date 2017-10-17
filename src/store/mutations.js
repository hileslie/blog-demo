const mutations = {
  // 全部文章列表
  GET_ARYICLES_LISTS: (state, articleLists) => {
    state.articleLists = articleLists
  },
  // 归档文章列表
  GET_ARCHIVES: (state, archives) => {
    state.archives = archives
  }
}

export default mutations
