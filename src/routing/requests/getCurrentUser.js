import get from 'utils/req/get'

export default function() {
  return get('/current_user').then((res) => {
    if (res.user) {
      return res.user
    }
  })
}

