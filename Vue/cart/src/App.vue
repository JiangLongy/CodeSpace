<script setup>
import products from './store/modules/products';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

</script>

<template>
  <h1>Shopping Cart</h1>
  <hr>
  <h2>Products</h2>
  <ProductList />
  <hr>
  <ShoppingCart />
</template>

<style scoped></style>
