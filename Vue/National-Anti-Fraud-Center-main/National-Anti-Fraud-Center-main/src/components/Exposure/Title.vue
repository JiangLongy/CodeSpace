<template>
    <div >
        <div class="head">
            <span class="head-left"  :class="{ 'head-font': isActive }" @click="changeToLeft">动态</span>
            <span class="head-right" :class="{'head-font': !isActive }" @click="changeToRight">科普</span>
        </div>
        <div class="body">
            <span :class="{ 'body-left': true, 'body-color': isActive }"></span>
            <span :class="{ 'body-right': true, 'body-color': !isActive }"></span>
            <div class="down"></div>
        </div>
       
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
            if (!this.isActive) {
                this.isActive = !this.isActive
            }
        },
        changeToRight() {
            if (this.isActive) {
                this.isActive = !this.isActive
            }
        }
    }
}
</script>

<style lang="less" scoped>

.head {
    background: white;
    z-index: 999;
    position: fixed;
    display: flex;
    // height: 20%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    .head-left,
    .head-right {
        font-size: 20px;
        display: inline-block;
        margin: 0 10px;
        z-index: 1000;
        /* 设置左右间距 */
        // font-weight: bold;
    }

    .head-font {
        font-weight: bold;
    }
}

.down {
    position: absolute;
    margin-top: 20px;
    background: rgb(240, 235, 235);
    width: 100%;
    height: 1px;
}

.body {
    background-color: white;
    z-index: 999;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 37px;
	padding-bottom: 5px;
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

}
</style>