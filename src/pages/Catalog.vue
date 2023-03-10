<script setup lang="ts">
import TheHeader from "../components/layouts/Header/the-header.vue";
import ProductList from "../components/product/product-list.vue";
import ProductService from "../services/product-service"
import { Product } from "../types/product";
import { ref } from "vue";

const products = ref<Product[]>([]);

/* 
  implémentation plus correct aurait voulu que je fasse appel à un objet de type ProductGateway afin d'être découpler du protocole d'implémentation http
*/
const fetchData = async () => {
  try {
    const response = await ProductService.getAllProducts();

    products.value = response;
    
  } catch (error) {
    console.error(error);
  }
}

fetchData();
</script>

<template>
  <the-header></the-header>
  <div class="catalog_container">
    <div v-if="products.length > 0">
      <ProductList :products="products" />
    </div>

    <Suspense>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
.catalog_container {
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  @media screen and (min-width: 800px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
  @media screen and (min-width: 1900px) {
    width: 30%;
  }
}
</style>
