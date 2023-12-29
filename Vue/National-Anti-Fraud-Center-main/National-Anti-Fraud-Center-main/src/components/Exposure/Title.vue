<template>
    <div>
        <div class="head">
            <span :class="{'head-left':true,'head-font':isActive} " @click="changeToLeft">动态</span>
            <span :class="{'head-right':true,'head-font':!isActive} " @click="changeToRight">科普</span>
        </div>
        <div class="body">
            <span :class="{ 'body-left': true, 'body-color': isActive }"></span>
            <span :class="{ 'body-right': true, 'body-color': !isActive }"></span>
        </div>
        <div class="down"></div>
        <div class="tail">
            <TitleTail />
        </div>
    </div>
</template>

<script>
import TitleTail from '@/components/Exposure/TitleTail.vue'
export default {
    components: {
        TitleTail
    },
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        changeToLeft() { 
            if(!this.isActive) {
                this.isActive = !this.isActive
            }
        },
        changeToRight() {
            if(this.isActive) {
                this.isActive = !this.isActive
            }
        }
    }
}
</script>

<style lang="less" scoped>
.head {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    .head-left,
    .head-right {
        font-size: 20px;
        display: inline-block;
        margin: 0 10px;
        /* 设置左右间距 */
        // font-weight: bold;
    }
    .head-font{
        font-weight:bold ;
    }
}

.down {
    margin-top: 5px;
    background: rgb(240, 235, 235);
    width: 100%;
    height: 1px;
}

.body {
    display: flex;
    align-items: center;
    justify-content: center;

    .body-left,
    .body-right {
        display: inline-block;
        margin: 0 20px;
        width: 20px;
        height: 5px;
        border-radius: 5px;
        margin-top: 5px;
    }

    .body-color {
        background: rgb(13, 106, 237);
    }

}</style>