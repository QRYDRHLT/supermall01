<template >
  <tab-bar>
    <tab-bar-item path='/home' :activeColor='activeColor'>
      <img slot="item-icon" src="~assets/images/tabbar/icon01.png">
      <img slot="item-active" src="~assets/images/tabbar/icon01_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' :activeColor='activeColor'>
      <img slot="item-icon" src="~assets/images/tabbar/icon02.png">
      <img slot="item-active" src="~assets/images/tabbar/icon02_active.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart' :activeColor='activeColor'>
      <img slot="item-icon" src="~assets/images/tabbar/icon03.png">
      <img slot="item-active" src="~assets/images/tabbar/icon03_active.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' :activeColor='activeColor'>
      <img slot="item-icon" src="~assets/images/tabbar/icon04.png">
      <img slot="item-active" src="~assets/images/tabbar/icon04_active.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>   
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar.vue'
import TabBarItem from 'components/common/tabBar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data(){
    return{
      activeColor:'var(--color-text)'
    }
  }
}
</script>

<style scoped>
</style>