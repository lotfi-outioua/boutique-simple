<script setup lang="ts">
import { Product } from "../../types/product";
import ProductCard from "./product-card.vue";

const props = defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="product_list_container">
    <h3 class="product_list_title">Liste des produits</h3>
    <ul>
      <li v-for="product in props.products" :key="product.id">
        <product-card class="product_list_product" :product="product" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.product_list_container {
  .product_list_title, .product_list_product {
    margin-bottom: 20px;
  }
}
</style>
