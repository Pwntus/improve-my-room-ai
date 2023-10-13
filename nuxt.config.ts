export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'vercel'
  },
  sourcemap: {
    server: false,
    client: false
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title:
        'Improve My Room AI - Instant suggestions to improve your room using AI. improvemyroom.ai',
      link: [
        { rel: 'canonical', href: 'https://improvemyroom.ai' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        {
          hid: 'viewport',
          name: 'viewport',
          content:
            'width=device-width,height=device-height,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0,viewport-fit=cover'
        },
        {
          hid: 'format-detection',
          name: 'format-detection',
          content: 'telephone=no'
        },
        { hid: 'author', name: 'author', content: 'Pontus Aurdal' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Improve My Room AI - Instant suggestions to improve your room using AI. improvemyroom.ai'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://improvemyroom.ai'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'Improve My Room AI'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content:
            'Improve My Room AI - Instant suggestions to improve your room using AI. improvemyroom.ai'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Improve My Room AI - Instant suggestions to improve your room using AI. improvemyroom.ai'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://improvemyroom.ai/cover.jpeg'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@PontusAurdal'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@PontusAurdal'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Improve My Room AI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Improve My Room AI - Instant suggestions to improve your room using AI. improvemyroom.ai'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://improvemyroom.ai/cover.jpeg'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://improvemyroom.ai'
        },
        {
          hid: 'msapplication-TileColor',
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
        {
          hid: 'mobile-web-app-capable',
          name: 'mobile-web-app-capable',
          content: 'yes'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Improve My Room AI'
        }
      ],
      script: [],
      style: []
    }
  }
})
