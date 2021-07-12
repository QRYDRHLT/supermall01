<template>
	<div class="cart-list-wrap">
		<cart-list-item v-for="item in cartList" 
				:item="item" 
				:key="item.index">
		</cart-list-item>
	</div>
</template>

<script>
	import CartListItem from './CartListItem'
	export default {
		name: "CartList",
		components:{
			CartListItem
		},
		computed: {
			cartList(){
				return this.$store.state.cartList
			}
		}
	}
</script>

<style scoped>
	.cart-list-wrap {
		height: 100%;
	}
</style>