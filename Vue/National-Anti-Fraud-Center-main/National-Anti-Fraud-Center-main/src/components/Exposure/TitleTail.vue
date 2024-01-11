<template>
  <div class="tail">
    <span :class="['recommend', { bgcheck: currentTab === 'recommend' }]" @click="changeTab('recommend')">推荐</span>
    <span :class="['trends', { bgcheck: currentTab === 'trends' }]" @click="changeTab('trends')">各地动态</span>
    <span :class="['knowledge', { bgcheck: currentTab === 'knowledge' }]" @click="changeTab('knowledge')">反诈知识</span>
    <span :class="['hotspot', { bgcheck: currentTab === 'hotspot' }]" @click="changeTab('hotspot')">时事热点</span>
  </div>
  <!-- <div class="down"></div> -->
  <div class="eachList">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="eachOne">
          <div class="down"></div>
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="date">{{ item.author }} {{ item.date }}</div>
          </div>
          <div class="pic">
            <img :src="item.pic" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import axios from '../../api';
export default {
  data() {
    return {
      currentTab: 'recommend',
      list: []
    }
  },
  methods: {
    async changeTab(tab) {
      this.currentTab = tab;
      const data = await axios.getData('selectData')
      if (tab === 'recommend') {
        this.list = data.trends.recommend
      } else if (tab === 'trends') {
        this.list = data.trends.trends
      } else if (tab === 'knowledge') {
        this.list = data.trends.knowledge
      } else if (tab === 'hotspot') {
        this.list = data.trends.hotspot
              // console.log("点击了"+tab);
      }
     
    }   
  },
  async mounted() {
      const data = await axios.getData('selectData')
      this.list = data.trends.recommend
      console.log(data);
    }
}
</script>
  
<style lang="less" scoped>
.tail {
  z-index: 999;
  background: white;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 55px;

  .recommend,
  .trends,
  .knowledge,
  .hotspot {
    padding-top: 5px;
    display: inline-block;
    margin: 0 10px;
    font-size: 15px;
    cursor: pointer;
  }

  .bgcheck {
    color: rgb(13, 106, 237);
    background: rgb(240, 235, 235);
    border-radius: 5px;
    font-weight: bold;
  }
}

.eachList {
  overflow: hidden;
  padding-top: 85px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 80%;

  .eachOne {
    overflow: hidden;
    .left {
      width: 200px;
      height: 106px;
      float: left;
      margin-top: 20px;
      margin-left: 15px;
      position: relative;
      .title {
        font-size: 15px;
        font-weight: bolder;
      }

      .date {
        position: absolute;
        bottom: 20px;
        // margin-bottom: 20px;
        font-size: 12px;
        color: rgb(85, 97, 110);
      }
    }

    .pic {
      float: right;
      width: 125px;
      height: 80px;
      margin-top: 20px;
      margin-right: 15px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 5px;
      }

    }
  }
}

.down {
  margin-top: 5px;
  background: rgb(240, 235, 235);
  width: 100%;
  height: 1px;
}</style>
  