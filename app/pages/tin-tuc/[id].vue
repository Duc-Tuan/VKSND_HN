<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleById, getRelatedNews, timelineNewsList, hotSpotlightNews, type NewsItem } from '../../data/newsData'

const route = useRoute()
const router = useRouter()

// Get article from params
const articleId = computed(() => (route.params.id as string) || 'hot-1')
const article = computed<NewsItem>(() => {
  return getArticleById(articleId.value) || {
    ...hotSpotlightNews,
    id: articleId.value,
    title: 'Tin tức nghiệp vụ ngành Tòa án nhân dân TP Hà Nội'
  }
})

// Related news
const relatedArticles = computed(() => {
  return getRelatedNews(article.value.category, article.value.id, 4)
})

// SEO Meta
useHead(() => ({
  title: `${article.value.title} | TAND TP HÀ NỘI`,
  meta: [
    { name: 'description', content: article.value.summary },
    { property: 'og:title', content: article.value.title },
    { property: 'og:description', content: article.value.summary },
    { property: 'og:image', content: article.value.imageUrl }
  ]
}))

// Text-to-Speech (Web Speech API)
const isSpeaking = ref(false)
const speechRate = ref(1.0)
let synth: SpeechSynthesis | null = null
let currentUtterance: SpeechSynthesisUtterance | null = null

onMounted(() => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    synth = window.speechSynthesis
  }
})

onUnmounted(() => {
  if (synth && synth.speaking) {
    synth.cancel()
  }
})

const toggleSpeech = () => {
  if (!synth) return
  if (isSpeaking.value) {
    synth.cancel()
    isSpeaking.value = false
    return
  }

  const textToRead = `${article.value.title}. ${article.value.summary}. ${article.value.content || ''}`
  currentUtterance = new SpeechSynthesisUtterance(textToRead)
  currentUtterance.lang = 'vi-VN'
  currentUtterance.rate = speechRate.value

  currentUtterance.onend = () => {
    isSpeaking.value = false
  }
  currentUtterance.onerror = () => {
    isSpeaking.value = false
  }

  synth.cancel()
  synth.speak(currentUtterance)
  isSpeaking.value = true
}

// Reader Font Size Adjustment
const fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl']
const currentFontIndex = ref(1) // default 'text-base'

const increaseFontSize = () => {
  if (currentFontIndex.value < fontSizes.length - 1) {
    currentFontIndex.value++
  }
}

const decreaseFontSize = () => {
  if (currentFontIndex.value > 0) {
    currentFontIndex.value--
  }
}

const contentFontSizeClass = computed(() => fontSizes[currentFontIndex.value])

// Share / Copy Link Feedback
const copiedToast = ref(false)
const copyArticleLink = async () => {
  if (typeof window !== 'undefined') {
    try {
      await navigator.clipboard.writeText(window.location.href)
      copiedToast.value = true
      setTimeout(() => {
        copiedToast.value = false
      }, 3000)
    } catch {
      // fallback
    }
  }
}

const printArticle = () => {
  if (typeof window !== 'undefined') {
    window.print()
  }
}

