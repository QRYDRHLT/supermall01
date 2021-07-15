<template>
  <!-- <h2>首页</h2> -->
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control-top" 
        :titles="['流行','新款','精选']" 
        @tabItemClick="tabItemClick"
        v-show="isTabShow"
        ref="tabControl1"/>
    <scroll class="content" :probe-type="3"
        :pull-up-load="true"
        @pullingUp="loadMore"
        @scroll="contentScroll" 
        ref="scroll">
      <home-swiper :banners="banners"  ref="hSwiper"/>
      <recommend-view :recommends="recommends"/>
      <home-feature/>
      <tab-control 
          :titles="['流行','新款','精选']" 
          @tabItemClick="tabItemClick"
          ref="tabControl2"/>
      <goods-list class="goods" :goods="goods[currentType].list"/>  
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'; //轮播图
import RecommendView from './childComps/RecommendView'; // 推荐
import HomeFeature from './childComps/HomeFeature'; //本周流行

import NavBar from 'components/common/navBar/NavBar'; //导航栏
import Scroll from 'components/common/scroll/Scroll'; //滚动
import TabControl from 'components/content/tabControl/TabControl'; //菜单控制栏
import GoodsList from 'components/content/goodsList/GoodsList'; //商品

import {getHomeMulitData,getHomeGoods} from 'network/home.js'; //请求数据
import {itemImgListerMixin,backTopMixin} from '../../common/mixin' //重复代码混入

export default {
  name:'Home', 
  components: {
    NavBar, 
    HomeSwiper,
    RecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      // tabControlY即tabControlOffset
      tabControlY: 0,
      isTabShow: false,
      saveY: 0,
    }
  },
  created() {
    this.getHomeMulitData(),

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  // vue重复代码混入 
  mixins: [itemImgListerMixin,backTopMixin],

  activated(){
    // 活跃的时候  设置纵向滚动的y值
    this.$refs.scroll.scrollTo(0,this.saveY,0)
		this.$refs.scroll.refresh();
    
    // console.log('actived');

  },
  deactivated(){
    // 保存不活跃时的纵向滚动的y值 
    this.saveY = this.$refs.scroll.scroll.y
    // 不活跃时取消全局监听
    this.$bus.$off('itemImgLoad',this.itemImgLister)
  },
  // updated(){
  //   this.tabControlY = this.$refs.tabControl2.$el.offsetTop 
  // },
  methods: {
    // 事件监听相关
    tabItemClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.$refs.scroll.scrollerHeight);
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 请求数据相关代码
    getHomeMulitData(){
      getHomeMulitData().then(res => {
      // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list
      })
    },
    //请求商品数据
    getHomeGoods(type){
      const page = this.goods[type].page+1 //请求0+1即第一页
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);//将数值保存在list中
        this.goods[type].page += 1;//page加1
        this.$nextTick(()=>{
          this.tabControlY = this.$refs.tabControl2.$el.offsetTop 
        })
        this.$refs.scroll.finishPullUp()
      })
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    // swiperImgLoad(){
    //   // 轮播图图片加载完成 获取tabControl的offsetTop
    //   this.tabControlY = this.$refs.tabControl2.$el.offsetTop 
    // },
    // 内容滚动
    contentScroll(position){
      // 判断隐藏的tabcontrol是否显示
      this.isTabShow = (-position.y) > this.tabControlY
      // 混入  回到顶部是否显示
      this.listenBackTop(position)
    }

  }

}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-text);
  color: #fff;
  /* text-align: center; */
}
.tab-control-top {
  position: relative;
  top: 44px;
  z-index: 10;
  background-color: #fff;
}
.goods {
  padding: 0 2px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>