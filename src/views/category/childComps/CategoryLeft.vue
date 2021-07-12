<template>
  <div id="category_left">
    <div class="left_tab_item" 
      v-for="(item, index) in leftList"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currIndex == index }" >
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
// getCategoryInfo
export default {
  data() {
    return {
      currIndex: 0,
    };
  },
  props: {
    leftList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currIndex = index;
    }
  }
};
</script>
<style scoped>
#category_left {
  width: 25%;
  background-color: #f6f6f6;
}
.left_tab_item {
  height: 50px;
  line-height: 50px;
}
.left_tab_item p {
  width: 100%;
  text-align: center;
  color: rgb(100, 100, 100);

  display: inline-block;
  line-height: 19px; /* line-height是用来控制border的,其父亲的line-height用来控制整体的行高，自己的用来控制元素的行高 */
  border-left: 5px solid #f6f6f6;
}
.left_tab_item.active {
  background-color: white;
}
.left_tab_item.active p {
  color: var(--color-high-text);
  font-weight: 600;
  border-left: 5px solid var(--color-high-text);
}
</style>
