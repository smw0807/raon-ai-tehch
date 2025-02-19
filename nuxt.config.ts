import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/raon-ai-tehch/',
    buildAssetsDir: 'assets',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
        },
      ],
    },
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

  compatibilityDate: '2025-02-19',
});
