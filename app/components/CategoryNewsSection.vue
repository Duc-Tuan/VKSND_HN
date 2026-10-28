<script setup lang="ts">
import { ref } from 'vue'
import { categoryNewsList, type NewsItem } from '../data/newsData'

const activeCategory = ref<'hinhsu' | 'dansu' | 'xaydung'>('hinhsu')

const emit = defineEmits(['openArticle'])
</script>

<template>
  <section class="py-6 sm:py-8 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-3 sm:px-6">
      
      <!-- Section Header with Category Selector -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b-2 border-lemon-400 gap-2.5 sm:gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-2.5 h-6 bg-lemon-500 rounded-sm flex-shrink-0"></div>
          <h2 class="text-base sm:text-lg md:text-xl font-extrabold text-navy-950 uppercase">
            CHUYÊN ĐỀ HOẠT ĐỘNG XÉT XỬ & NGHIỆP VỤ TÒA ÁN
          </h2>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs overflow-x-auto scrollbar-none">
          <button
            @click="activeCategory = 'hinhsu'"
            class="px-3 py-1.5 rounded-md font-bold transition-all duration-200 whitespace-nowrap text-[11px] sm:text-xs"
            :class="activeCategory === 'hinhsu' ? 'bg-white text-navy-950 font-black shadow-sm' : 'text-slate-600 hover:text-navy-900'"
          >
            Án Hình Sự
          </button>
          <button
            @click="activeCategory = 'dansu'"
            class="px-3 py-1.5 rounded-md font-bold transition-all duration-200 whitespace-nowrap text-[11px] sm:text-xs"
            :class="activeCategory === 'dansu' ? 'bg-white text-navy-950 font-black shadow-sm' : 'text-slate-600 hover:text-navy-900'"
          >
            Dân sự - Hành chính
          </button>
          <button
            @click="activeCategory = 'xaydung'"
            class="px-3 py-1.5 rounded-md font-bold transition-all duration-200 whitespace-nowrap text-[11px] sm:text-xs"
            :class="activeCategory === 'xaydung' ? 'bg-white text-navy-950 font-black shadow-sm' : 'text-slate-600 hover:text-navy-900'"
          >
            Xây dựng ngành
          </button>
        </div>
      </div>

      <!-- Category News Cards Grid with Smooth Out-In Transition (Eliminates Jerkiness) -->
      <transition name="tab-fade" mode="out-in">
        <div 
          :key="activeCategory"
          class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          <article
            v-for="item in categoryNewsList[activeCategory]"
            :key="item.id"
            @click="$emit('openArticle', item)"
            class="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-lemon-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <!-- Image -->
              <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  @error="(e: any) => e.target.src = '/images/tand_courtroom_hall.jpg'"
                  class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-900/90 text-lemon-300 border border-lemon-400/30 backdrop-blur-sm">
                  {{ item.category }}
                </span>
              </div>

              <!-- Content -->
              <div class="p-4 sm:p-5">
                <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{{ item.date }}</span>
                  <span>{{ item.views }} lượt đọc</span>
                </div>

                <h3 class="text-xs sm:text-sm md:text-base font-bold text-navy-950 group-hover:text-lemon-700 transition-colors leading-snug line-clamp-2 mb-2">
                  {{ item.title }}
                </h3>

                <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {{ item.summary }}
                </p>
              </div>
            </div>

            <!-- Bottom Footer: Tránh gãy rụng chữ khi màn hình nhỏ -->
            <div class="px-3.5 sm:px-5 py-2.5 sm:py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs gap-2">
              <span class="text-slate-500 font-medium truncate flex-1 min-w-0" :title="'BTV: ' + item.author">BTV: {{ item.author }}</span>
              <span class="text-lemon-700 font-bold group-hover:underline flex-shrink-0 whitespace-nowrap">Xem thêm ›</span>
            </div>
          </article>
        </div>
      </transition>

    </div>
  </section>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
