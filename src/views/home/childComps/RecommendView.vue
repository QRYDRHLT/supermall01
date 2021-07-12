<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"> 
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  text-align: center;
}
.recommend-item{
  flex:1
}
.recommend-item img{
  width: 70px;
  margin-bottom: 5px;
}
</style>