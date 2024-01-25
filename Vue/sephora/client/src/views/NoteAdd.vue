<template>
    <div>
        <!-- 头部 -->
        <div class="mb-1 shadow-sm fixed w-full bg-white mt-4 top-0">
            <van-row >
            <van-col span="8"><van-icon name="arrow-left" size="25" class="ml-2 mt-4" /></van-col>
            <van-col span="8" class="text-center mt-5">帖子</van-col>
            <van-col span="8" class="text-center mt-5 " @click="onSubmit">发布</van-col>
        </van-row>
        </div>       
        <!-- 上传 -->
        <div class="pt-[61px]">
            <van-uploader v-model="picture" :max-count="1" preview-size="375" />
            <van-cell-group inset>
                <van-field v-model="value" placeholder="请输入标题" />
            </van-cell-group>
            <div>
                <QuillEditor theme="snow" placeholder="请输入正文..." v-model:content="content" content-type="html" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'
import axios from '../api/index';
// import { showToast} from 'vant';
import { useRouter } from 'vue-router';

const  router = useRouter();
const picture = ref([]);
const content = ref('');
const value = ref('');
const username = JSON.parse(sessionStorage.getItem('userInfo')).username
const userId = JSON.parse(sessionStorage.getItem('userInfo')).id
const onSubmit = async() =>{
    const res = await axios.post('/noteSet',{
        title :value.value,
        note_content:content.value,
        head_image:picture.value[0].content,
        username:username,
        type:"变美思路",
        userId:userId
    })
    console.log(res.msg);
    // showToast(res.msg)
    setTimeout(()=>{
        router.push('/community')
    },1500)
}
</script>

<style lang="scss" scoped></style>