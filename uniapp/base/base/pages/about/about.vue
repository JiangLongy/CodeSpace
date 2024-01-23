<template>
	<view>
		about pages
	</view>
	<view class="btn">
		<button type="default">按钮</button>
		<view class="iconfont icon-yinle"></view>
		
	</view>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
	onMounted(()=>{
		const reqTask=uni.request({
			url:'https://mock.presstime.cn/mock/65a9154eb02591272cc21c61/movie/movieList',
			method:'GET',
			success(res) {
				console.log(res);
				
				uni.setStorage({
					key:'movieName',
					data:res.data.movieList[0].nm,
					success(){
						uni.showToast({
							title:'保存成功',
							duration:2000,
							icon:'success'
						})
					}
				})
			}
		})
	})
	// onUnmounted(()=>{
	// 	reqTask.abort()
	// })
</script>

<style lang="scss">
.btn{
	button{
		width: 750rpx;//rpx根据屏幕宽度制定的响应式单位
	}
}
</style>
