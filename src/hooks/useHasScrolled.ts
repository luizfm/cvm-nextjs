import { useEffect, useState } from 'react'

export default function useHasScrolled() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 0
      if (scrolled !== hasScrolled) {
        setHasScrolled(scrolled)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasScrolled])

  return hasScrolled
}
