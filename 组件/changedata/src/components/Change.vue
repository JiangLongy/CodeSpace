<template>
    <div>
        <div class="title">
            <span class="name">文章榜</span>
            <span class="change" @click="change">
                <i class="iconfont icon-web__huanyihuan" ></i>
                换一换
            </span>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item,index) in lists.slice(fist,last)" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:mapState(['lists']),
  data(){
    return{
        fist:0,
        last:5
    }

  },
  methods:{
    change(){
        this.fist = (this.fist + 5) % this.lists.length;
      this.last = (this.last + 5) % this.lists.length;
    }
  }
}
</script>

<style lang="less" scoped>
.title {
    overflow: hidden;
    .name {
        float: left;
    }
    .change {
        float: right;
    }
}
</style>