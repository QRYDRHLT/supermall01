<template>
	<div class="cart-wrap">
		<nav-bar class="cart-nav">
			<div slot="center">购物车({{cartList.length}})</div>
		</nav-bar>
		<scroll :probeType="3" 
				class="cart-content" 
				ref="scroll">
			<cart-list></cart-list>
		</scroll>
		<cart-bot-bar></cart-bot-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navBar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll'
	import CartList from './childComps/CartList.vue'
	import CartBotBar from './childComps/CartBotBar.vue'

	import { mapGetters } from 'vuex'

	export default {
		name: 'Cart',
		components: {
			NavBar,
			Scroll,
			CartList,
			CartBotBar,
		},
		computed: {
			...mapGetters(['cartList'])
		},
		actived(){
			this.$refs.scroll.refresh()
		}
	}
</script>

<style scoped>
	.cart-wrap {
		height: 100vh;
	}
	.cart-nav {
		color: #fff;
		background-color: var(--color-text);
		position: relative;
		z-index: 10;
	}
	.cart-content {
		height: calc(100vh - 44px - 49px - 42px);
		overflow: hidden;
	}
	.tip-content {
		
		font-size: 16px;
		font-weight: 500;
	}
</style>
