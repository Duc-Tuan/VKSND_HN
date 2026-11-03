<script setup lang="ts">
import { ref, computed } from 'vue'
import { hotSpotlightNews, subHotNews, timelineNewsList, noticesList, courtSchedules, type NewsItem } from '../data/newsData'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'selectArticle'])

const searchQuery = ref('')
const selectedType = ref<'all' | 'news' | 'notice' | 'court'>('all')

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase()

  const allNews = [hotSpotlightNews, ...subHotNews, ...timelineNewsList]
  const matchedNews = allNews.filter(n => 
    n.title.toLowerCase().includes(q) || 
    n.summary.toLowerCase().includes(q) ||
    n.category.toLowerCase().includes(q)
  ).map(n => ({ ...n, itemType: 'Tin tức', filterKey: 'news' }))

  const matchedNotices = noticesList.filter(nt => 
    nt.title.toLowerCase().includes(q) || 
    nt.code.toLowerCase().includes(q)
  ).map(nt => ({ id: nt.id, title: nt.title, summary: nt.code + ' - ' + nt.department, date: nt.date, itemType: 'Thông báo', category: nt.type, filterKey: 'notice' }))

  const matchedCourts = courtSchedules.filter(c => 
    c.caseName.toLowerCase().includes(q) || 
    c.caseNumber.toLowerCase().includes(q) ||
    c.prosecutor.toLowerCase().includes(q)
  ).map(c => ({ id: c.id, title: c.caseName, summary: `Số: ${c.caseNumber} | Thẩm phán: ${c.judge} | Phòng: ${c.courtRoom}`, date: c.courtDate, itemType: 'Lịch xét xử', category: c.caseType, filterKey: 'court' }))

  const combined = [...matchedNews, ...matchedNotices, ...matchedCourts]
  if (selectedType.value === 'all') return combined
  return combined.filter(i => (i as any).filterKey === selectedType.value)
})

const handleSelect = (item: any) => {
  emit('selectArticle', item)
  emit('close')
}

const clearSearch = () => {
  searchQuery.value = ''
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-12 sm:pt-20 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box - Thiết kế hiện đại chuẩn Cổng thông tin Nhà nước -->
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl sm:max-w-3xl w-full overflow-hidden border border-slate-200/90 z-10 animate-scaleUp">
      <!-- Top Decorative Accent Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Gradient Đỏ Tư Pháp -->
      <div class="bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] text-white p-4 sm:p-5 sm:px-6 flex items-center justify-between gap-3 shadow-sm">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-yellow-300">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white leading-tight">
              Tra Cứu & Tìm Kiếm Thông Tin
            </h3>
            <p class="text-[11px] text-white/80 font-medium">Cổng thông tin điện tử TAND TP Hà Nội</p>
          </div>
        </div>

        <button 
          @click="$emit('close')" 
          class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-90"
          title="Đóng tìm kiếm (ESC)"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Search Input Box -->
      <div class="p-4 sm:p-5 border-b border-slate-200/80 bg-slate-50/60">
        <div class="relative flex items-center">
          <div class="absolute left-3.5 text-slate-400 pointer-events-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Nhập từ khóa tìm kiếm tin tức, lịch xét xử, thông báo chỉ đạo..."
            class="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-white text-slate-900 text-sm placeholder-slate-400 shadow-sm transition-all"
            autofocus
          />
          <button 
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-3 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100"
            title="Xóa tìm kiếm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Filter tabs when has query -->
        <div v-if="searchQuery" class="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-200/60 text-xs">
          <span class="text-slate-500 font-semibold mr-1">Lọc:</span>
          <button
            v-for="tab in [
              { key: 'all', label: 'Tất cả' },
              { key: 'news', label: 'Tin tức' },
              { key: 'notice', label: 'Thông báo' },
              { key: 'court', label: 'Lịch xét xử' }
            ]"
            :key="tab.key"
            @click="selectedType = tab.key as any"
            class="px-2.5 py-1 rounded-lg font-bold transition-all"
            :class="selectedType === tab.key 
              ? 'bg-red-700 text-white shadow-sm' 
              : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Quick Suggestion chips when empty -->
      <div v-if="!searchQuery" class="p-6 sm:p-8 text-center space-y-3">
        <p class="text-xs sm:text-sm text-slate-600 font-semibold">Gợi ý các từ khóa tìm kiếm phổ biến:</p>
        <div class="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
          <button 
            v-for="kw in ['Số hóa chứng cứ', 'Lịch xét xử', 'Tiếp công dân', 'Tố giác tội phạm', 'Tuyển dụng Thư ký', 'Chỉ đạo điều hành']"
            :key="kw"
            @click="searchQuery = kw"
            class="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200/80 hover:border-red-200 transition-all active:scale-95 shadow-sm"
          >
            🔍 {{ kw }}
          </button>
        </div>
      </div>

      <!-- Search Results List -->
      <div v-else class="max-h-96 overflow-y-auto divide-y divide-slate-100 p-3 sm:p-4 space-y-1">
        <div v-if="searchResults.length === 0" class="py-10 text-center text-slate-400 text-sm space-y-2">
          <p class="text-base font-semibold text-slate-600">Không tìm thấy kết quả nào phù hợp</p>
          <p class="text-xs">Vui lòng thử lại với từ khóa khác như "lịch xét xử", "thông báo", "bản án"...</p>
        </div>

        <div
          v-for="res in searchResults"
          :key="res.id"
          @click="handleSelect(res)"
          class="p-3 sm:p-3.5 hover:bg-red-50/50 rounded-xl cursor-pointer transition-all border border-transparent hover:border-red-100 group"
        >
          <div class="flex items-center gap-2 mb-1.5">
            <span 
              class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider"
              :class="{
                'bg-red-100 text-red-800 border border-red-200': (res as any).itemType === 'Tin tức',
                'bg-blue-100 text-blue-800 border border-blue-200': (res as any).itemType === 'Thông báo',
                'bg-amber-100 text-amber-800 border border-amber-200': (res as any).itemType === 'Lịch xét xử'
              }"
            >
              {{ (res as any).itemType }}
            </span>
            <span class="text-[11px] text-red-700 font-bold">{{ res.category }}</span>
            <span class="text-[11px] text-slate-400">• {{ res.date }}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug">
            {{ res.title }}
          </h4>
          <p class="text-xs text-slate-500 line-clamp-1 mt-1 leading-relaxed">
            {{ res.summary }}
          </p>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="p-3 px-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
        <span>Nhấn <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px] shadow-sm">ESC</kbd> để đóng</span>
        <span class="text-slate-400">Hệ thống tra cứu dữ liệu TAND TP Hà Nội</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.96) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-scaleUp {
  animation: scaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
