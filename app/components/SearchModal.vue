<script setup lang="ts">
import { ref, computed } from 'vue'
import { hotSpotlightNews, subHotNews, timelineNewsList, noticesList, courtSchedules, type NewsItem } from '../data/newsData'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'selectArticle'])

const searchQuery = ref('')

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase()

  const allNews = [hotSpotlightNews, ...subHotNews, ...timelineNewsList]
  const matchedNews = allNews.filter(n => 
    n.title.toLowerCase().includes(q) || 
    n.summary.toLowerCase().includes(q) ||
    n.category.toLowerCase().includes(q)
  ).map(n => ({ ...n, itemType: 'Tin tức' }))

  const matchedNotices = noticesList.filter(nt => 
    nt.title.toLowerCase().includes(q) || 
    nt.code.toLowerCase().includes(q)
  ).map(nt => ({ id: nt.id, title: nt.title, summary: nt.code + ' - ' + nt.department, date: nt.date, itemType: 'Thông báo', category: nt.type }))

  const matchedCourts = courtSchedules.filter(c => 
    c.caseName.toLowerCase().includes(q) || 
    c.caseNumber.toLowerCase().includes(q) ||
    c.prosecutor.toLowerCase().includes(q)
  ).map(c => ({ id: c.id, title: c.caseName, summary: `Số: ${c.caseNumber} | KSV: ${c.prosecutor} | Phòng: ${c.courtRoom}`, date: c.courtDate, itemType: 'Lịch xét xử', category: c.caseType }))

  return [...matchedNews, ...matchedNotices, ...matchedCourts]
})

const handleSelect = (item: any) => {
  emit('selectArticle', item)
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Search Box -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp">
      <!-- Input bar -->
      <div class="p-4 bg-navy-950 flex items-center gap-3 border-b-2 border-lemon-400">
        <svg class="w-5 h-5 text-lemon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Nhập từ khóa tìm kiếm tin tức, lịch xét xử, thông báo..."
          class="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
          autofocus
        />
        <button 
          @click="$emit('close')" 
          class="text-slate-400 hover:text-white p-1 rounded"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Quick Suggestion chips when empty -->
      <div v-if="!searchQuery" class="p-6 text-center space-y-3">
        <p class="text-xs text-slate-500 font-medium">Gợi ý từ khóa tìm kiếm phổ biến:</p>
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button 
            v-for="kw in ['Số hóa chứng cứ', 'Lịch xét xử', 'Tiếp công dân', 'Tố giác tội phạm', 'Tuyển dụng', 'Thông báo 152']"
            :key="kw"
            @click="searchQuery = kw"
            class="px-2.5 py-1 rounded-full text-xs bg-slate-100 hover:bg-lemon-50 text-slate-700 hover:text-lemon-700 border border-slate-200 transition-colors"
          >
            {{ kw }}
          </button>
        </div>
      </div>

      <!-- Search Results List -->
      <div v-else class="max-h-96 overflow-y-auto divide-y divide-slate-100 p-2">
        <div v-if="searchResults.length === 0" class="p-8 text-center text-slate-400 text-xs">
          Không tìm thấy kết quả nào phù hợp với "{{ searchQuery }}"
        </div>

        <div
          v-for="res in searchResults"
          :key="res.id"
          @click="handleSelect(res)"
          class="p-3 hover:bg-lemon-50/60 rounded-lg cursor-pointer transition-colors"
        >
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-900 text-lemon-300">
              {{ (res as any).itemType }}
            </span>
            <span class="text-[11px] text-lemon-700 font-semibold">{{ res.category }}</span>
            <span class="text-[11px] text-slate-400">• {{ res.date }}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-navy-950 hover:text-lemon-700 transition-colors">
            {{ res.title }}
          </h4>
          <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">
            {{ res.summary }}
          </p>
        </div>
      </div>

      <div class="p-3 bg-slate-50 border-t border-slate-200 text-right text-[11px] text-slate-400">
        Nhấn ESC hoặc click ra ngoài để đóng tìm kiếm
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-scaleUp {
  animation: scaleUp 0.15s ease-out forwards;
}
</style>
