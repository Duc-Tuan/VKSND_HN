<template>
  <footer class="bg-slate-900 text-slate-300 border-t-4 border-lemon-400 shadow-2xl">
    <!-- Top Footer Information -->
    <div class="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        
        <!-- Left Column: Agency Identification (5 Cột) -->
        <div class="md:col-span-5 space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 sm:w-12 sm:h-12 p-1 rounded-xl bg-lemon-400 flex items-center justify-center flex-shrink-0 shadow-lemon-sm">
              <div class="w-full h-full rounded-lg bg-white flex items-center justify-center p-1">
                <img
                  src="https://hanoi.toaan.gov.vn/webcenter/oracle/webcenter/siteresources/scopedMD/shared/portaltinh/images/logo.png"
                  alt="Logo TAND TP Hà Nội"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <span class="text-[10px] sm:text-[11px] font-semibold text-lemon-400 uppercase tracking-wider block">TÒA ÁN NHÂN DÂN TỐI CAO</span>
              <h3 class="text-xs sm:text-base font-extrabold text-white uppercase">TÒA ÁN NHÂN DÂN THÀNH PHỐ HÀ NỘI</h3>
            </div>
          </div>

          <div class="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p class="flex items-start gap-2">
              <svg class="w-4 h-4 text-lemon-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span><strong>Trụ sở chính:</strong> Số 43 Hai Bà Trưng, Phường Tràng Tiền, Quận Hoàn Kiếm, Thành phố Hà Nội</span>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-4 h-4 text-lemon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span><strong>Điện thoại:</strong> (024) 3825.5999 - <strong>Fax:</strong> (024) 3825.6888</span>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-4 h-4 text-lemon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span><strong>Email tiếp nhận:</strong> hanoi@toaan.gov.vn / toaanhanoi@toaan.gov.vn</span>
            </p>
          </div>

          <div class="pt-1 text-[11px] sm:text-xs text-slate-400">
            <p>Giấy phép xuất bản Cổng thông tin điện tử số: 88/GP-TTĐT do Cục Phát thanh, Truyền hình và Thông tin điện tử cấp.</p>
            <p class="mt-0.5">Người chịu trách nhiệm chính: Đồng chí Phó Chánh án phụ trách Cổng thông tin điện tử.</p>
          </div>
        </div>

        <!-- Middle Column: Quick Sitemap Links (4 Cột) -->
        <div class="md:col-span-4 space-y-2.5 sm:space-y-3">
          <h4 class="text-xs font-bold text-lemon-400 uppercase tracking-wider pb-2 border-b border-navy-800">
            CHUYÊN TRANG & CỔNG THÀNH VIÊN
          </h4>
          <ul class="space-y-2 text-xs">
            <li>
              <a href="#tin-tuc" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Tin tức sự kiện & Hoạt động ngành Tòa án
              </a>
            </li>
            <li>
              <a href="#lich-xet-xu" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Tra cứu Lịch xét xử các phiên tòa
              </a>
            </li>
            <li>
              <a href="#thong-bao" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Thông báo & Văn bản chỉ đạo điều hành
              </a>
            </li>
            <li>
              <a href="#huong-dan-thu-tuc" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Hướng dẫn thủ tục & Biểu mẫu tố tụng
              </a>
            </li>
            <li>
              <a href="#huong-dan-thu-tuc" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Nộp đơn khởi kiện, phản ánh trực tuyến
              </a>
            </li>
            <li>
              <a href="#thong-bao" class="hover:text-lemon-300 transition-colors flex items-center gap-1.5">
                <span class="text-lemon-400">›</span> Đăng ký tiếp công dân định kỳ
              </a>
            </li>
          </ul>
        </div>

        <!-- Right Column: Hotline & Emergency Contact (3 Cột) -->
        <div class="md:col-span-3 space-y-3 sm:space-y-4">
          <h4 class="text-xs font-bold text-lemon-400 uppercase tracking-wider pb-2 border-b border-navy-800">
            TIẾP NHẬN PHẢN ÁNH 24/7
          </h4>

          <div class="bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-lemon-400/40 text-center space-y-1.5 sm:space-y-2">
            <span class="text-[11px] text-slate-300 block">Tổng đài tiếp nhận thông tin</span>
            <div class="text-base sm:text-lg font-black text-lemon-400 font-mono">0243.825.5999</div>
            <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-lemon-400 text-navy-950">
              Trực ban 24/24 giờ
            </span>
          </div>

          <div class="text-[10px] sm:text-[11px] text-slate-400 text-center">
            Ghi rõ nguồn "Cổng TTĐT Tòa án nhân dân TP Hà Nội" khi phát hành lại thông tin từ website này.
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="bg-slate-950 border-t border-slate-800 py-3.5 sm:py-4 px-3 sm:px-6 text-center text-xs text-slate-400">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        <p>© 2026 Bản quyền thuộc về Tòa án nhân dân thành phố Hà Nội.</p>
        <p class="text-[10px] sm:text-[11px] text-lemon-400/80 font-mono">Hệ thống Cổng thông tin điện tử TAND TP Hà Nội</p>
      </div>
    </div>
  </footer>
</template>
