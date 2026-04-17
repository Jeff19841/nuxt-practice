<!-- 統一布局使用default -->

<template>
  <div>
    <header>
      <div class="flex justify-between bg-slate-100 px-2 shadow-sm">
        <h2 class="font-bold">Jeff Work</h2>
        <nav class="">
          <ul class="flex gap-5">
            <li class=""><NuxtLink to="/">home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <hr />

    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
ul > li :hover {
  color: #22c55e;
}
</style>
