<template>
  <div>
    <div class="head">
      <input type="text" name="" v-model="message">
      <button @click="submit">确定</button>
      <List :lists="lists"/>
    </div>
    
  </div>
</template>

<script>
  export default {
    components:{
      List
    },
    data(){
      return {
        lists:['html','css'],
        message:''
      }
    },
    methods:{
      submit(){
        if(!this.message) return 
        this.lists.push(this.message)
        this.message=''
      }
    }
  }
</script>

<style lang="less" scoped>

</style>