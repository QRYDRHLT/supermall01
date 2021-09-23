import {
  ADD_CART_COUNT,
  ADD_CART_PUSH,
  GET_USER,
} from './mutations-types'
export default {
  // playload 载荷
  [ADD_CART_COUNT](state,playload){
    playload.count++
  },
  [ADD_CART_PUSH](state,playload){
    playload.count = 1
    playload.checked = true
    state.cartList.push(playload)
  },
  // 登录时存储user
  [GET_USER](state,playload){
    state.user = playload.user
    state.number = playload.number
    state.password = playload.password
    window.sessionStorage.setItem('user',playload.user)
    window.sessionStorage.setItem('number',playload.number)
    window.sessionStorage.setItem('password',playload.password)
  },
  // 登出时清除用户名
  // [LOG_OUT](state,playload){
  //   state.user = null
  //   window.sessionStorage.removeItem('user')
  // }
}