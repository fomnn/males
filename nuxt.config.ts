// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image"
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      "Gloria Hallelujah": true
    }
  },
  plugins: ["~/plugins/preline.client.ts"],
  typescript: {
    strict: true,
    typeCheck: true,
  }
})
