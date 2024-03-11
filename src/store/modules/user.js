// import { login, logout, getInfo, usersname, getconfig
//     // , getconfig
//   } from '@/api/user'
//   import { removeYuangong, removeUserinfo, getSign, getHistoryToken, getToken,
//     setToken, removeToken, removeRole, getRole, setRole, setYuangong, getYuangong, setTimes,
//     getUserinfo, setUserinfo, setconfigone, setconfigtwo, setconfigtree, setconfigfour, setbaiduxinxi, setbaidusousuo, setsousuo360, setwxdtl, getwxdtl,
//     getdetailstwo, setdetailstwo, setdetailstree, getdetailstree
//     //  getWx, setWx, removeField, setField, getField
//   } from '@/utils/auth'
  // import { resetRouter } from '@/router'
  const state = {
    token: '123456',// getToken()
    roles: '',//getRole()
    user: [],
    name: '',
    
    
  }
  const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER: (state, data) => {
      state.user = data
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
  }
  
  const actions = {
    // user login
    login({ commit }, userInfo) {
      const { mobile, password, code } = userInfo
      return new Promise((resolve, reject) => {
        login({ mobile: mobile.trim(), password: getSign(password), code: code, token: getSign(getHistoryToken(mobile.trim())) }).then(response => {
          const { data } = response
  
          const token = data.type + ' ' + data.token
          commit('SET_TOKEN', token)
          setToken(token, mobile.trim())
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const { data } = response
  
          if (!data) {
            reject('Verification failed, please Login again.')
          }
          const roles = data.permissions
          const { username, avatar } = data
          const userinfo = data
          setRole(roles)
          commit('SET_ROLES', roles)
          commit('SET_NAME', username)
          commit('SET_AVATAR', avatar)
          commit('SET_USER', data)
          commit('SET_USERINFO', userinfo)
          setUserinfo(userinfo)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // user logout
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_NAME', '')
          removeToken()
          removeRole()
          // removeField()
          // resetRouter()
          resolve()
          removeYuangong()// 员工
          // removeTimeswx()// 微信时间
          removeUserinfo()
          // removeTimes()// 广点通时间
        }).catch(error => {
          reject(error)
        })
      })
    },
    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  