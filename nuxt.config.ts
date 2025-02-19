import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/raon-ai-tehch/',
    buildAssetsDir: 'assets',
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    base: '/raon-ai-tehch/',
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  nitro: {
    preset: 'github_pages',
  },
});
