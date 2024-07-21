<template>
    <div class="w-full">
        <van-tabs v-model:active="active" animated offset-top="10">
            <van-tab v-for="(item, index) in state.kinds" :key="index" :title="item.title">
                <!-- 轮播图 -->
                <van-swipe :autoplay="3000" lazy-render class="h-80">
                    <van-swipe-item v-for="image in item.images" :key="image">
                        <img :src="image" class="w-full h-full" />
                    </van-swipe-item>
                </van-swipe>

                <!-- 用户信息提示 -->
                <div v-if="index === 0"
                    class="ml-5 mr-5 h-10 flex flex-col justify-center shadow-lg rounded-md mt-n5 relative bg-white"
                    style="bottom: -10px; transform: translateY(-80%);">
                    <van-row gutter="150">
                        <van-col span="8" class="ml-2 text-sm">Hi {{userInfo.name}}</van-col>
                        <van-col span="0" class="mr-2 text-xs float-right text-slate-400 mt-1">
                            花样玩转会员积分
                            <van-icon name="arrow" />
                        </van-col>
                    </van-row>
                </div>

                <!-- 特色信息 -->
                <van-row class="text-xs" gutter="0" v-if="index === 0">
                    <van-col span="8">100%官方正品</van-col>
                    <van-col span="8">每周精选上新</van-col>
                    <van-col span="8">多重惊喜礼赠</van-col>
                </van-row>

                <!-- 导航轮播 -->
                <van-swipe v-if="item.navigation && item.navigation.length" width="65" :loop="false"
                    :show-indicators="false" class="mt-4 ml-2">
                    <van-swipe-item v-for="navItem in item.navigation" :key="navItem.name">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full overflow-hidden mb-2">
                                <img :src="navItem.image" alt="" class="w-full h-full object-center">
                            </div>
                            <div class="text-xs">{{ navItem.name }}</div>
                        </div>
                    </van-swipe-item>
                </van-swipe>

                <!-- 品牌列表 -->
                <van-grid :column-num="4">
                    <van-grid-item v-for="value in 12" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>


<script setup>
import { ref } from 'vue';


const active = ref(0);
const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
const username = userInfo?.username

const state = {
    kinds: [
        {
            title: "精选",
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
                },
                {
                    name: "品牌推荐",
                    image: 'https://img.zcool.cn/community/015dc25a937d40a801219231c022d7.jpg@2o.jpg'
                }
            ]
        },
        {
            title: "护肤",
            images: [],
            navigation: [
                {

                }
            ]

        },
        {
            title: "彩妆",
            images: [],
            navigation: [
                {

                }
            ]

        },
        {
            title: "香水",
            images: [],
            navigation: [
                {

                }
            ]

        },
        {
            title: "小众",
            images: [],
            navigation: [
                {

                }
            ]

        },
        {
            title: "美发美体",
            images: [],
            navigation: [
                {

                }
            ]

        },
        {
            title: "男士",
            images: [],
            navigation: [
                {

                }
            ]

        },
    ]
}
</script>

<style  scoped></style>
