<template>
    <div class="flex">
        <CommnunityHeader />
    </div>
    <!-- 中部 -->
    <div class="mt-[71px] bg-slate-50">
        <van-tabs v-model:active="state.active">
            <van-tab :title="item.title" v-for="item in state.type" :key="item.id">
                <div class="w-40 h-40 pl-3 pr-3">
                    <img src="https://img.zcool.cn/community/01293a564da3be32f87512f612322b.jpg@1280w_1l_2o_100sh.jpg"
                        alt="" class="w-full h-full rounded-t-md">
                </div>
                <div class="w-40 h-10 pl-3 pr-3 overflow-hidden">
                    <div class="van-multi-ellipsis--l2">
                        这是一段最多显示两行的文字，多余的内容会被省略
                    </div>
                </div>
                <div class="mt-2 w-40 h-10 pl-3 pr-3 flex items-center justify-between rounded-b-lg">
                    <span class="flex-1">author</span>
                    <van-icon name="good-job-o" />
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import CommnunityHeader from '../components/CommnunityHeader.vue';
import { reactive, onMounted } from 'vue';
import { useCommunityStore } from '../store/community'

const store = useCommunityStore();
const state = reactive({
    active: 0,
    type: [
        {
            id: 0,
            title: "全部"
        },
        {
            id: 1,
            title: "变美思路"
        },
        {
            id: 2,
            title: "达人种草"
        },
        {
            id: 3,
            title: "小众寻宝"
        },
        {
            id: 4,
            title: "精选视频"
        },
    ],
})
onMounted(() => {
    state.date = store.getNote()
    console.log(state.date);
})

</script>

<style lang="less" scoped></style>




