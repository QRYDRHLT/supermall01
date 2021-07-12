<template>
	<div class="cart-bot-bar flex">
		<div @click="isCheckAll">
			<input type="checkbox" class="check" id="check" :checked="CheckAll">
			&ensp;<label for="check" > 全选</label>
		 </div>
		<div>合计：{{totalPrice}}</div>
		<div>去结算{{checkLength}}</div>
	</div>
</template>

<script>
	export default {
		name: 'CartBotBar',
		computed: {	
			cartList(){
				return this.$store.state.cartList
			},
			totalPrice() {
				return '￥' + this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue+ item.price * item.count
				},0).toFixed(2)
			},
			checkLength() {
				return '(' + this.cartList.filter(item => item.checked).length + ')';
			},
			// 全选状态
			CheckAll(){
				// find 查找数组中满足函数条件的，并返回满足函数条件的第一个元素，没有则返回undefind
			if(this.cartList.length ==0 )return false;
			 return	!this.cartList.find(item => !item.checked);
			}
		},
		methods: {
			isCheckAll(){
				// 如果有未选中或者全未选中 checkAll()为false
				if(!this.CheckAll){
					this.cartList.forEach(item => item.checked = true);
				}else{//如果全部选中，则取消全选
					this.cartList.forEach(item => item.checked = false)
				}
			}
		}
	}
</script>

<style scoped>
	.cart-bot-bar {
		height: 40px;
		padding: 0 10px;
		font-size: 13px;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ececec;
		border-top: 1px solid #ececec;	
	}
	.cart-bot-bar	.check {
		width: 18px;
		height: 18px;
		overflow: hidden;
		border-radius: 100%;
		vertical-align: bottom;
		border: 1px solid #ececec;
	}
	.cart-bot-bar	.check:checked {
		border: 1px solid var(--color-high-text);
		background: url(~assets/images/detail/check_active.png) no-repeat center;
		background-size: cover;
	}

</style>
