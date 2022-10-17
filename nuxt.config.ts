export default defineNuxtConfig({
  target: "static",
  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  css: [
    "assets/css/bootstrap.css",
    "assets/css/dark-mode.css",
    "assets/css/app.css",
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-dark",
        // Theme used if `html.dark`
        dark: "github-light",
      },
    },
  },
});
