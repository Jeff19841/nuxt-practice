<template>
  <div class="p-3">
    <div class="grid grid-cols-2 items-center bg-white xl:grid-cols-3">
      <!-- 商品圖片 -->
      <div class="card flex items-center justify-center overflow-hidden">
        <img
          :src="product.image"
          alt="圖片未上架"
          class="max-h-[600px] max-w-[350px]"
        />
      </div>

      <!-- 商品描述 -->
      <div class="flex flex-col justify-center p-7 xl:col-span-2">
        <h2 class="my-7 text-4xl">{{ product.title }}</h2>
        <p class="my-7 text-xl">價格 - ${{ product.price }}</p>
        <p class="mb-4 border-b-2 pb-2 font-bold">商品描述:</p>
        <p class="mb-7">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
