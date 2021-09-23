import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装vuex
Vue.use(Vuex);

const state = {
  // 初始化
  user: window.sessionStorage.getItem('user'),
  number: window.sessionStorage.getItem('number'),
  password: window.sessionStorage.getItem('password'),
  // 购物车清单
  cartList:[],
}
const store = new Vuex.Store({
  state,
  // mutations中不能进行异步操作  限制必须同步操作
  mutations, 
  actions,
  getters
})

//导出store,挂载
export default store