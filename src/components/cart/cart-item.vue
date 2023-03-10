<script setup lang="ts">
import { CartItem } from "../../types/cart";
defineProps<{
  cartItem: CartItem;
}>();
</script>

<template>
  <div class="cart_item">
    <span>
      {{ cartItem.product.label }}
      {{ cartItem.quantity > 1 ? `(${cartItem.quantity})` : "" }}
    </span>
    <span class="cart_item_price">{{ cartItem.product.price }}€</span>
  </div>
</template>

<style lang="scss">
.cart_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .cart_item_price {
    font-weight: 600;
  }
}
</style>
