import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: './', // GitHub Pages를 위한 상대 경로
    buildAssetsDir: 'assets', // _nuxt 대신 assets로 변경
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  // GitHub Pages를 위한 설정
  experimental: {
    payloadExtraction: false,
  },
  // 빌드 설정
  nitro: {
    preset: 'github_pages',
  },
});
