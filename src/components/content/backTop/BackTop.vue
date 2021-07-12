<template>
	<div class="back-top">
		<img src="~assets/images/back-top.png"/>
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
	}
</script>

<style scoped>
	.back-top {
		position: fixed;
		bottom: 60px;
		right: 10px;
		z-index: 20;
	}

	.back-top	img {
		width: 45px;
		height: 45px;
	}
		
</style>