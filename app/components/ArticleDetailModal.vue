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
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-lemon-400 text-navy-950">
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
            class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-lemon-400 text-navy-950 font-bold hover:bg-lemon-300 transition-colors shadow-sm"
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
            @error="(e: any) => e.target.src = '/images/vksnd_courtroom_hall.jpg'"
            class="w-full h-80 object-cover object-center"
          />
          <p class="text-xs text-center text-slate-500 italic py-2 bg-slate-50">
            Hình ảnh tư liệu hoạt động công tác kiểm sát - VKSND Thành phố Hà Nội
          </p>
        </div>

        <!-- Full Content Paragraphs -->
        <div class="prose max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>
            {{ article.content || 'Thực hiện kế hoạch công tác kiểm sát năm 2026, VKSND TP Hà Nội tiếp tục đổi mới toàn diện các khâu công tác, gắn công tác kiểm sát với việc thực hiện nhiệm vụ chính trị của Thủ đô, giữ vững an ninh chính trị, trật tự an toàn xã hội, bảo vệ tính mạng, tài sản và quyền lợi hợp pháp của nhân dân.' }}
          </p>
          <p>
            Trong quá trình thực hành quyền công tố và kiểm sát các hoạt động tư pháp, các đơn vị trực thuộc đã chủ động phối hợp với các cơ quan tiến hành tố tụng, áp dụng đồng bộ các giải pháp nhằm nâng cao chất lượng tranh tụng, số hóa tài liệu chứng cứ, không để xảy ra trường hợp nào đình chỉ điều tra do không phạm tội hoặc Tòa án tuyên không phạm tội.
          </p>
          <p>
            Đặc biệt, Ban cán sự Đảng VKSND TP Hà Nội chỉ đạo toàn thể công chức, Kiểm sát viên tiếp tục đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh gắn với 5 đức tính của người cán bộ Kiểm sát: "Công minh - Chính trực - Khách quan - Thận trọng - Khiêm tốn".
          </p>
        </div>

        <!-- Share & Signature -->
        <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <strong>Nguồn:</strong> Cổng thông tin điện tử VKSND TP Hà Nội
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
