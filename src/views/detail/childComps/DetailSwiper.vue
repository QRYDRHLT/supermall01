<template>
	<swiper class="banner">
		<swiper-item v-for="item in banners" :key="item.index">
			<a :href="item">
				<img :src="item">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper';
	export default {
		name: 'DetailSwiper',
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.banner {height: 300px;overflow: hidden;}
</style>
