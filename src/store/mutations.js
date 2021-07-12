import {
  ADD_CART_COUNT,
  ADD_CART_PUSH
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
  }
}