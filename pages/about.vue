<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam
      vel saepe esse vero quia quasi enim, amet et cumque ipsam praesentium
      modi! Rerum nesciunt enim quis assumenda dolore nulla?
    </p>
    <div class="">{{ data }}</div>
  </div>
</template>
<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>
<style scoped></style>
