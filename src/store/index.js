import {createStore} from 'vuex'//导入createStore构造函数
export default createStore({ 
    state:{ //Vuex的状态，实际上就是存数据的地方
      menuData:[],
      token: '123456',// getToken()
      person:{
          name:'jack',
          age:5000
      }
    },
    getters:{ //提供获取Vux状态的方式, 注意在组件中调用时getPerson是以属性的方式被访问
      menuData(state){
        return state.menuData
      },
      getPerson(state){
        return state.person
      }
    },
    mutations:{ //提供直接操作Vuex的方法，注意mutations里的方法中不能有任何异步操做
      menuData(state, value){
        console.log('menuData--',value)
        //第一个参数state为Vuex状态；第二个参数为commit函数传来的值
        state.menuData = value
      },
      ageGrow(state, value){
        console.log(value)
        //第一个参数state为Vuex状态；第二个参数为commit函数传来的值
        state.person.age = value
      }
    },
    actions:{ //提供通过mutations方法来简介操作Vuex的方法
      setMenusData(context, value){ 
        const data = [
          {
            path: '/home',
            name: 'home',
            meta: {
              title: '首页',
              icon: 'HomeFilled'
            },
            children:[]
          },
          {
            path: '/shezhi',
            name: 'shezhi',
            meta: {
              title: '设置',
              icon: 'UserFilled'
            },
            children:[]
          },
          {
            path: '/user',
            name: 'user',
            meta: {
              title: '个人中心',
              icon: 'UserFilled'
            },
            children: [{
                path: '/user',
                name: 'User',
                meta: {
                  title: '用户',
                  icon: ''
                }
              },
              {
                path: '/about',
                name: 'User',
                meta: {
                  title: '关于',
                  icon: ''
                },
                children: [{
                  path: '/about',
                  name: 'Roles',
                  meta: {
                    title: '角色管理',
                    icon: ''
                  },
                }, ]
              }
            ]
          },
        ]
        context.commit('menuData', data)
      },
      ageGrow(context, value){ 
        context.commit('ageGrow', value)
      }
    }, 
})
