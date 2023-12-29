<template>
    <div class="tail">
      <span :class="['recommend', { bgcheck: currentTab === 'recommend' }]" @click="changeTab('recommend')">推荐</span>
      <span :class="['trends', { bgcheck: currentTab === 'trends' }]" @click="changeTab('trends')">各地动态</span>
      <span :class="['knowledge', { bgcheck: currentTab === 'knowledge' }]" @click="changeTab('knowledge')">反诈知识</span>
      <span :class="['hotspot', { bgcheck: currentTab === 'hotspot' }]" @click="changeTab('hotspot')">时事热点</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTab: 'recommend'
      }
    },
    methods: {
      changeTab(tab) {
        this.currentTab = tab
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .tail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    .recommend,
    .trends,
    .knowledge,
    .hotspot {
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
  </style>
  