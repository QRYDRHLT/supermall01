<template>
    <div class="home-swiper">
      <swiper>
        <!-- banners.list是banner数据的一个数组 -->
        <swiper-item v-for="item in banners" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" @load="swiperImgLoad">
          </a>
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    swiperImgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>