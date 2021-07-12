<template>
  <div class="tab-control">
    <!-- 只需要传文字 -->
    <div v-for="(item,index) in titles" 
      :class="{active:index===currentIndex}" 
      :key="item" 
      class="tab-control-item"
      @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return ['其一','其二','其三']
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index){
      this.currentIndex = index;
      // 发送事件并传入参数index给home
      this.$emit('tabItemClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 3px 5px;
}
.active {
  color: var(--color-high-text)
}
.active span {
  border-bottom: 3px solid red
}
</style>