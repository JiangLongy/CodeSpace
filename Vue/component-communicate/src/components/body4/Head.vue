<template>
    <div>
        <div class="head">
        <input type="text" name="" v-model="message">
        <button @click="submit">确定</button>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        data(){
        return {     
          message:''
        }
      },
      methods:{
        submit(){

         this.listsAdd(this.message)

        },
        ...mapMutations(['listsAdd'])
        
      }
    }
</script>

<style lang="css" scoped>

</style>