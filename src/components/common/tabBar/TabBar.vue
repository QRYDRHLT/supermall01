<template>
  <div id="tab-bar">
     <slot></slot>
  </div>
</template>

//在html中别名要在前面加  ~
<script>

export default {
  name: 'TabBar',
  components:{
   
  }
}
</script>

<style scoped>
 #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    font-size: 14px;
    box-shadow:0 -1px 3px rgba('100,100,100,0.1');
    background-color: #f2f2f2;
  }
</style>