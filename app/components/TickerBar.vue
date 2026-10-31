<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { breakingNewsList, tickerArticles } from '../data/newsData'

const router = useRouter()
const currentIndex = ref(0)
let tickerInterval: any = null

const nextNews = () => {
  currentIndex.value = (currentIndex.value + 1) % breakingNewsList.length
}

const prevNews = () => {
  currentIndex.value = (currentIndex.value - 1 + breakingNewsList.length) % breakingNewsList.length
}

onMounted(() => {
  tickerInterval = setInterval(nextNews, 6000)
})

onUnmounted(() => {
  if (tickerInterval) clearInterval(tickerInterval)
})

const handleTickerClick = () => {
  const articleId = tickerArticles[currentIndex.value]?.id || `ticker-${currentIndex.value + 1}`
  router.push(`/tin-tuc/${articleId}`)
}

defineEmits(['openArticleModal'])
</script>

<template>
  <!-- Breaking News Ticker - Tươi sáng, nổi bật với huy hiệu đỏ tư pháp -->
  <div class="w-full bg-white border-b-2 border-lemon-200 py-1.5 sm:py-2 overflow-hidden shadow-sm">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-3">
      <!-- Badge Tin mới / Tiêu điểm -->
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lemon-400 text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-sm whitespace-nowrap border border-lemon-500/40">
          <span class="w-2 h-2 rounded-full bg-yellow-300 animate-ping"></span>
          <span>TIN MỚI NHẤT</span>
        </span>
      </div>

      <!-- Rotating Headline Text -->
      <div class="flex-1 overflow-hidden min-w-0">
        <div class="relative h-6 flex items-center">
          <transition name="fade-slide" mode="out-in">
            <a :key="currentIndex" href="#tin-tuc" @click.prevent="handleTickerClick"
              class="text-xs sm:text-sm text-slate-800 hover:text-amber-800 transition-colors font-bold truncate block w-full cursor-pointer">
              <span class="text-amber-600 mr-1.5 font-black">›</span>
              {{ breakingNewsList[currentIndex] }}
            </a>
          </transition>
        </div>
      </div>

      <!-- Prev / Next Ticker Controls -->
      <div class="flex items-center gap-1 flex-shrink-0 text-slate-600">
        <button @click="prevNews" class="p-1 hover:text-lemon-400 hover:bg-lemon-50 rounded transition-colors"
          title="Tin trước">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="text-[11px] font-mono font-bold text-slate-500">{{ currentIndex + 1 }}/{{ breakingNewsList.length
        }}</span>
        <button @click="nextNews" class="p-1 hover:text-lemon-400 hover:bg-lemon-50 rounded transition-colors"
          title="Tin kế tiếp">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