const navigateToArticle = (id: string) => {
  if (synth && synth.speaking) synth.cancel()
  isSpeaking.value = false
  router.push(`/tin-tuc/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="bg-slate-50 min-h-screen py-5 sm:py-8 font-sans">
    <div class="max-w-7xl mx-auto px-3 sm:px-6">

      <!-- Breadcrumbs - Tươi sáng, đường dẫn rõ ràng -->
      <nav aria-label="Breadcrumb" class="mb-4 sm:mb-6">
        <ol class="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-sm">
          <li class="flex items-center gap-1.5">
            <NuxtLink to="/" class="flex items-center gap-1 text-slate-700 hover:text-navy-950 font-bold transition-colors">
              <svg class="w-4 h-4 text-lemon-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span>Trang chủ</span>
            </NuxtLink>
            <span class="text-slate-400 font-bold">/</span>
          </li>
          <li class="flex items-center gap-1.5">
            <NuxtLink to="/#tin-tuc" class="text-slate-700 hover:text-navy-950 font-medium transition-colors">
              Tin tức - Sự kiện
            </NuxtLink>
            <span class="text-slate-400 font-bold">/</span>
          </li>
          <li class="flex items-center gap-1.5">
            <span class="text-lemon-700 font-semibold bg-lemon-100/70 px-2 py-0.5 rounded">
              {{ article.category }}
            </span>
            <span class="text-slate-400 font-bold">/</span>
          </li>
          <li class="text-slate-500 truncate max-w-xs sm:max-w-md font-medium" aria-current="page">
            {{ article.title }}
          </li>
        </ol>
      </nav>

      <!-- Main Layout: 8 Cột Bài viết chi tiết + 4 Cột Cột bên phải (Sidebar) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        <!-- CỘT CHÍNH: CHI TIẾT BÀI BÁO (8 Cột) -->
        <main class="lg:col-span-8 bg-white rounded-2xl p-4 sm:p-7 md:p-9 border border-slate-200 shadow-md">
          
          <!-- HỘP XÁC THỰC NGUỒN CHÍNH THỐNG CỦA CHÍNH PHỦ (Government Source Badge) -->
          <div class="mb-5 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-lemon-100/80 via-white to-lemon-50 border-2 border-lemon-400 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-start sm:items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-lemon-400 text-navy-950 flex items-center justify-center flex-shrink-0 shadow-sm font-black">
                <svg class="w-4 h-4 text-navy-950" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] sm:text-xs font-black uppercase tracking-wider text-navy-950 bg-lemon-400 px-2 py-0.5 rounded">
                    NGUỒN CHÍNH THỐNG ĐÃ XÁC THỰC
                  </span>
                  <span class="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    Dữ liệu cơ quan nhà nước
                  </span>
                </div>
                <p class="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                  {{ article.source || 'Cổng thông tin điện tử Tòa án nhân dân tối cao' }}
                  <span v-if="article.officialDocNumber" class="block sm:inline text-slate-600 font-normal text-xs sm:ml-1">
                    ({{ article.officialDocNumber }})
                  </span>
                </p>
              </div>
            </div>

            <!-- External link to official government portal -->
            <a 
              v-if="article.sourceUrl"
              :href="article.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-navy-950 text-lemon-300 hover:text-white hover:bg-black font-bold text-xs shadow-sm transition-all whitespace-nowrap self-start sm:self-auto"
            >
              <span>Xem nguồn gốc</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <!-- Article Header -->
          <header class="mb-5 sm:mb-7">
            <!-- Category & Tags -->
            <div class="flex items-center flex-wrap gap-2 mb-3">
              <span class="px-3 py-1 rounded-md bg-lemon-400 text-navy-950 font-black text-xs uppercase tracking-wide shadow-sm border border-lemon-500/40">
                {{ article.category }}
              </span>
              <span v-if="article.tag" class="px-2.5 py-1 rounded-md bg-navy-950 text-lemon-300 font-bold text-xs uppercase">
                {{ article.tag }}
              </span>
              <span v-if="article.isHot" class="px-2.5 py-1 rounded-md bg-red-600 text-white font-bold text-xs uppercase animate-pulse">
                HOT
              </span>
            </div>

            <!-- Article Title -->
            <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-black text-navy-950 leading-snug sm:leading-tight mb-4">
              {{ article.title }}
            </h1>

            <!-- Metadata Row -->
            <div class="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-slate-200 text-xs sm:text-sm text-slate-600">
              <div class="flex items-center flex-wrap gap-3 sm:gap-4">
                <!-- Author -->
                <div class="flex items-center gap-1.5 font-semibold text-slate-800">
                  <svg class="w-4 h-4 text-lemon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span>{{ article.author }}</span>
                </div>

                <!-- Date & Time -->
                <div class="flex items-center gap-1.5 text-slate-500">
                  <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ article.date }} <span v-if="article.time">lúc {{ article.time }}</span></span>
                </div>

                <!-- Views -->
                <div class="flex items-center gap-1.5 text-slate-500">
                  <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>{{ article.views?.toLocaleString('vi-VN') || 1250 }} lượt xem</span>
                </div>
              </div>

              <!-- Social quick share buttons -->
              <div class="flex items-center gap-2">
                <button 
                  @click="copyArticleLink" 
                  class="p-1.5 rounded-lg bg-slate-100 hover:bg-lemon-200 text-slate-700 hover:text-navy-950 transition-colors"
                  title="Sao chép liên kết"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </button>
                <button 
                  @click="printArticle" 
                  class="p-1.5 rounded-lg bg-slate-100 hover:bg-lemon-200 text-slate-700 hover:text-navy-950 transition-colors"
                  title="In bản tin này"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Toast alert for link copied -->
            <transition name="fade">
              <div v-if="copiedToast" class="mt-2 p-2 bg-lemon-400 text-navy-950 rounded-lg text-xs font-bold text-center border border-lemon-500 shadow-sm">
                Đã sao chép liên kết bài viết vào bộ nhớ tạm!
              </div>
            </transition>
          </header>

          <!-- Interactive Reading Bar (Audio TTS & Font Scaling) -->
          <div class="mb-6 p-3 sm:p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <!-- Audio Playback -->
            <div class="flex items-center gap-2.5">
              <button
                @click="toggleSpeech"
                class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all shadow-sm active:scale-95"
                :class="isSpeaking 
                  ? 'bg-red-600 text-white animate-pulse' 
                  : 'bg-lemon-400 hover:bg-lemon-300 text-navy-950 border border-lemon-500/50'"
              >
                <svg v-if="!isSpeaking" class="w-4 h-4 text-navy-950" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"/>
                </svg>
                <svg v-else class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span>{{ isSpeaking ? 'Đang đọc (Bấm để dừng)' : 'Nghe đọc bài viết' }}</span>
              </button>

              <!-- Animated Wave Bars when speaking -->
              <div v-if="isSpeaking" class="flex items-end gap-1 h-5">
                <span class="w-1 bg-red-600 rounded animate-bounce" style="height: 60%; animation-delay: 0.1s;"></span>
                <span class="w-1 bg-red-600 rounded animate-bounce" style="height: 100%; animation-delay: 0.2s;"></span>
                <span class="w-1 bg-red-600 rounded animate-bounce" style="height: 80%; animation-delay: 0.3s;"></span>
                <span class="w-1 bg-red-600 rounded animate-bounce" style="height: 50%; animation-delay: 0.4s;"></span>
              </div>
            </div>

            <!-- Font Resizer -->
            <div class="flex items-center gap-1 text-xs font-bold text-slate-700">
              <span class="mr-1 text-slate-500 font-normal">Cỡ chữ:</span>
              <button 
                @click="decreaseFontSize" 
                class="w-7 h-7 rounded bg-white hover:bg-lemon-200 border border-slate-300 flex items-center justify-center transition-colors"
                title="Giảm cỡ chữ"
              >
                A-
              </button>
              <button 
                @click="currentFontIndex = 1" 
                class="px-2 h-7 rounded bg-white hover:bg-lemon-200 border border-slate-300 flex items-center justify-center transition-colors"
                title="Cỡ chữ mặc định"
              >
                Mặc định
              </button>
              <button 
                @click="increaseFontSize" 
                class="w-7 h-7 rounded bg-white hover:bg-lemon-200 border border-slate-300 flex items-center justify-center transition-colors"
                title="Tăng cỡ chữ"
              >
                A+
              </button>
            </div>
          </div>

          <!-- Sapo Box (Tóm tắt mở đầu bài báo) -->
          <div class="mb-6 p-4 sm:p-5 rounded-xl bg-lemon-50/70 border-l-4 border-lemon-500 text-slate-800 italic leading-relaxed text-sm sm:text-base font-medium shadow-sm">
            {{ article.summary }}
          </div>

          <!-- Featured Main Image -->
          <figure class="mb-6 sm:mb-8 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow">
            <img 
              :src="article.imageUrl" 
              :alt="article.title"
              @error="(e: any) => e.target.src = '/images/tand_hanoi_facade.jpg'"
              class="w-full h-auto max-h-[460px] object-cover object-center"
            />
            <figcaption class="p-3 bg-slate-100 text-slate-600 text-xs italic text-center border-t border-slate-200">
              Ảnh minh họa: Hoạt động nghiệp vụ xét xử và cải cách tư pháp tại Thủ đô Hà Nội.
            </figcaption>
          </figure>

          <!-- Main Article Body Content -->
          <article 
            class="article-body prose max-w-none text-slate-800 leading-relaxed space-y-4 sm:space-y-5"
            :class="contentFontSizeClass"
          >
            <div 
              v-if="article.content" 
              class="space-y-4"
            >
              <p 
                v-for="(para, pIdx) in article.content.split('\n\n')" 
                :key="pIdx"
                class="text-justify leading-relaxed"
              >
                {{ para }}
              </p>
            </div>

            <!-- Fallback content if empty -->
            <div v-else class="space-y-4 text-justify leading-relaxed">
              <p>
                Tòa án nhân dân thành phố Hà Nội tiếp tục đổi mới toàn diện, nâng cao chất lượng xét xử các loại vụ án và thực hiện quyền tư pháp theo đúng tinh thần cải cách tư pháp của Đảng và Nhà nước.
              </p>
              <p>
                Toàn thể Thẩm phán, Thư ký, cán bộ Tòa án hai cấp quán triệt sâu sắc phương châm "Gần dân, hiểu dân, giúp dân, học dân", kiên quyết không để xảy ra án oan hoặc bỏ lọt tội phạm, bảo đảm quyền con người, quyền công dân theo Hiến pháp năm 2013.
              </p>
            </div>

            <!-- Prominent Leadership Pull Quote -->
            <blockquote class="my-6 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-lemon-200/50 via-white to-lemon-100 border-2 border-lemon-400 not-italic shadow-sm">
              <div class="flex items-start gap-3">
                <span class="text-3xl sm:text-4xl text-lemon-600 font-serif leading-none">“</span>
                <p class="text-sm sm:text-base font-bold text-navy-950 leading-snug">
                  Mỗi Thẩm phán, cán bộ Tòa án Thủ đô phải luôn khắc ghi lời dạy thiêng liêng của Bác Hồ: 
                  <span class="text-red-700 uppercase font-black tracking-wide">"Phụng công - Thủ pháp - Chí công - Vô tư"</span>, 
                  không ngừng nâng cao bản lĩnh chính trị và năng lực chuyên môn để xứng đáng với sự tin cậy của Đảng và Nhân dân.
                </p>
              </div>
            </blockquote>

            <p class="text-justify leading-relaxed">
              Thông tin chi tiết về các vụ việc, chỉ đạo điều hành tiếp theo sẽ liên tục được cập nhật trên Cổng thông tin điện tử TAND thành phố Hà Nội và các kênh truyền thông chính thống ngành Tòa án nhân dân.
            </p>
          </article>

          <!-- OFFICIAL SOURCE VERIFICATION FOOTER CARD -->
          <div class="mt-8 p-4 sm:p-5 rounded-xl bg-slate-50 border-2 border-slate-200">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Thông tin bản quyền & trích dẫn nguồn
                </span>
              </div>
              <span class="text-xs text-slate-500 font-medium">
                Ban Biên tập Cổng TTĐT TAND TP Hà Nội
              </span>
            </div>

            <div class="pt-3 text-xs text-slate-600 space-y-1.5 leading-relaxed">
              <p>
                <strong>Nguồn phát hành:</strong> {{ article.source || 'Cổng thông tin điện tử TAND TP Hà Nội' }} 
                <span v-if="article.sourceUrl">({{ article.sourceUrl }})</span>
              </p>
              <p v-if="article.verifiedAgency">
                <strong>Cơ quan kiểm duyệt nội dung:</strong> {{ article.verifiedAgency }}
              </p>
              <p class="italic text-slate-500">
                Ghi rõ nguồn "Cổng TTĐT Tòa án nhân dân thành phố Hà Nội" khi phát hành lại thông tin từ bài viết này.
              </p>
            </div>
          </div>

          <!-- Tags -->
          <div class="mt-6 pt-4 border-t border-slate-200 flex items-center flex-wrap gap-2 text-xs">
            <span class="font-bold text-slate-700 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-lemon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
              Từ khóa:
            </span>
            <span class="px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-200 text-slate-700 font-medium cursor-pointer transition-colors">
              #TANDTPHaNoi
            </span>
            <span class="px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-200 text-slate-700 font-medium cursor-pointer transition-colors">
              #CaiCachTuPhap
            </span>
            <span class="px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-200 text-slate-700 font-medium cursor-pointer transition-colors">
              #HoatDongXetXu
            </span>
            <span class="px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-200 text-slate-700 font-medium cursor-pointer transition-colors">
              #PhienToaSoHoa
            </span>
          </div>

          <!-- Back Navigation Button -->
          <div class="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
            <NuxtLink
              to="/"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lemon-400 hover:bg-lemon-300 text-navy-950 font-black text-xs sm:text-sm shadow-md transition-all transform hover:-translate-x-1 border border-lemon-500/50"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <span>Quay lại trang chủ</span>
            </NuxtLink>

            <button
              @click="copyArticleLink"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-300 transition-colors"
            >
              <svg class="w-4 h-4 text-lemon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              <span>Chia sẻ bài viết</span>
            </button>
          </div>
        </main>

        <!-- CỘT PHẢI: SIDEBAR THÔNG TIN BỔ TRỢ & BÀI VIẾT LIÊN QUAN (4 Cột) -->
        <aside class="lg:col-span-4 space-y-6">

          <!-- Card 1: BÀI VIẾT CÙNG CHUYÊN MỤC -->
          <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between pb-3 mb-4 border-b-2 border-lemon-400">
              <div class="flex items-center gap-2">
                <div class="w-2 h-5 bg-lemon-500 rounded-sm"></div>
                <h3 class="text-sm font-extrabold text-navy-950 uppercase tracking-tight">
                  TIN CÙNG CHUYÊN MỤC
                </h3>
              </div>
            </div>

            <!-- List of Related News -->
            <div class="divide-y divide-slate-100">
              <article
                v-for="rel in relatedArticles"
                :key="rel.id"
                @click="navigateToArticle(rel.id)"
                class="group cursor-pointer py-3 first:pt-0 last:pb-0 flex items-start gap-3 hover:bg-lemon-50/40 p-2 rounded-xl transition-all"
              >
                <img 
                  :src="rel.imageUrl" 
                  :alt="rel.title"
                  @error="(e: any) => e.target.src = '/images/tand_courtroom_hall.jpg'"
                  class="w-20 h-16 rounded-lg object-cover flex-shrink-0 bg-slate-900 group-hover:scale-105 transition-transform"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 text-[10px] text-slate-500 mb-1">
                    <span class="text-lemon-700 font-bold">{{ rel.category }}</span>
                    <span>•</span>
                    <span>{{ rel.date }}</span>
                  </div>
                  <h4 class="text-xs font-bold text-navy-950 group-hover:text-lemon-700 transition-colors line-clamp-2 leading-snug">
                    {{ rel.title }}
                  </h4>
                </div>
              </article>
            </div>
          </div>

          <!-- Card 2: DÒNG SỰ KIỆN 24/7 (TIMELINE) -->
          <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center gap-2 pb-3 mb-4 border-b-2 border-lemon-400">
              <div class="w-2 h-5 bg-lemon-500 rounded-sm"></div>
              <h3 class="text-sm font-extrabold text-navy-950 uppercase tracking-tight">
                DÒNG SỰ KIỆN 24/7
              </h3>
            </div>

            <div class="relative border-l-2 border-lemon-300 ml-2 pl-3.5 space-y-3.5">
              <div
                v-for="item in timelineNewsList"
                :key="item.id"
                @click="navigateToArticle(item.id)"
                class="group cursor-pointer relative"
              >
                <div class="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-white border-2 border-lemon-500 group-hover:bg-lemon-400 group-hover:scale-125 transition-all"></div>
                <div class="text-[10px] font-mono font-bold text-lemon-700 mb-0.5">{{ item.time }} - {{ item.date }}</div>
                <h5 class="text-xs font-bold text-navy-950 group-hover:text-lemon-700 transition-colors line-clamp-2 leading-snug">
                  {{ item.title }}
                </h5>
              </div>
            </div>
          </div>

          <!-- Card 3: BANNER ĐƯỜNG DÂY NÓNG TIẾP NHẬN TỐ GIÁC TỘI PHẠM (Tươi sáng, tinh tế) -->
          <div class="rounded-2xl p-5 bg-gradient-to-br from-lemon-50/90 via-white to-lemon-100/70 text-slate-900 border-2 border-lemon-400 shadow-sm relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-lemon-300/30 rounded-full blur-xl pointer-events-none"></div>

            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
              <span class="text-xs font-black uppercase tracking-wider text-amber-800">
                ĐƯỜNG DÂY NÓNG 24/7
              </span>
            </div>

            <h4 class="text-base font-black text-navy-950 mb-1.5">Tiếp Nhận Tin Tố Giác Tội Phạm</h4>
            <p class="text-xs text-slate-700 mb-4 leading-relaxed">
              Bảo vệ danh tính tuyệt đối của người cung cấp nguồn tin theo quy định pháp luật.
            </p>

            <a
              href="tel:02438255058"
              class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-lemon-400 hover:bg-lemon-300 text-navy-950 font-black text-sm shadow-sm transition-all active:scale-95 border border-lemon-500/40"
            >
              <svg class="w-4 h-4 text-navy-950" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>024.3825.5058</span>
            </a>
          </div>

        </aside>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
