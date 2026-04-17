<template>
  <div class="card text-center">
    <img :src="product.image" alt="無此圖片" class="thumb" />
    <p class="m-4 truncate font-bold text-gray-500">{{ product.title }}</p>

    <div class="flex items-center justify-center">
      <nuxt-link :to="`products/${product.id}`"
        ><p class="my-4 rounded-md bg-green-500 px-10 py-2 hover:bg-green-400">
          view detail
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
