import { useEffect, useState } from 'react'

/** Scroll past the intro → reading mode; IntersectionObserver tracks the active chapter. */
export function useStoryReading(chapterIds: readonly string[]) {
  const [isReading, setIsReading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setIsReading(window.scrollY > window.innerHeight * 0.35)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = chapterIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = elements.indexOf(entry.target as HTMLElement)
          if (index >= 0) setActiveIndex(index)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [chapterIds])

  return { isReading, activeIndex }
}

export function scrollToChapter(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}
