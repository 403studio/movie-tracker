import Api from '@/services/Api'

export default {
  index (data) {
    return Api().get('/movies', data)
  },
  post (data) {
    return Api().post('/movie', data)
  }
}
