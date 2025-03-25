import { useEffect, useState, RefObject } from 'react'

export function useInView(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}
