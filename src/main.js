import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
Vue.config.productionTip = false

// 图片懒加载
Vue.use(VueLazyload,{
  // loading: require('assets/images/loading.jpg')
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
  mode: 'history'
}).$mount('#app')
