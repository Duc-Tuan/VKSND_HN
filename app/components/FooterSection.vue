<template>
  <footer class="bg-slate-900 text-slate-300 border-t-4 border-lemon-400 shadow-2xl">
    <!-- Top Footer Information -->
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">

        <!-- Left Column: Agency Identification (7 Cột) -->
        <div class="md:col-span-7 space-y-3.5 sm:space-y-4">
          <div class="flex items-center gap-3.5">
            <div class="w-14 h-14 flex items-center justify-center flex-shrink-0">
              <img src="/images/logo_tand.png" alt="Logo TAND TP Hà Nội"
                class="w-full h-full object-contain filter drop-shadow-md" />
            </div>
            <div>
              <span class="text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wider block">TÒA ÁN NHÂN DÂN
                TỐI CAO</span>
              <h3 class="text-sm sm:text-lg font-black text-white uppercase tracking-tight">TÒA ÁN NHÂN DÂN THÀNH PHỐ HÀ
                NỘI</h3>
            </div>
          </div>

          <div class="space-y-2.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
            <p class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong>Địa chỉ:</strong> Ô đất 1-VP, Khu chức năng đô thị Nam đường vành đai 3, phường Định Công,
                thành phố Hà Nội</span>
            </p>
            <p class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span><strong>Email:</strong> <a href="mailto:HaNoi@toaan.gov.vn"
                  class="hover:underline text-white font-semibold">HaNoi@toaan.gov.vn</a></span>
            </p>
          </div>

          <div class="pt-1.5 text-xs sm:text-[13px] text-slate-400 space-y-1">
            <p>Giấy phép xuất bản Cổng thông tin điện tử số: 88/GP-TTĐT do Cục Phát thanh, Truyền hình và Thông tin điện
              tử cấp.</p>
            <p>Người chịu trách nhiệm chính: Đồng chí Phó Chánh án phụ trách Cổng thông tin điện tử.</p>
          </div>
        </div>

        <!-- Right Column: Quick Sitemap Links (5 Cột) -->
        <div class="md:col-span-5 space-y-3 sm:space-y-4">
          <h4
            class="text-sm sm:text-base font-black text-red-400 uppercase tracking-wider pb-2.5 border-b border-navy-800">
            CHUYÊN TRANG & CỔNG THÀNH VIÊN
          </h4>
          <ul class="space-y-3 text-sm sm:text-[14px]">
            <li>
              <a href="#tin-tuc" class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Tin tức sự kiện & Hoạt động ngành Tòa án</span>
              </a>
            </li>
            <li>
              <a href="#lich-xet-xu" class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Tra cứu Lịch xét xử các phiên tòa</span>
              </a>
            </li>
            <li>
              <a href="#thong-bao" class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Thông báo & Văn bản chỉ đạo điều hành</span>
              </a>
            </li>
            <li>
              <a href="#huong-dan-thu-tuc"
                class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Hướng dẫn thủ tục & Biểu mẫu tố tụng</span>
              </a>
            </li>
            <li>
              <a href="#huong-dan-thu-tuc"
                class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Nộp đơn khởi kiện, phản ánh trực tuyến</span>
              </a>
            </li>
            <li>
              <a href="#thong-bao" class="hover:text-red-300 transition-colors flex items-center gap-2 font-medium">
                <span class="text-red-400 text-base font-black flex-shrink-0">›</span>
                <span>Đăng ký tiếp công dân định kỳ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div
      class="bg-slate-950 border-t border-slate-800 py-3.5 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm text-slate-400">
      <div class="max-w-[96%] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        <p>© 2026 Bản quyền thuộc về Tòa án nhân dân thành phố Hà Nội. Ghi rõ nguồn khi phát hành lại thông tin từ
          website này.</p>
        <p class="text-xs sm:text-sm font-mono">Hệ thống Cổng thông tin điện tử TAND TP Hà Nội</p>
      </div>
    </div>
  </footer>
</template>
