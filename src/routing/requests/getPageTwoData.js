import get from 'utils/req/get'

export default function(positionId) {
  return get(`/positions/${positionId}`).then((res) => {
    if (res.position) {
      return {
        pageId: 'page2'
      }
    }
  })
}
