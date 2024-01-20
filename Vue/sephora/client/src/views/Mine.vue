<template>
    <div class="fixed top-0 left-0 w-full z-999 bg-white">
        <div class="flex items-center pt-3 pr-3 pl-3 pb-3">
            <!-- 左边 -->
            <div class="flex items-center space-x-4">
                <div class="w-16 h-16 rounded-full overflow-hidden">
                    <img src="https://p.qqan.com/up/2021-1/16107657809292997.jpg" alt="" class="w-full h-full">
                </div>
                <div>
                    <div class="font-bold">滚去睡觉</div>
                    <div class="text-xs mt-2 text-slate-400">编辑个人简介</div>
                </div>
            </div>
            <!-- 右边 -->
            <div class="flex items-center space-x-4 ml-auto mr-2">
                <div><van-icon name="qr-invalid" size="25" /></div>
                <div><van-icon name="setting-o" size="25" /></div>
                <div><van-icon name="bulb-o" size="25" /></div>
            </div>
        </div>
    </div>

    <div class="bg-slate-50 pt-[88px]">
        <!-- 优惠券 -->
        <div class="flex mt-5 ml-4 mr-4">
            <div class="flex items-center justify-between w-full overflow-auto">
                <!-- 优惠券 -->
                <div class="text-center">
                    <div class="text-xl">0</div>
                    <div class="text-sm">优惠券</div>
                </div>
                <!-- 积分 -->
                <div class="text-center">
                    <div class="text-xl ">0</div>
                    <div class="text-sm">积分</div>
                </div>
                <!-- 丝享卡 -->
                <div class="text-center">
                    <div class="text-xl ">0</div>
                    <div class="text-sm">丝享卡</div>
                </div>
                <!-- 历史浏览 -->
                <div class="text-center">
                    <div class="text-xl ">0</div>
                    <div class="text-sm">历史浏览</div>
                </div>
            </div>
        </div>
        <!-- 我的订单 -->
        <div class="p-4 rounded-md bg-gray-50">
            <!-- 头部 -->
            <div class="flex justify-between mb-4">
                <div class="font-bold text-sm">我的订单</div>
                <div class="flex items-center text-xs">
                    <div class="mr-1">所有订单</div>
                    <div><van-icon name="arrow" /></div>
                </div>
            </div>
            <!-- 底部 -->
            <div class="flex justify-between">
                <div class="flex-grow mr-2">
                    <div class="flex items-center justify-center flex-col h-16 bg-white rounded-md shadow">
                        <div><van-icon name="pending-payment" /></div>
                        <div class="mt-1 text-sm">待支付</div>
                    </div>
                </div>
                <div class="flex-grow mr-2">
                    <div class="flex items-center justify-center flex-col h-16 bg-white rounded-md shadow">
                        <div><van-icon name="tosend" /></div>
                        <div class="mt-1 text-sm">待发货</div>
                    </div>
                </div>
                <div class="flex-grow mr-2">
                    <div class="flex items-center justify-center flex-col h-16 bg-white rounded-md shadow">
                        <div><van-icon name="logistics" /></div>
                        <div class="mt-1 text-sm">已发货</div>
                    </div>
                </div>
                <div class="flex-grow mr-2">
                    <div class="flex items-center justify-center flex-col h-16 bg-white rounded-md shadow">
                        <div><van-icon name="comment-o" /></div>
                        <div class="mt-1 text-sm">待评价</div>
                    </div>
                </div>
                <div class="flex-grow">
                    <div class="flex items-center justify-center flex-col h-16 bg-white rounded-md shadow">
                        <div><van-icon name="service-o" /></div>
                        <div class="mt-1 text-sm">退货/售后</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 两个图片 -->
        <div class="flex pl-4 pr-4">
            <div class="mr-4">
                <img src="https://img.zcool.cn/community/01da18607f937211013f472068e09f.jpg@3000w_1l_0o_100sh.jpg" alt=""
                    class="rounded-lg max-w-full h-auto">
            </div>
            <div>
                <img src="https://img.zcool.cn/community/01b1375de8a25da8012095689044fd.jpg@2o.jpg" alt=""
                    class="rounded-lg max-w-full h-auto">
            </div>
        </div>
        <!-- 玩美服务 -->
        <div class="p-4 rounded-md bg-gray-100">
            <div class="font-bold text-sm mb-4">玩美服务</div>
            <div class="grid grid-cols-4 gap-2">
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="shop-o" />
                    <div class="mt-1 text-sm">积分商城</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="like-o" />
                    <div class="mt-1 text-sm">心愿单</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="comment-circle-o" />
                    <div class="mt-1 text-sm">在线客服</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="cash-on-deliver" />
                    <div class="mt-1 text-sm">门店购物</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="records-o" />
                    <div class="mt-1 text-sm">预约服务</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="shopping-cart-o" />
                    <div class="mt-1 text-sm">企业采购</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="contact-o" />
                    <div class="mt-1 text-sm">帮助中心</div>
                </div>
                <div class="flex flex-col items-center bg-white rounded-md shadow p-2">
                    <van-icon name="gift-o" />
                    <div class="mt-1 text-sm">生日礼</div>
                </div>
            </div>
        </div>

    </div>
</template>
  

<script setup>

</script>

<style lang="less" scoped></style>