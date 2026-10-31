<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Auto-crossfade background between Image 2 (Toàn cảnh trên cao) & Image 3 (Mặt chính diện trụ sở)
const currentBannerBg = ref(0)
let bgTimer: any = null

onMounted(() => {
  bgTimer = setInterval(() => {
    currentBannerBg.value = currentBannerBg.value === 0 ? 1 : 0
  }, 7000)
})

onUnmounted(() => {
  if (bgTimer) clearInterval(bgTimer)
})
</script>

<template>
  <div
    class="relative bg-gradient-to-b from-lemon-50/60 via-white to-lemon-50/40 text-slate-900 overflow-hidden border-b border-lemon-300">
    <!-- Architectural Headquarters Background Images - Dual View (Ảnh 2 & Ảnh 3) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <!-- Ảnh 2: Toàn cảnh trụ sở trên cao -->
      <img src="/images/tand_hanoi_aerial.jpg" alt="Toàn cảnh Trụ sở Tòa án nhân dân thành phố Hà Nội"
        class="absolute inset-0 w-full h-full object-cover object-right md:object-center transition-all duration-1000 ease-in-out filter brightness-105 contrast-105"
        :class="currentBannerBg === 0 ? 'opacity-40 md:opacity-50 scale-100' : 'opacity-0 scale-105'" />

      <!-- Ảnh 3: Mặt tiền kiến trúc chính diện -->
      <img src="/images/tand_hanoi_facade_wide.jpg" alt="Mặt chính diện Trụ sở Tòa án nhân dân thành phố Hà Nội"
        class="absolute inset-0 w-full h-full object-cover object-top md:object-top transition-all duration-1000 ease-in-out filter brightness-105 contrast-105"
        :class="currentBannerBg === 1 ? 'opacity-40 md:opacity-50 scale-100' : 'opacity-0 scale-105'" />

      <!-- Fresh, Bright Daylight Multi-Stop Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/85 to-white/40"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-lemon-100/30 via-transparent to-lemon-100/40"></div>
    </div>

    <!-- Main Header Content Container - Rộng sát mép màn hình -->
    <div class="relative z-10 max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5">
      <div class="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-3 lg:gap-6">

        <!-- Left: Official Institutional Identity (Logo & Typography) -->
        <div class="flex items-center gap-3 sm:gap-4 md:gap-5 text-left w-full lg:w-auto">

          <!-- Official TAND Emblem - Logo PNG trong suốt đứng độc lập không có nền/khung trắng -->
          <a href="/" class="group flex-shrink-0 transition-transform duration-300 hover:scale-105"
            title="Trang chủ TAND TP Hà Nội">
            <div class="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img src="/images/logo_tand.png" alt="Biểu trưng Tòa án nhân dân thành phố Hà Nội"
                class="w-full h-full object-contain filter transition-all duration-300" />
            </div>
          </a>

          <!-- Institutional Title Hierarchy - Uy nghiêm, chuẩn mực, tươi sáng -->
          <div class="space-y-0.5">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-600 shadow-sm"></span>
              <p
                class="text-[11px] sm:text-xs md:text-[13px] font-black tracking-[0.15em] text-red-700 uppercase leading-none">
                TÒA ÁN NHÂN DÂN TỐI CAO
              </p>
            </div>

            <h1
              class="text-base sm:text-xl md:text-2xl lg:text-[28px] font-black text-navy-950 tracking-tight leading-tight uppercase drop-shadow-sm">
              TÒA ÁN NHÂN DÂN <span
                class="text-lemon-400 bg-gradient-to-r from-lemon-400 to-red-600 bg-clip-text text-transparent">THÀNH
                PHỐ HÀ NỘI</span>
            </h1>

            <div class="flex items-center gap-2 pt-0.5">
              <span
                class="px-2 py-0.5 rounded bg-lemon-400 text-white text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
                CỔNG THÔNG TIN ĐIỆN TỬ CHÍNH THỨC
              </span>
              <span class="hidden sm:inline text-slate-400">•</span>
              <span class="hidden sm:inline text-[10px] sm:text-xs text-slate-600 font-semibold tracking-wide">
                HANOI PEOPLE'S COURT ELECTRONIC PORTAL
              </span>
            </div>
          </div>

        </div>

        <!-- Right: Official Contact & Quick Citizen Access Plaque -->
        <div class="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
          <!-- Contact Info Plaque -->
          <div
            class="bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border-2 border-lemon-400 shadow-md shadow-lemon-400/10 space-y-1 text-right min-w-[250px]">
            <div class="flex items-center justify-end gap-2 text-xs text-slate-700">
              <span class="w-2 h-2 rounded-full bg-lemon-500 animate-pulse"></span>
              <span class="font-semibold">Email:</span>
              <a href="mailto:HaNoi@toaan.gov.vn"
                class="font-mono font-black text-lemon-700 hover:text-lemon-800 text-xs sm:text-[13px] tracking-wide">
                HaNoi@toaan.gov.vn
              </a>
            </div>
            <div class="text-[11px] text-slate-600 font-medium max-w-sm truncate"
              title="Ô đất 1-VP, Khu chức năng đô thị Nam đường vành đai 3, phường Định Công, thành phố Hà Nội">
              Địa chỉ: Ô đất 1-VP, Khu đô thị Nam đường vành đai 3, P. Định Công, Hà Nội
            </div>

            <!-- Quick Service Action Buttons -->
            <div class="flex items-center justify-end gap-2 pt-1 border-t border-lemon-200">
              <a href="#huong-dan-thu-tuc"
                class="px-2.5 py-0.5 rounded-md bg-lemon-400 hover:bg-lemon-500 text-white text-[11px] font-black tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Dịch Vụ Công</span>
              </a>

              <a href="#huong-dan-thu-tuc"
                class="px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-[11px] font-bold transition-all flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Nộp đơn trực tuyến</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Official Motto Ribbon -->
    <div
      class="relative z-10 w-full bg-gradient-to-r from-lemon-500 via-lemon-400 to-lemon-500 border-y-2 border-lemon-600 py-4 sm:py-5 shadow-sm">
      <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-center gap-2 text-center">
        <span class="text-yellow-400 text-xs sm:text-sm">★</span>
        <p class="text-[11px] sm:text-xs md:text-sm font-black text-white tracking-wider uppercase">
          "PHỤNG CÔNG, THỦ PHÁP, CHÍ CÔNG, VÔ TƯ" - "GẦN DÂN, HIỂU DÂN, GIÚP DÂN, HỌC DÂN"
        </p>
        <span class="text-yellow-400 text-xs sm:text-sm">★</span>
      </div>
    </div>
  </div>
</template>
