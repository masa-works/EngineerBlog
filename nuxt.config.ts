// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography]
    }
  }
})
