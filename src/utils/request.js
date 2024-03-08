import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import setting from '@/settings'
import { getToken, getSign } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key

      // please modify it according to the actual situation
      const time = new Date().getTime()
      config.headers['Authorization'] = getToken()
      let sign = 'platform=zhiyan_web&timestamp=' + time
      const paramsNew = {}
      if (config.params) {
        const params = Object.keys(config.params).sort()
        for (const item of params) {
          if (config.params[item] === '' || config.params[item] === undefined) continue
          paramsNew[item] = config.params[item]
          sign += '&' + item + '=' + config.params[item]
        }
        config.params = paramsNew
      }
      sign += '&sign=' + setting.signQz
      if (config.data) {
        let d = ''
        if (typeof config.data !== 'string') {
          d = JSON.stringify(config.data)
        } else {
          d = config.data
        }
        sign += '&data=' + d
      }
      sign = getSign(sign)
      config.headers['sign'] = sign
      config.headers['timestamp'] = time
    }
    return config
  },
  error => {
    // do something with request error
    //  // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      if (res.code !== 403) {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 2 * 1000
        })
      }
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    //  // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
