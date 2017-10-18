const getters = {
  // 全部文章列表
  articleLists: state => state.articleLists,

  // 归档文章列表
  archives: state => state.archives,

  // 分类文章列表
  categories: state => state.categories,

  // 标签文章列表
  tags: state => state.tags
}
export default getters
