<!-- 只想單一布局 -->

<template>
  <div class="relative flex min-h-[100vh] flex-col">
    <header>
      <nav
        class="border-b-[1.5px] bg-gray-50 px-3 pb-2 pt-4 text-[20px] font-black"
      >
        <nuxt-link to="/products"> Products</nuxt-link>
      </nav>
    </header>

    <main class="flex flex-1 items-center justify-center">
      <slot />
    </main>

    <footer class="fixed bottom-0 left-0 w-full bg-gray-50 pb-2">
      <hr class="mb-2 shadow-sm" />

      <div class="flex justify-start px-5">
        <ul class="flex gap-5">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
ul > li :hover {
  color: #22c55e;
}
</style>
