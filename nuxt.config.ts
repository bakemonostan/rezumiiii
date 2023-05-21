// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
      ],

      style: [],
      script: [{ src: "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js" }],
      noscript: [],
    },
  },
  routeRules: {
    "/dashboard": { ssr: false },
    "/dashboard-applicant": { ssr: false },
    "/job": { ssr: false },
    "/refferals": { ssr: false },
    "/refferedJobs": { ssr: false },
    "/report": { ssr: false },
    "/jobs/**": { ssr: false },
    "/jobs-applicant": { ssr: false },

  },
  build: {
    transpile: ["@vuepic/vue-datepicker", "vue-cryptojs"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
        ],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-headlessui",
    "@formkit/nuxt",
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api",
      resumiiApiBase: "/",
      apiAddress: {
        apiGateway:
          "https://rezumii-account.azurewebsites.net/swagger/index.html",
        account: "https://rezumii-account.azurewebsites.net",
        job: "https://rezumii-jobmanagement.azurewebsites.net",
      },
    },
  },
  vite: {},
});
