<template>
    <div class="note-class-wrapper">
        <div class="note-class" :class="{'hide':state.isMenuShow}">
            <header>
                <div @click="()=>state.isMenuShow = true">
                    <van-icon name="wap-nav" />
                </div>
                <div>
                    <van-icon name="edit" @click="goPublish"/>
                    <van-icon name="like-o" />
                    <van-icon name="search" />
                </div>
                
            </header>
            <section>
                <div class="note-item" v-for="(item,index) in noteClassList" 
                :key="index"
                :style="`background-color:${item.bgColor}`"
                @click="goNoteList(item.title)"
                >
                    <span class="title">{{item.title}}</span>
                </div>
            </section>
        </div>
        <Menu @hidden="hideMenu" class="menu " :class="{'active':state.isMenuShow}"/>
    </div>
</template>

<script setup>
import Menu from '../components/Menu.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const noteClassList = [
    {bgColor:'#ee8282',title:'美食'},
    {bgColor:'RGB(255, 218, 185)',title:'旅行'},
    {bgColor:'RGB(230, 230, 250)',title:'恋爱'},
    {bgColor:'RGB(144, 238, 144)',title:'洗脚'},
    {bgColor:'RGB(173, 216, 230)',title:'学习'},

]
const state = reactive({
    isMenuShow:false
})
const hideMenu = (e)=>{
    state.isMenuShow = e
}
const goNoteList = (title)=>{
    router.push({path:'/noteList',query:{'title':title}})
}
const goPublish = ()=>{
    router.push('notePublish')
}
</script>

<style lang="less" scoped>
.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .note-class {
    position: absolute;
    transform: translateX(0);
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transition: transform 0.3s;
    &.hide{
      transform: translateX(100%);
    }
    header {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 10px 0;

      .van-icon {
        margin-left: 10px;
      }
    }
    section {
      width: 100%;
      .note-item {
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;
        .title{
          color: #fff;
          font-size: 0.5333rem;
          text-align: center;
          display: block;
          margin-top: 0.5333rem;
        }
      }
    }
  }
  .menu{
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s;
    &.active{
      transform: translateX(0%);
    }
  }
  
}
</style>