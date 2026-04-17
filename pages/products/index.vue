<!-- http://localhost:3000/products -->

<template>
  <div>
    <div class="grid grid-cols-3 px-3">
      <div v-for="product in products" :key="product.id" class="py-5">
        <div class="h-full">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
