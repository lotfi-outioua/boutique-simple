<script setup lang="ts">
import { CartItem } from "../../types/cart";
import itemCart from "./cart-item.vue";

defineProps<{
  cartItems: CartItem[];
}>();
</script>

<template>
  <ul class="cart_list">
    <li v-for="cartItem in cartItems" :key="cartItem.product.id">
      <item-cart :cart-item="cartItem"></item-cart>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.cart_list {
  margin-bottom: 20px;
}
</style>
