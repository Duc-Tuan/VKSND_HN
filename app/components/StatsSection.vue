<script setup lang="ts">
import { keyStatistics } from '../data/newsData'
</script>

<template>
  <!-- Stats Section - Tươi sáng, trang nghiêm phong cách đỏ tư pháp và thẻ trắng thanh lịch -->
  <section
    class="py-10 sm:py-14 bg-gradient-to-b from-lemon-50/80 via-white to-lemon-50/50 text-slate-900 relative overflow-hidden border-y-2 border-lemon-400">
    <!-- Subtle warm glow background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lemon-200/20 via-transparent to-transparent pointer-events-none">
    </div>

    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lemon-400 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm mb-2">
          CHỈ TIÊU CÔNG TÁC TRỌNG TÂM NĂM 2026
        </span>
        <h2 class="text-lg sm:text-2xl md:text-3xl font-black text-navy-950 uppercase tracking-tight">
          KẾT QUẢ THỰC HIỆN NHIỆM VỤ CẢI CÁCH TƯ PHÁP
        </h2>
        <div
          class="w-16 h-1.5 bg-gradient-to-r from-lemon-500 via-lemon-400 to-amber-500 mx-auto mt-2 rounded-full shadow-sm">
        </div>
      </div>

      <!-- Stats Cards Grid (2x2 on mobile, 4 on desktop) - Nền trắng viền đỏ tư pháp tươi sáng -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div v-for="(stat, idx) in keyStatistics" :key="idx"
          class="bg-white rounded-2xl p-4 sm:p-6 border-2 border-lemon-200 hover:border-lemon-400 shadow-md hover:shadow-lemon-glow transition-all duration-300 text-center group hover:-translate-y-1.5 flex flex-col justify-center">
          <div
            class="text-3xl sm:text-4xl md:text-5xl font-black text-lemon-400 group-hover:scale-105 transition-transform duration-300 font-mono mb-1.5 sm:mb-2 drop-shadow-sm">
            {{ stat.number }}
          </div>
          <h3 class="text-xs sm:text-sm md:text-base font-extrabold text-navy-950 mb-1 leading-snug">
            {{ stat.label }}
          </h3>
          <p class="text-[10px] sm:text-xs text-slate-500 font-medium">
            {{ stat.sub }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
