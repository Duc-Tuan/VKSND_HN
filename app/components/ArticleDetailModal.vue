<script setup lang="ts">
import { ref } from 'vue'
import type { NewsItem } from '../data/newsData'

const props = defineProps<{
  article: NewsItem | null
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const isSpeaking = ref(false)
const articleFontSize = ref<'normal' | 'large'>('normal')

const toggleSpeech = () => {
  isSpeaking.value = !isSpeaking.value
}

const printArticle = () => {
  window.print()
}
</script>

<template>
  <div v-if="isOpen && article" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box - Thiết kế hiện đại chuẩn Cổng TTĐT TAND TP Hà Nội -->
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl sm:max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200/90 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Accent Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Gradient Đỏ Tư Pháp -->
      <div class="bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] text-white px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-2.5">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/20 text-yellow-300 backdrop-blur-sm border border-white/20 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            {{ article.category }}
          </span>
          <span class="text-white/60 text-xs hidden sm:inline">•</span>
          <span class="text-white/80 text-xs font-medium hidden sm:inline">{{ article.date }} ({{ article.time || '10:00' }})</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Text zoom -->
          <button 
            @click="articleFontSize = articleFontSize === 'normal' ? 'large' : 'normal'"
            class="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/25 text-white text-xs font-bold transition-all border border-white/10"
            title="Đổi cỡ chữ"
          >
            A{{ articleFontSize === 'large' ? '+' : '' }}
          </button>

          <!-- Print button -->
          <button 
            @click="printArticle" 
            class="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-all border border-white/10"
            title="In bài viết"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
          </button>

          <!-- Close button -->
          <button 
            @click="$emit('close')" 
            class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-90 ml-1"
            title="Đóng cửa sổ"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Scrollable Body Content -->
      <div class="p-5 sm:p-7 overflow-y-auto space-y-5 text-slate-800" :class="articleFontSize === 'large' ? 'text-base' : 'text-sm'">
        <!-- Article Title -->
        <h2 class="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
          {{ article.title }}
        </h2>

        <!-- Metadata Bar -->
        <div class="flex flex-wrap items-center justify-between py-2.5 px-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80 text-xs text-slate-600 gap-2">
          <div class="flex items-center gap-3">
            <span class="font-bold text-slate-800">Tác giả / BTV: {{ article.author }}</span>
            <span>•</span>
            <span>{{ article.views }} lượt xem</span>
          </div>

          <!-- AI Audio Reading button -->
          <button 
            @click="toggleSpeech"
            class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold transition-all shadow-sm active:scale-95 text-xs"
          >
            <svg class="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span>{{ isSpeaking ? 'Đang đọc tự động...' : 'Nghe giọng đọc AI' }}</span>
          </button>
        </div>

        <!-- Lead Summary -->
        <div class="p-4 bg-red-50/50 rounded-xl border-l-4 border-red-700 font-medium text-slate-800 italic leading-relaxed">
          {{ article.summary }}
        </div>

        <!-- Image if available -->
        <div v-if="article.imageUrl" class="rounded-2xl overflow-hidden shadow-md border border-slate-200">
          <img 
            :src="article.imageUrl" 
            :alt="article.title" 
            @error="(e: any) => e.target.src = '/images/tand_courtroom_hall.jpg'"
            class="w-full h-72 sm:h-80 object-cover object-center"
          />
          <p class="text-xs text-center text-slate-500 italic py-2 bg-slate-50 border-t border-slate-100">
            Hình ảnh tư liệu hoạt động công tác xét xử - TAND Thành phố Hà Nội
          </p>
        </div>

        <!-- Full Content Paragraphs -->
        <div class="prose max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>
            {{ article.content || 'Thực hiện kế hoạch công tác năm 2026, TAND TP Hà Nội tiếp tục đổi mới toàn diện các khâu công tác, đẩy mạnh cải cách tư pháp và nâng cao chất lượng xét xử các loại vụ án, gắn hoạt động tư pháp với việc bảo vệ công lý, quyền con người, quyền công dân và sự phát triển bền vững của Thủ đô.' }}
          </p>
          <p>
            Trong quá trình thực hiện quyền tư pháp và hoạt động xét xử, Tòa án nhân dân hai cấp thành phố đã chủ động áp dụng đồng bộ các giải pháp nhằm nâng cao chất lượng tranh tụng, tăng cường số hóa tài liệu hồ sơ phiên tòa, bảo đảm xét xử đúng người, đúng tội, đúng pháp luật, không làm oan người vô tội và không bỏ lọt tội phạm.
          </p>
          <p>
            Đặc biệt, Ban cán sự Đảng TAND TP Hà Nội chỉ đạo toàn thể Thẩm phán, Thư ký và công chức Tòa án tiếp tục đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh gắn với lời dạy của Bác: "Phụng công, thủ pháp, chí công, vô tư" và phương châm "Gần dân, hiểu dân, giúp dân, học dân".
          </p>
        </div>

        <!-- Share & Signature -->
        <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <strong>Nguồn:</strong> Cổng thông tin điện tử TAND TP Hà Nội
          </div>
          <div class="flex items-center gap-2">
            <span>Chia sẻ bài viết:</span>
            <button class="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors">Facebook</button>
            <button class="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-bold transition-colors">Zalo</button>
          </div>
        </div>
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
