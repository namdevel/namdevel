export default defineNuxtConfig({
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
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-dark",
        // Theme used if `html.dark`
        dark: "github-light",
      },
    },
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
