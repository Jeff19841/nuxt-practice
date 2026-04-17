// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     title: "My application", // 瀏覽器預設標題
  //     titleTemplate: "%s/youtube.com/@TheJeff", // 瀏覽器標題模板(%s會包住title)
  //   },
  // },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
