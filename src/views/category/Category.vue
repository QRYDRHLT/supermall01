<template>
  <div id="category">
    <nav-bar class="category_nav"><div slot="center">分类</div></nav-bar>
    <scroll class="category-content" ref="scroll">
      <div class="main">
        <category-left ref="left" :leftList="leftList"></category-left>
      </div>
    </scroll>
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
      leftList: null
    };
  },
  created() {
    getCategory().then((res)=>{
      this.leftList = res.data.data.category.list;
    })
  },
  actived(){
    this.$refs.scroll.refresh()
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
.category-content {
  height: calc(100vh - 44px - 49px);
}
.main {
  display: flex;
  font-size: 15px;
  
}

</style>
