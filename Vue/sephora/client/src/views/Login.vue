<template>
    <div>
        <div class="text-center font-black tracking-[.50em] text-3xl mt-[100px]">
            SEPHORA
        </div>
        <van-form @submit="onSubmit" class="mt-20">
            <van-cell-group inset>
                <van-field
                    v-model="state.username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="state.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" color="#000000">
                    登录
                </van-button>
            </div>
        </van-form>
        <p 
            class="text-center" 
            @click="register"
        >
            新用户？点击这里注册
        </p>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import axios from '../api';


const state = reactive({
    username:'',
    password:''
})
const router = useRouter()

const onSubmit = async () => {
// 发请求,将state.username, state.password传给后端
  const res = await axios.post('/login',{
    username:state.username,
    password:state.password
  })
  sessionStorage.setItem('userInfo',JSON.stringify(res.data))
  router.push('/layout')
}

//跳转到注册页面
const register = () => {
  router.push('/register')
}
</script>

<style lang="less" scoped></style>