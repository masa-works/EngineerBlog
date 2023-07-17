// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: "masa-works",
    apiKey: "muAD38Ma6srgroTtMqLhSg6HBohx0GNOYkIK",
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography]
    }
  }
})
