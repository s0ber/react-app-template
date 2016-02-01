import get from 'utils/req/get'

export default function() {
  return get('/categories').then((res) => {
    if (res.categories) {
      return {
        pageId: 'page1'
      }
    }
  })
}
