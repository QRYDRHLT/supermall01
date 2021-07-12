<template>
  <div class="cart-list-item flex">
    <div class="cart-list-left flex">
			<input type="checkbox" class="check" v-model="item.checked">
			<img :src="item.image" alt="" class="goods-img">
		</div>
		<div class="cart-list-right">
			<div class="goods-name one-txt-cut">{{item.desc}}</div>
			<div class="goods-info flex">
				<span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    item:{
      type: Object,
      default(){
        return {}
      }
    }
  },
	
}
</script>

<style scoped>
.cart-list-item {
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
	width: 32%;
	align-items: center;
}
.cart-list-left	.check {
	width: 20px;
	height: 20px;
	overflow: hidden;
	border-radius: 100%;
	border: 1px solid #999;
}
.cart-list-left	.check:checked {
	background: url(~assets/images/detail/check_active.png) no-repeat center;
	background-size: cover;
	border-color: transparent;
}
.cart-list-left	.goods-img {
	width: 70px;
	height: 86px;
	overflow: hidden;
	border: 2px solid #ececec;
	margin:0 10px;
	border-radius: 6px;
	vertical-align: middle;
}
.cart-list-right {
	width: 68%;
	position: relative;	
}	
.cart-list-right	.goods-name {
	width: 100%;
	font-size: 13px;
}
.cart-list-right	.goods-info {
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;}
.cart-list-right	.goods-info	.price {
	color: #F9CD0B;
}

</style>