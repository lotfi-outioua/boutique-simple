<script setup lang="ts">
import { storeToRefs } from "pinia";
import TheHeader from "../components/layouts/Header/the-header.vue";
import { useCartStore } from "../store/cart";
import PaymentButton from "../components/common/Button/payment-button.vue";
import cartList from "../components/cart/cart-list.vue";

const cartStore = useCartStore();

const { cartItems, totalPriceCart } = storeToRefs(cartStore);
</script>

<template>
  <the-header></the-header>
  <div class="cart_container">
    <div class="cart_head">
      <img
        class="cart_head_icon"
        src="../assets/img/shopping_cart.svg"
        alt="shopping_cart"
      />
      <h3>Votre Panier</h3>
    </div>
    <cart-list :cart-items="cartItems"></cart-list>
    <div class="cart_total_price">
      <p>total</p>
      <span>{{ totalPriceCart }}€</span>
    </div>
    <payment-button class="cart-payment-button">
      accéder au paiement
    </payment-button>
  </div>
</template>

<style scoped lang="scss">
.cart_container {
  position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 20px;
  @media screen and (min-width: 800px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
  @media screen and (min-width: 1900px) {
    width: 30%;
  }
  .cart_head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    .cart_head_icon {
      width: 25px;
    }
  }
  .cart_total_price {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 4px;

    background-color: #d6d3d1;
    font-weight: 600;
    p {
      text-transform: uppercase;
    }
  }
  .cart-payment-button {
    position: absolute;
    right: 0;
    bottom: -30px;
  }
}
</style>
