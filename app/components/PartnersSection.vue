<script setup lang="ts">
import { partnerLinks } from '../data/newsData'
</script>

<template>
  <section class="py-6 border-b border-amber-900/10">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-2 rounded-full bg-lemon-500 animate-ping"></span>
        <h4 class="text-xs font-bold text-navy-950 uppercase tracking-wider">
          LIÊN KẾT CÁC CƠ QUAN ĐẢNG & BỘ NGÀNH TƯ PHÁP
        </h4>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        <a v-for="p in partnerLinks" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer"
          class="p-2 sm:p-2.5 rounded-lg bg-white hover:bg-lemon-50 border border-slate-200 hover:border-lemon-400 transition-all duration-200 text-center flex flex-col items-center justify-center group shadow-sm hover:shadow-md transform hover:-translate-y-1">
          <span class="text-xs font-bold text-navy-950 group-hover:text-lemon-800 transition-colors line-clamp-1">
            {{ p.name }}
          </span>
          <span class="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 line-clamp-1">
            {{ p.desc }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
