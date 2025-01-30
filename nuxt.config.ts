// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-26",
  devtools: {
    enabled: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  googleFonts: {
    families: {
      "Montserrat": true,
      "Gloria Hallelujah": true,
    },
  },

  experimental: {
    typedPages: true,
    scanPageMeta: true,
  },

  plugins: ["~/plugins/preline.client.ts"],

  typescript: {
    // strict: true,
    typeCheck: true,
  },

  nitro: {
    storage: {
      r2: {
        driver: "s3",
        accessKeyId: "a6846b34605bdc42ea0d9c6ee15bf098", // Access Key ID
        secretAccessKey: "d9b3fbae10dfbdc2a450117df83e49c486101561eb2b817472dff044fc482ad4", // Secret Access Key
        endpoint: "https://817f0c81d20c6fd5ef674fcec48f4644.r2.cloudflarestorage.com/",
        bucket: "males",
        region: "auto",
      },
    },
  },

  runtimeConfig: {
    superadminPassword: "",
    public: {
      imageStorageUrl: "",
    },
  },

});
