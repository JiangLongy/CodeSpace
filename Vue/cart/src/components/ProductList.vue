<template>
    <div>
        <ul>
            <li
                v-for="product in products"
                :key="product.id"
                >
                {{product.title}} - {{currency(product.price)}}
                <br>
                <button
                    :disabled="!product.inventory"
                    @click="addProductToCart(product)"
                > Add to cart</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'
const store = useStore()//状态数
// 借|接
const products = computed(()=> store.state.products.all)
// console.log(products);
//派遣一个工作 dispatch commit 
const addProductToCart = (product) => store.dispatch(
    'cart/addProductToCart',product
)
store.dispatch('products/getAllProducts')
</script>

<style  scoped>

</style>