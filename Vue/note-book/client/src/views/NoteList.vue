<template>
    <div class="note-list">
        <ul v-if="state.noteList.length">
            <li v-for="(item,index) in state.noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <p class="time">{{ item.c_time }}</p>
                <p class="title">{{ item.title }}</p>
            </li>
        </ul>
        <p class="empty" v-else>当前分类下还没有文章哦~~</p>
    </div>
</template>

<script setup>
// 页面加载中发请求，拿到当前分类的数据
import { onBeforeMount,onMounted,onUnmounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { reactive } from 'vue';
import  axios  from '../api'

const router = useRouter(); // 路由实例
const route = useRoute(); // 当前路由详情
const goNoteDetail = (id)=>{
    router.push({path:'/noteDetail',query:{id:id}})
}

// console.log(route.query.title); // 当前路由详情

onMounted(async() => {
    // 页面加载中发请求，拿到当前分类的数据
    const { data } = await axios.post('/findNoteListByType',{
        note_type: route.query.title
    })
    state.noteList = data
    console.log(data);
})

const state  = reactive({
    noteList: []
})

</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 50px;
        grid-column-gap: 30px;
        li{
            img{
                width: 100%;
                height: 4rem;
                border-radius: 0.27rem;
            }
        }
        .time{
            font-size: 0.37rem;
            color: rgba(16,16,16,1);
            margin: 10px 0 5px 0;
        }
        .title{
            width: 3.5rem;
            font-size: 0.37rem;
            color: rgba(16,16,16,1);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>