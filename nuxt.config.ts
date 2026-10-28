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
        { name: 'theme-color', content: '#FFF44F' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://hanoi.toaan.gov.vn/webcenter/oracle/webcenter/siteresources/scopedMD/shared/portaltinh/images/logo.png'
        }
      ]
    }
  },
  devtools: { enabled: false }
})
