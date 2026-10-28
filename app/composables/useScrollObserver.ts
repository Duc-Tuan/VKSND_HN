import { onMounted } from 'vue'

export function useScrollObserver() {
  onMounted(() => {
    if (typeof window === 'undefined') return
    const targets = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale'
    )
    targets.forEach((target) => {
      target.classList.add('is-visible')
    })
  })

  return {
    reinitObserver: () => {}
  }
}
