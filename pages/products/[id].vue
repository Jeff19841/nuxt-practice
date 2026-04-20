<!-- http://localhost:3000/products/:id -->

<template>
  <div class="">
    <Head>
      <Title>Nuxt Jeff | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// 添加key可以更加明確區分不同id，避免有資料沒有刷新的問題
const { data: product } = await useFetch(uri, { key: id });

// 導入錯誤頁面
// 若在瀏覽器上執行而非伺服器(ex:link to)，則會報錯並不會跳轉到錯誤頁面(fatal處理)
if (!product.value.id) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product can't found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
