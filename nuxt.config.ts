// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'CỔNG THÔNG TIN ĐIỆN TỬ TÒA ÁN NHÂN DÂN THÀNH PHỐ HÀ NỘI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cổng thông tin điện tử Tòa Án Nhân Dân Thành Phố Hà Nội - Cung cấp tin tức sự kiện, lịch xét xử, thông báo, hướng dẫn thủ tục tư pháp và dịch vụ công trực tuyến.'
        },
        { name: 'theme-color', content: '#a41600' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/logo_tand.png'
        }
      ]
    }
  },
  devtools: { enabled: false }
})
