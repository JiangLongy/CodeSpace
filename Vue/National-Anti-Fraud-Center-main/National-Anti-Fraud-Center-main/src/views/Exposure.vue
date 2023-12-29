<template>
    <div>
        <div class="title">
            <LeftTitle />
        </div>
        <div class="list">
            <List />
        </div>
    </div>
</template>

<script>
import LeftTitle from '../components/Exposure/Title.vue' 
import List from '../components/Exposure/List.vue'
export default{
    components:{
        LeftTitle,
        List
    }
}
</script>

<style lang="less" scoped>

</style>