<script setup lang="ts">
import { ref, computed } from 'vue'
import { noticesList, type NoticeItem } from '../data/newsData'

const activeNoticeTab = ref('Tất cả')

const emit = defineEmits(['viewNotice'])

const filteredNotices = computed(() => {
  if (activeNoticeTab.value === 'Tất cả') return noticesList
  return noticesList.filter(n => n.type === activeNoticeTab.value)
})
</script>

<template>
  <section id="thong-bao" class="py-6 sm:py-8 overflow-hidden">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

        <!-- Left Column: THÔNG BÁO & VĂN BẢN CHỈ ĐẠO ĐIỀU HÀNH (8 Cột) -->
        <div class="reveal-left lg:col-span-8 bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 shadow-sm">
          <!-- Header with tabs: Xuống dòng rộng rãi thoải mái, không scroll ngang, tiêu đề không bị bẻ vụn -->
          <div
            class="flex flex-col items-start justify-between pb-3 sm:pb-3.5 mb-3.5 sm:mb-4 border-b-2 border-lemon-400 gap-2.5 sm:gap-3">
            <div class="flex items-center gap-2.5 flex-1 min-w-0">
              <div class="w-2.5 h-6 bg-lemon-500 rounded-sm flex-shrink-0"></div>
              <h2 class="text-base sm:text-lg md:text-xl font-extrabold text-navy-950 uppercase tracking-tight">
                THÔNG BÁO & CHỈ ĐẠO ĐIỀU HÀNH
              </h2>
            </div>

            <!-- Tabs: Xuống dòng rộng rãi thoải mái, không cuộn ngang -->
            <div
              class="flex flex-wrap items-center gap-1 sm:gap-1.5 text-xs p-1 bg-slate-100 rounded-lg border border-slate-200 self-start xl:self-auto">
              <button v-for="tab in ['Tất cả', 'Thông báo', 'Văn bản hướng dẫn', 'Tuyển dụng']" :key="tab"
                @click="activeNoticeTab = tab"
                class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all duration-200 whitespace-nowrap font-bold text-[11px] sm:text-xs"
                :class="activeNoticeTab === tab
                  ? 'bg-white text-navy-950 font-black shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'">
                {{ tab }}
              </button>
            </div>
          </div>

          <!-- Notice Items List with scroll reveal -->
          <div class="divide-y divide-slate-100">
            <div v-for="(notice, idx) in filteredNotices" :key="notice.id" @click="$emit('viewNotice', notice)"
              class="reveal-on-scroll group cursor-pointer py-3 hover:bg-lemon-50/50 px-1.5 sm:px-2 rounded-lg transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 transform hover:translate-x-1"
              :class="'delay-' + ((idx + 1) * 100)">
              <div class="flex items-start gap-2.5 sm:gap-3 flex-1 min-w-0">
                <!-- Document Icon -->
                <div
                  class="w-7 h-7 sm:w-8 sm:h-8 rounded bg-lemon-100 text-lemon-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-lemon-400 group-hover:text-white transition-colors">
                  <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <!-- Info -->
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                    <span
                      class="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold bg-navy-900 text-white">
                      {{ notice.code }}
                    </span>
                    <span
                      class="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {{ notice.department }}
                    </span>
                    <span class="text-[10px] sm:text-[11px] text-slate-400">
                      {{ notice.date }}
                    </span>
                  </div>

                  <h4
                    class="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-lemon-700 transition-colors leading-snug">
                    {{ notice.title }}
                  </h4>
                </div>
              </div>

              <!-- Download Button -->
              <div class="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                <button
                  class="px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-400 text-slate-700 hover:text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1 border border-slate-200 transition-all active:scale-95 shadow-sm"
                  title="Tải tệp văn bản đính kèm">
                  <svg class="w-3.5 h-3.5 text-lemon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Tải PDF</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom View All -->
          <div class="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-[11px] sm:text-xs text-slate-500">Hiển thị các văn bản mới nhất</span>
            <a href="#tat-ca-thong-bao"
              class="font-bold text-navy-900 hover:text-lemon-700 transition-colors inline-flex items-center gap-1 group text-[11px] sm:text-xs">
              <span>Xem toàn bộ văn bản</span>
              <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column: LỊCH CÔNG TÁC TUẦN & TIẾP DÂN (4 Cột) -->
        <div class="reveal-right lg:col-span-4 space-y-4">
          <!-- Tiếp công dân Box - Tươi sáng, chuẩn mực cơ quan tư pháp -->
          <div
            class="bg-gradient-to-br from-lemon-50/90 via-white to-lemon-50/60 text-slate-900 rounded-xl p-4 sm:p-5 border-2 border-lemon-400 shadow-sm">
            <div class="flex items-center gap-2 pb-2 mb-3 border-b border-lemon-200">
              <div class="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></div>
              <h3 class="text-xs font-black uppercase text-navy-950 tracking-wide">
                LỊCH TIẾP CÔNG DÂN ĐỊNH KỲ
              </h3>
            </div>

            <p class="text-xs text-slate-700 mb-3">
              Chánh án TAND TP Hà Nội tiếp công dân vào <strong class="text-lemon-700">thứ Năm tuần thứ 3</strong>
              hàng tháng.
            </p>

            <div class="bg-white rounded-lg p-3 text-xs space-y-2 border border-lemon-200 shadow-sm mb-3">
              <div class="flex items-center justify-between text-slate-600">
                <span>Phiên tiếp tiếp theo:</span>
                <strong class="text-lemon-700 font-mono font-black">19/11/2026</strong>
              </div>
              <div class="flex items-center justify-between text-slate-600">
                <span>Thời gian:</span>
                <span class="text-navy-950 font-bold">08h00 - 11h30</span>
              </div>
              <div class="flex items-center justify-between text-slate-600">
                <span>Địa điểm:</span>
                <span class="text-navy-950 font-bold">Phòng Tiếp dân TAND TP</span>
              </div>
            </div>

            <a href="#tiep-dan"
              class="w-full block text-center py-2 px-3 rounded-lg bg-lemon-400 hover:bg-lemon-500 text-white font-black text-xs uppercase transition-all shadow-sm active:scale-95 border border-lemon-500/40">
              Đăng ký tiếp công dân trực tuyến
            </a>
          </div>

          <!-- Tiếp nhận phản ánh chống tiêu cực mini box -->
          <div class="reveal-scale delay-150 bg-white rounded-xl p-4 border-2 border-lemon-400 shadow-sm">
            <h4 class="text-xs font-bold text-navy-950 uppercase flex items-center gap-1.5 mb-2">
              <span class="w-2 h-2 rounded-full bg-lemon-500 animate-pulse"></span>
              TIẾP NHẬN PHẢN ÁNH CHỐNG TIÊU CỰC
            </h4>
            <p class="text-xs text-slate-600 mb-2">
              Ban Thanh tra TAND Tối cao và Tòa án nhân dân TP Hà Nội tiếp nhận 24/7:
            </p>
            <div class="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200">
              <span class="text-xs font-bold text-navy-950">Email tiếp nhận:</span>
              <a href="mailto:HaNoi@toaan.gov.vn"
                class="text-xs font-black text-lemon-700 hover:underline font-mono">HaNoi@toaan.gov.vn</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
