<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
			<text>{{name}}</text>
		</view>
		<!-- <song :data="list.song"/> -->
	</view>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'
	import song from '../../components/song.vue'
	const title=ref('你好')
	const changeTitle = ()=>{
		title.value = title.value === '你好'?'Hello':'你好'
	}
	const reverseTitle = computed(()=>{
		return title.value.split('').reverse().join('')
	})
	console.log(getApp().globalData.name);
	const name = getApp().globalData.name
	
	const list = reactive({
		song:{
			img:'https://pic1.zhimg.com/v2-b9a5ba89b1e365d15838d0d5c8f36640_r.jpg',
			title:'美女',
			price:'$100',
			marketPrice:'$200'
		}
	})
	
	const goAbout = ()=>{
		uni.navigateTo({
			url:'/pages/about/about'
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
