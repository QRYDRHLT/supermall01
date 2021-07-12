<template>
  <div id="detail"> 
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="detailNavBar"/>
      <!-- <p style="position:fixed;top:50;z-index:20;background-color:#fff">{{product}}</p> -->
    <scroll :probeType="3" 
      class="content"
      @scroll="contentScroll"
      ref="scroll">
      <detail-swiper :banners="banners" ref="banners"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <!-- :detail-info="detailInfo" 绑定的值有时候时不区分大小写，读成detailinfo 最好用“ - ”隔开-->
      <detail-goods-info :detail-info="detailInfo" @goodsImgLoad="goodsImgLoad"/>
      <detail-param-info :param-info="paramInfo" ref="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo"/>
      <goods-list :goods="recommendInfo" ref="recommendInfo"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"/>
    <detail-bot-bar @addCart="addCart"/>
    <toast :message="message" v-show="isToastShow"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goodsList/GoodsList'
import Toast from 'components/common/toast/Toast'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBotBar from './childComps/DetailBotBar'

import {getDetail,Goods,Shop,Param,getRecommend} from 'network/detail'
import {debounce} from '../../common/utils'
import {itemImgListerMixin,backTopMixin} from '../../common/mixin'
export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBotBar,
    Scroll,
    GoodsList,
    Toast
  },
  data(){
    return{
      iid: null,
      banners: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommendInfo: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: 0,
      // product: null
      message: '默认文字',
      isToastShow: false
    }
  },
  // vue重复代码混入
  mixins: [itemImgListerMixin,backTopMixin],
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res)=>{
      console.log(res);
      const result = res.data.result
      // 获取轮播图
      this.banners = result.itemInfo.topImages

      //获取基本信息
      this.goods = new Goods(result.itemInfo,result.columns,result.shopInfo)

      //获取店铺信息
      this.shop = new Shop(result.shopInfo)

      // 获取商品详情图片
      this.detailInfo = result.detailInfo

      //获取商品参数或尺寸
      this.paramInfo = new Param(result.itemParams.info,result.itemParams.rule,result.itemParams.image)

      //获取评论信息
      if(result.rate.cRate !== 0){
					this.commentInfo = result.rate.list
				}
    }),
    getRecommend().then((res)=>{
      this.recommendInfo = res.data.data.list
    })
    // 获取各个主题的offsetTop值
    this.getThemeTopYs = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.banners.$el.offsetTop)
      this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommendInfo.$el.offsetTop)
    },100)
  },
  destoryed(){
    // 离开时 取消监听
    this.$bus.$off('itemImgLoad',this.itemImgLister)
  },
  methods: {
    goodsImgLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },
    titleClick(index){     
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position){ 
      // 遍历 themeTopYs的值 =>分段=> currentIndex = i
      const positionY = -position.y
      const length = this.themeTopYs.length  
      for(let i=0; i<length; i++){
        // 当 i 不重复时再赋值
        if(this.currentIndex!==i&&((i<length-1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])
          ||(i===length-1 && positionY>=this.themeTopYs[i]))){
          this.currentIndex = i
          this.$refs.detailNavBar.currentIndex = this.currentIndex
        }  
      }
      // hack方法  themeTopY[0,100,1000,2000,Number.Max_value],增加一个值，但是又不遍历这个值
      // for(let i=0; i<length-1; i++){  
      //   if(this.currentIndex!==i&&(positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])){
      //     this.currentIndex = i
      //     this.$refs.detailNavBar.currentIndex = this.currentIndex
      // }  
      this.listenBackTop(position) 
    },
    addCart(){
      // 点击加入购物车，集中商品数据
      this.isToastShow = true;
      this.message = '加入购物车成功';
      setTimeout(() => {
        this.isToastShow = false;
        this.message = "";
      },1500)
      const product = {
        iid: this.iid,
        image: this.banners[0],
        desc: this.goods.desc,
        price: this.goods.lowNowPrice
      }
      // 将商品数据保存到vuex  action进行分发
      this.$store.dispatch('addCart',product)
    }
  }
}
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 10;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 11;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
  z-index: 10;
}
</style>