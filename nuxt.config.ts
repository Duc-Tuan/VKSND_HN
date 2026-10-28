// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'CỔNG THÔNG TIN ĐIỆN TỬ VIỆN KIỂM SÁT NHÂN DÂN THÀNH PHỐ HÀ NỘI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Cổng thông tin điện tử Viện Kiểm Sát Nhân Dân Thành Phố Hà Nội - Cung cấp tin tức sự kiện, lịch xét xử, thông báo, hướng dẫn thủ tục tư pháp và dịch vụ công.'
        },
        { name: 'theme-color', content: '#dbf40b' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://vksndtc.gov.vn/Publishing_Resources/web/assets/img/logo.png'
        }
      ]
    }
  },
  devtools: { enabled: false }
})
