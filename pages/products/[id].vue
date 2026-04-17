<!-- http://localhost:3000/products/:id -->

<template>
  <div class="">
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// 添加key可以更加明確區分不同id，避免有資料沒有刷新的問題
const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
