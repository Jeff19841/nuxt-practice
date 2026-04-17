<!-- 未建立頁面 -->

<template>
  <div class="card mx-auto mt-7 max-w-sm text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-7xl">Ooops</p>
    <p class="mt-7">{{ error.message }}</p>
    <div class="mt-5">
      <button
        @click="handleClearError"
        class="w-24 rounded-md bg-green-500 py-1 hover:bg-green-400"
      >
        返回主頁
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

// 導回主頁
const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
