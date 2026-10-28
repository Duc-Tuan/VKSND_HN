<template>
  <div
    class="relative bg-gradient-to-b from-lemon-50/60 via-white to-lemon-50/40 text-slate-900 overflow-hidden border-b border-lemon-300">
    <!-- Architectural Headquarters Background Image - Daylight & Bright -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/tand_hanoi_facade.jpg"
        alt="Trụ sở Tòa án nhân dân thành phố Hà Nội"
        class="w-full h-full object-cover object-right md:object-center opacity-40 md:opacity-50 scale-100 filter brightness-105 contrast-105" />
      <!-- Fresh, Bright Daylight Multi-Stop Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/85 to-white/40"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-lemon-100/30 via-transparent to-lemon-100/40"></div>
    </div>

    <!-- Main Header Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-3 lg:py-4">
      <div class="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 lg:gap-8">

        <!-- Left: Official Institutional Identity (Logo & Typography) -->
        <div class="flex items-center gap-3.5 sm:gap-5 md:gap-6 text-left w-full lg:w-auto">

          <!-- Official TAND Emblem with Brilliant Lemon-Yellow Aura - Hình vuông bo góc chuẩn đẹp -->
          <a href="/" class="group flex-shrink-0 transition-transform duration-300 hover:scale-105"
            title="Trang chủ TAND TP Hà Nội">
            <div
              class="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl p-1 bg-gradient-to-b from-lemon-400 via-amber-400 to-lemon-500 shadow-xl shadow-lemon-500/20">
              <div
                class="w-full h-full rounded-xl bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-inner">
                <img src="https://hanoi.toaan.gov.vn/webcenter/oracle/webcenter/siteresources/scopedMD/shared/portaltinh/images/logo.png"
                  alt="Logo Tòa án nhân dân thành phố Hà Nội" class="w-full h-full object-contain drop-shadow" />
              </div>
            </div>
          </a>

          <!-- Institutional Title Hierarchy - Uy nghiêm, chuẩn mực, tươi sáng -->
          <div class="space-y-0.5 sm:space-y-1">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-600 shadow-sm"></span>
              <p
                class="text-[11px] sm:text-xs md:text-sm font-black tracking-[0.15em] text-red-700 uppercase leading-none">
                TÒA ÁN NHÂN DÂN TỐI CAO
              </p>
            </div>

            <h1
              class="text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-black text-navy-950 tracking-tight leading-tight uppercase drop-shadow-sm">
              TÒA ÁN NHÂN DÂN <span
                class="text-amber-600 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">THÀNH
                PHỐ HÀ NỘI</span>
            </h1>

            <div class="flex items-center gap-2 pt-0.5">
              <span
                class="px-2 py-0.5 rounded bg-lemon-400 text-navy-950 text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
                CỔNG THÔNG TIN ĐIỆN TỬ CHÍNH THỨC
              </span>
              <span class="hidden sm:inline text-slate-400">•</span>
              <span class="hidden sm:inline text-[10px] sm:text-xs text-slate-600 font-semibold tracking-wide">
                HANOI PEOPLE'S COURT ELECTRONIC PORTAL
              </span>
            </div>
          </div>

        </div>

        <!-- Right: Official Contact & Quick Citizen Access Plaque - Tươi sáng, sang trọng -->
        <div class="hidden lg:flex items-center gap-4 flex-shrink-0">

          <!-- Contact Info Plaque -->
          <div
            class="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border-2 border-lemon-400 shadow-lg shadow-lemon-400/15 space-y-1.5 text-right min-w-[260px]">
            <div class="flex items-center justify-end gap-2 text-xs text-slate-700">
              <span class="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span class="font-semibold">Đường dây nóng 24/7:</span>
              <a href="tel:02438255999"
                class="font-mono font-black text-red-700 hover:text-red-800 text-sm tracking-wide">
                0243.825.5999
              </a>
            </div>
            <div class="text-[11px] text-slate-600 font-medium truncate">
              Trụ sở: 43 Hai Bà Trưng, Q. Hoàn Kiếm, TP. Hà Nội
            </div>

            <!-- Quick Service Action Buttons -->
            <div class="flex items-center justify-end gap-2 pt-1.5 border-t border-lemon-200">
              <a href="#huong-dan-thu-tuc"
                class="px-3 py-1 rounded-lg bg-lemon-400 hover:bg-lemon-300 text-navy-950 text-[11px] font-black tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Dịch Vụ Công</span>
              </a>

              <a href="#huong-dan-thu-tuc"
                class="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-[11px] font-bold transition-all flex items-center gap-1.5">
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

    <!-- Official Motto Ribbon (Lời Bác dạy cán bộ Tòa án nhân dân) -->
    <div
      class="relative z-10 w-full bg-gradient-to-r from-lemon-400 via-lemon-300 to-lemon-400 border-y-2 border-lemon-400 py-2 px-4 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span class="text-amber-800 text-xs sm:text-sm">★</span>
        <p class="text-[11px] sm:text-xs md:text-sm font-black text-navy-950 tracking-wide uppercase">
          Lời Bác dạy cán bộ Tòa án:
          <span class="underline decoration-red-600 decoration-2 underline-offset-4 ml-1">
            "Phụng công, thủ pháp, chí công, vô tư" - "Gần dân, hiểu dân, giúp dân, học dân"
          </span>
        </p>
        <span class="text-amber-800 text-xs sm:text-sm">★</span>
      </div>
    </div>
  </div>
</template>
