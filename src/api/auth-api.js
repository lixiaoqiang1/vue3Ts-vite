import request from '@/utils/request'

export default {
  routers(data) {
    return request.post('/routers', data)
  }
}

