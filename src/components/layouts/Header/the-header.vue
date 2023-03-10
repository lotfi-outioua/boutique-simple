<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../../store/cart'

const cartStore = useCartStore()

const { countCartItems } = storeToRefs(cartStore)
</script>

<template>
  <nav class="nav_container">
    <div class="nav_content">
      <router-link class="nav_text_link" to="/">Catalogue</router-link>
      <router-link to="/panier">
        <div class="nav_icons_container">
          <img
            class="nav_icon"
            src="../../../assets/img/shopping_cart.svg"
            alt="shopping_cart"
          />
          <span class="nav_total_items">{{ countCartItems }}</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav_container {
  display: flex;
  justify-content: center;
  height: 80px;
  margin-bottom: 40px;
  background-color: #059669;
  .nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
    @media screen and (min-width: 800px) {
      width: 60%;
    }
    @media screen and (min-width: 1200px) {
      width: 40%;
    }
    @media screen and (min-width: 1900px) {
      width: 30%;
    }
    .nav_text_link {
      color: #000;
    }
    .nav_icons_container {
      position: relative;
      color: #000;
      .nav_icon {
        width: 25px;
      }
      .nav_total_items {
        position: absolute;
        bottom: -50%;
        right: -40%;
        padding: 5px;
        font-size: 12px;
        border-radius: 100%;
      }
    }
  }
}
</style>
