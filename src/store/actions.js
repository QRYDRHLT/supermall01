import {
  ADD_CART_COUNT,
  ADD_CART_PUSH
} from './mutations-types'
export default {
  addCart(context, payload){
    let oldProduct = context.state.cartList.find(function(item){
      return item.iid === payload.iid
    })
    if(oldProduct){
      context.commit(ADD_CART_COUNT,oldProduct)
    }else {
      context.commit(ADD_CART_PUSH,payload)
    }
  }
}