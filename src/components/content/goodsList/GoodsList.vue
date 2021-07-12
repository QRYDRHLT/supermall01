<template>
  <div class="goods-list">
    <!-- 遍历goods商品数据，并将数据赋值给item传给子组件goodsitem -->
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props:{
    goods:{
      type: Array,
      default(){
        return[]
      }
    }
  },
  components: {
    GoodsListItem
  }                    
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>