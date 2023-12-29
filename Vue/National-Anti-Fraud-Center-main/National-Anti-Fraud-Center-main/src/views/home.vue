<template>
    <div class="fz">
        <div class="fz_head">
            <div class="head_title">
                <i class="iconfont icon-jingcha"></i>
                <span class="app_name">国家反诈中心</span>
                <i class="iconfont icon-xiaoxi"></i>
            </div>
            <div class="head_pic"></div>
            <div class="head_fn"></div>
        </div>
        <div class="fz_body"></div>
        <div class="fz_foot"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.fz {
    width: 100vw;
    height: 100vh;
    background-color: rgb(242, 240, 240);
}

.head_title {
    position: relative;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 5px;

    .app_name {
        font-size: 20px;
        margin-left: 5px;
        
    }

    .icon-jingcha {
        font-size: 40px;
    }
    .icon-xiaoxi{
        float: right;
        margin-top: 12px;
        margin-right: 5px;
        font-size: 30px;
    }
}
.head_pic{
        position: relative;
        margin: 5px 15px;
        width: 92%;
        height: 200px;
        margin-left: 15px;
        background-image: url(@/assets/image/callout.jpg);
        background-size: cover;
        border-radius: 10px;
        
    }
</style>