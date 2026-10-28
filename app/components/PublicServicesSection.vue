<script setup lang="ts">
import { publicServices } from '../data/newsData'

const emit = defineEmits(['openServiceModal'])
</script>

<template>
  <section id="huong-dan-thu-tuc" class="py-6 sm:py-8 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 overflow-hidden">
    <div class="max-w-7xl mx-auto px-3 sm:px-6">
      
      <!-- Section Header with reveal -->
      <div class="reveal-on-scroll text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lemon-100 text-lemon-900 border border-lemon-400 text-[11px] sm:text-xs font-bold mb-2 animate-floatSoft">
          <svg class="w-3.5 h-3.5 text-lemon-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          HƯỚNG DẪN THỦ TỤC & DỊCH VỤ CÔNG TRỰC TUYẾN
        </div>
        <h2 class="text-lg sm:text-2xl md:text-3xl font-black text-navy-950 uppercase tracking-tight">
          CỔNG DỊCH VỤ TƯ PHÁP VÌ NHÂN DÂN
        </h2>
        <p class="text-[11px] sm:text-sm text-slate-600 mt-1">
          Nhanh chóng - Minh bạch - Tiết kiệm thời gian và đảm bảo quyền lợi hợp pháp của công dân
        </p>
      </div>

      <!-- Services 4 Cards Grid with Staggered Scroll Reveal -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div
          v-for="(service, idx) in publicServices"
          :key="service.id"
          @click="$emit('openServiceModal', service)"
          class="reveal-on-scroll group cursor-pointer bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 hover:border-lemon-400 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          :class="'delay-' + ((idx + 1) * 100)"
        >
          <!-- Lemon corner highlight -->
          <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-lemon-200/50 to-transparent rounded-bl-full pointer-events-none group-hover:from-lemon-300/80 transition-colors"></div>

          <div>
            <!-- Badge & Icon -->
            <div class="flex items-center justify-between mb-3.5 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lemon-100 group-hover:bg-lemon-400 text-amber-800 group-hover:text-navy-950 border border-lemon-300 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110 flex-shrink-0">
                <!-- SVG Icon switch based on id -->
                <svg v-if="service.id === 'ps-1'" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <svg v-else-if="service.id === 'ps-2'" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <svg v-else-if="service.id === 'ps-3'" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
                <svg v-else class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>

              <span class="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-lemon-100 text-lemon-900 border border-lemon-300">
                {{ service.badge }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-lemon-700 transition-colors mb-1.5 sm:mb-2 leading-snug">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              {{ service.desc }}
            </p>
          </div>

          <!-- Bottom Button -->
          <div class="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-navy-900 group-hover:text-lemon-700">
            <span>Thực hiện ngay</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Quick Guidance Banner: Quy trình 3 bước - Tươi sáng, hài hòa sắc vàng chanh -->
      <div class="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-lemon-100 via-amber-50 to-lemon-100 text-slate-900 border-2 border-lemon-400 shadow-md">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lemon-400 text-navy-950 font-black flex items-center justify-center flex-shrink-0 text-sm shadow-lemon-sm animate-pulse">
              i
            </div>
            <div>
              <h4 class="text-xs sm:text-sm md:text-base font-extrabold text-navy-950">Quy trình nộp đơn tố giác trực tuyến 3 bước</h4>
              <p class="text-[11px] sm:text-xs text-slate-700 font-medium">Nhập thông tin cá nhân > Đính kèm tài liệu chứng cứ > Nhận mã tra cứu qua SMS/Email</p>
            </div>
          </div>
          <button 
            @click="$emit('openServiceModal', publicServices[0])"
            class="w-full sm:w-auto px-5 py-2 sm:py-2.5 rounded-xl bg-lemon-400 hover:bg-lemon-300 text-navy-950 font-black text-xs uppercase tracking-wide transition-all shadow-md hover:shadow-lemon-glow whitespace-nowrap active:scale-95"
          >
            Bắt đầu nộp đơn
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
