<template>
  <div id="category">
    <nav-bar class="category_nav"><div slot="center">分类</div></nav-bar>
      <div class="main">
        <scroll class="category-content-left" ref="scroll">
          <category-left :leftList="leftList" ref="categoryLeft" @itemClick="itemClick"/>
        </scroll>
        <scroll class="category-content-right" ref="scroll">
          <div class="category-right" ref="categoryRight">
            <img :src="rightImg"/>
          </div>
        </scroll>
      </div>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
import CategoryLeft from "./childComps/CategoryLeft.vue";
import Scroll from "components/common/scroll/Scroll"

import { getCategory } from "network/category.js";
export default {
  components: {
    NavBar,
    Scroll,
    CategoryLeft
  },
  data() {
    return {
      leftList: null,
      rightImg: require("../../assets/images/category/1.png")
    };
  },
  created() {
    getCategory().then((res)=>{
      this.leftList = res.data.data.category.list;
    })
  },
  actived(){
    this.$refs.scroll.refresh()
  },
  methods: {
    // 左边列表被点击，拼接右边对应图片路径
    itemClick(index){
      this.rightImg = require("../../assets/images/category/"+(index+1)+".png")
    }
  }
};
</script>
<style scoped>
.category {
    height: 100vh;
}
.category_nav {
  position: relative;
  color: white;
  background-color: var(--color-text);
  z-index: 10;
}
.category-content-left {
  float: left;
  width: 25%;
  height: calc(100vh - 44px - 49px);
}
.category-content-right {
   float: right;
   width: 75%;
   height: calc(100vh - 44px - 49px);
}
.category-right{
  width: 100%
}
.category-right img{
  width: 100%;
}

</style>
