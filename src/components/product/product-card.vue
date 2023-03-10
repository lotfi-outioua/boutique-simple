<script setup lang="ts">
import { useCartStore } from "../../store/cart";
import { Product } from "@/src/types/product";
import AddCartButton from "../common/Button/add-cart-button.vue";
import { ref } from "vue";

const props = defineProps<{
  product: Product;
}>();
const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addCartItem(props.product);
};
const screenWidth = ref("");

const updateScreenSize = () => {
  const width = window.innerWidth;
  if (width > 800) {
    screenWidth.value = "show";
  }
};

updateScreenSize();
</script>

<template>
  <div class="product_card_container">
    <div class="product_card_container_content">
      <img
        class="product_card_img"
        :src="product.thumbnail_url || ''"
        :alt="product.label"
      />
      <div class="product_card_content">
        <h4 class="product_card_content_title">{{ product.label }}</h4>
        <p class="product_card_content_description">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="product_card_action">
      <span class="product_card_price">{{ product.price }}€</span>
      <add-cart-button
        class="product_card_button"
        :product="product"
        @click="addToCart"
      >
        <img
          class="product_card_button_img"
          src="../../assets/img/add_shopping_cart.svg"
          alt="add_shopping_cart"
        />
        <p v-show="screenWidth === 'show'" class="product_card_button_text">
          ajouter au panier
        </p>
      </add-cart-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product_card_container {
  position: relative;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: 2px 2px 5px #cdcdcd;
  .product_card_container_content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    @media screen and (min-width: 800px) {
      gap: 30px;
      margin-left: 20px;
    }
    .product_card_img {
      width: 75px;
      border-radius: 100%;
      @media screen and (min-width: 800px) {
        width: 100px;
        margin-top: 10px;
      }
    }
    .product_card_content {
      width: 60%;
      height: 100%;
      margin-right: 40px;
      @media screen and (min-width: 800px) {
        width: 100%;
        margin-right: 20px;
      }
      .product_card_content_title {
        margin-bottom: 10px;
      }
    }
  }
  .product_card_action {
    @media screen and (min-width: 800px) {
      display: flex;
      justify-content: space-between;
      margin: 10px 30px;
      margin-top: 30px;
    }
    .product_card_price {
      position: absolute;
      top: -2px;
      right: 0;
      padding: 10px 6px;
      color: #fff;
      background-color: #059669;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      @media screen and (min-width: 800px) {
        position: relative;
        position: relative;
        top: unset;
        bottom: unset;
        right: unset;
        left: unset;
        border-radius: 8px;
      }
    }
    .product_card_button {
      @media screen and (min-width: 800px) {
        position: relative;
        top: unset;
        bottom: unset;
        right: unset;
        left: unset;
      }
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 5px;
      border: none;
      background-color: #059669;
      .product_card_button_img {
        width: 20px;
        @media screen and (min-width: 800px) {
          margin-left: 5px;
        }
      }
      .product_card_button_text {
        padding: 0 10px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
}
</style>
