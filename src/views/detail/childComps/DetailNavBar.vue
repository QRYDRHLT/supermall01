<template>
	<nav-bar class="nav-bar">
		<div slot="left">
			<div @click="backFn">
				<img src="~assets/images/back.svg" alt="" class="back-icon">
			</div>
		</div>
		<div slot="center">
			<div class="nav-center-content">
				<div v-for="(item,index) in titles" :key="item.index"
					 class="nav-center-item"
					 :class="{active: currentIndex === index}"
					 @click="itemClick(index)">
				  {{item}}</div>
			</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navBar/NavBar.vue'
	export default {
		name: 'DetailNavBar',
		components:{
			NavBar
		},
		data() {
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex: 0
			}
		},
		methods: {
			backFn() {
				this.$router.back()
			},
			itemClick(index){
				this.currentIndex = index;
				this.$emit('titleClick', index)
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		border-bottom: 1px solid #ececec;
  }
	.back-icon {
		width: 22px;
		height: 22px;
		margin-left: 5px;
		vertical-align: middle;
	}
	.nav-center-content {
		display: flex;
		font-size: 13px;
		text-align: center;
  }
	.nav-center-item {
		flex: 1;
	}
	.active{
		color: var(--color-high-text)
	}
	
</style>
