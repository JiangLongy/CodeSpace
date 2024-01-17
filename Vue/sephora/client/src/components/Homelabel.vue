<template>
    <div class="w-full">
        <van-tabs v-model:active="active" animated sticky offset-top="10">
            <van-tab v-for="item in state.kinds" :title="item">
                <van-swipe :autoplay="3000" lazy-render class="h-80">
                    <van-swipe-item v-for="image in state.images" :key="image">
                        <img :src="image" class="w-full h-full" />
                    </van-swipe-item>
                </van-swipe>
            </van-tab>
        </van-tabs>
        <div class="ml-5 mr-5 h-10 flex flex-col justify-center shadow-lg rounded-md mt-n5 relative bg-white"
            style="bottom: -10px; transform: translateY(-80%);">
            <van-row gutter="150">
                <van-col span="8" class="ml-2 text-sm">Hi {{ username }}</van-col>
                <van-col span="0" class="mr-2 text-xs float-right text-slate-400 mt-1">
                    花样玩转会员积分
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
        </div>
        <van-row class="text-xs" gutter="0">
            <van-col span="8">100%官方正品</van-col>
            <van-col span="8">每周精选上新</van-col>
            <van-col span="8">多重惊喜礼赠</van-col>
        </van-row>
        <van-swipe width="65" :loop="false" :show-indicators="false" class="mt-4 ml-2">
            <van-swipe-item v-for="item in state.navigation" :key="item">
                <div class="flex flex-col items-center"> <!-- 使用 flex 布局和 items-center 居中 -->
                    <div class="w-12 h-12 rounded-full overflow-hidden mb-2"> <!-- 图片容器 -->
                        <img :src="item.image" alt="" class="w-full h-full object-center">
                    </div>
                    <div class="text-xs">{{ item.name }}</div> <!-- 文字 -->
                </div>
            </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script setup>

const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
const username = userInfo.username

const state = {
    kinds: ["精选", "护肤", "彩妆", "香水", "小众", "美发美体", "男士"],
    images: [
        'https://img.zcool.cn/community/015dc25a937d40a801219231c022d7.jpg@2o.jpg',
        'https://img.zcool.cn/community/014bff554546db0000019ae95d0b32.jpg@2o.jpg',
        'https://img.zcool.cn/community/010cd75e3ad712a80120a89520bfcc.jpg@1280w_1l_2o_100sh.jpg',
        'https://bpic.588ku.com/back_origin_min_pic/21/06/16/e3ad65dfe1ffb3632357f43760888b06.jpg'
    ],
    navigation: [
        {
            name: "每周惠选",
            image: 'https://ts1.cn.mm.bing.net/th/id/R-C.e3e38ffb80b96d6f20c6a46b703874f2?rik=%2fY2faS8VSV%2fiLg&riu=http%3a%2f%2fimg.sccnn.com%2fbimg%2f338%2f55066.jpg&ehk=qvrZ1AWYbpq9D0GgKGwBTnnDIYePT3BVpNz26SNEp0U%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            name: "畅销榜单",
            image: 'https://www.shinerayad.com/upfile/attached/20224251953397620334.jpg'
        },
        {
            name: "礼物套装",
            image: 'https://pic.sj33.cn/work/202104/1EuL1SRuszCmK4hmTqMkSmFiPqLzvGdb5JYRgMOn.jpg'
        },
        {
            name: "美力直播",
            image: 'https://ts1.cn.mm.bing.net/th/id/R-C.1dbaedb2851dc47ec774c6a1fbcf9821?rik=X18vRX0q9Jln7Q&riu=http%3a%2f%2fhanshop.com%2fimages%2f201904%2fgoods_img%2f2633_P_1554514868232.png&ehk=Pti9RdmHSqLDqXpjC5ub43WikoTr7ubSxCkt2enmqPc%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            name: "独家品牌",
            image: 'https://img-qn.51miz.com/Element/00/86/54/27/ff74989e_E865427_6cf9949a.png'
        },
        {
            name: "新品速递",
            image: 'https://img.zcool.cn/community/01aadf5cf15f3ba801205e4bba82f9.jpg@1280w_1l_2o_100sh.jpg'
        }
    ]
}
</script>

<style  scoped></style>
