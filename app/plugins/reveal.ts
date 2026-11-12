/**
 * v-reveal: anima a entrada do elemento quando ele aparece na tela.
 * Uso: v-reveal  |  v-reveal="'left'"  |  v-reveal="{ variant: 'scale', delay: 120 }"
 */
type RevealValue = string | { variant?: string; delay?: number } | undefined

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (observer || typeof window === 'undefined') return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    return observer
  }

  const apply = (el: HTMLElement, value: RevealValue) => {
    const opts = typeof value === 'string' ? { variant: value } : value || {}
    el.classList.add('reveal')
    if (opts.variant) el.dataset.reveal = opts.variant
    if (opts.delay) el.style.setProperty('--reveal-delay', `${opts.delay}ms`)
  }

  nuxtApp.vueApp.directive<HTMLElement, RevealValue>('reveal', {
    getSSRProps(binding) {
      const opts = typeof binding.value === 'string' ? { variant: binding.value } : binding.value || {}
      return {
        class: 'reveal',
        'data-reveal': opts.variant,
        style: opts.delay ? `--reveal-delay:${opts.delay}ms` : undefined,
      }
    },
    mounted(el, binding) {
      apply(el, binding.value)
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('is-visible')
        return
      }
      getObserver()?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
