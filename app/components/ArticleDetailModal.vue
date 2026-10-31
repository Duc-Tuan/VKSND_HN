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
      class="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp my-auto">
      <!-- Header Bar with Lemon Accent -->
      <div class="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b-2 border-lemon-400">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-lemon-400 text-white">
            {{ article.category }}
          </span>
          <span class="text-xs text-slate-300">| {{ article.date }} ({{ article.time || '10:00' }})</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Text zoom -->
          <button 
            @click="articleFontSize = articleFontSize === 'normal' ? 'large' : 'normal'"
            class="p-1.5 rounded hover:bg-navy-800 text-slate-300 hover:text-lemon-300 text-xs font-bold"
            title="Đổi cỡ chữ"
          >
            A{{ articleFontSize === 'large' ? '+' : '' }}
          </button>

          <!-- Print button -->
          <button 
            @click="printArticle" 
            class="p-1.5 rounded hover:bg-navy-800 text-slate-300 hover:text-lemon-300"
            title="In bài viết"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
          </button>

          <!-- Close button -->
          <button 
            @click="$emit('close')" 
            class="p-1.5 rounded-full hover:bg-navy-800 text-slate-300 hover:text-white"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Scrollable Body Content -->
      <div class="p-6 overflow-y-auto space-y-5 text-slate-800" :class="articleFontSize === 'large' ? 'text-base' : 'text-sm'">
        <!-- Article Title -->
        <h2 class="text-xl sm:text-2xl font-black text-navy-950 leading-snug">
          {{ article.title }}
        </h2>

        <!-- Metadata Bar -->
        <div class="flex flex-wrap items-center justify-between py-2.5 px-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500 gap-2">
          <div class="flex items-center gap-3">
            <span class="font-semibold text-navy-900">BTV/Tác giả: {{ article.author }}</span>
            <span>•</span>
            <span>{{ article.views }} lượt xem</span>
          </div>

          <!-- AI Audio Reading button -->
          <button 
            @click="toggleSpeech"
            class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-lemon-400 text-white font-bold hover:bg-lemon-500 transition-colors shadow-sm"
          >
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span>{{ isSpeaking ? 'Đang đọc tự động...' : 'Nghe giọng đọc AI' }}</span>
          </button>
        </div>

        <!-- Lead Summary -->
        <div class="p-4 bg-lemon-50/60 rounded-xl border-l-4 border-lemon-500 font-semibold text-slate-800 italic leading-relaxed">
          {{ article.summary }}
        </div>

        <!-- Image if available -->
        <div v-if="article.imageUrl" class="rounded-xl overflow-hidden shadow-md">
          <img 
            :src="article.imageUrl" 
            :alt="article.title" 
            @error="(e: any) => e.target.src = '/images/tand_courtroom_hall.jpg'"
            class="w-full h-80 object-cover object-center"
          />
          <p class="text-xs text-center text-slate-500 italic py-2 bg-slate-50">
            Hình ảnh tư liệu hoạt động công tác xét xử - TAND Thành phố Hà Nội
          </p>
        </div>

        <!-- Full Content Paragraphs -->
        <div class="prose max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>
            {{ article.content || 'Thực hiện kế hoạch công tác năm 2026, TAND TP Hà Nội tiếp tục đổi mới toàn diện các khâu công tác, đẩy mạnh cải cách tư pháp và nâng cao chất lượng xét xử các loại vụ án, gắn hoạt động tư pháp với việc bảo vệ công lý, quyền con người, quyền công dân và sự phát triển bền vững của Thủ đô.' }}
          </p>
          <p>
            Trong quá trình thực hiện quyền tư pháp và hoạt động xét xử, Tòa án nhân dân hai cấp thành phố đã chủ động áp dụng đồng bộ các giải pháp nhằm nâng cao chất lượng tranh tụng, tăng cường số hóa tài liệu hồ sơ phiên tòa trực tuyến, bảo đảm xét xử đúng người, đúng tội, đúng pháp luật, không làm oan người vô tội và không bỏ lọt tội phạm.
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
            <button class="px-2 py-1 rounded bg-blue-600 text-white font-bold">Facebook</button>
            <button class="px-2 py-1 rounded bg-blue-400 text-white font-bold">Zalo</button>
          </div>
        </div>
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
  animation: scaleUp 0.2s ease-out forwards;
}
</style>
