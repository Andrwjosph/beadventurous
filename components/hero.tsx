"use client"

import { useInView } from "@/hooks/useIntersectionObserver"
import { useRef } from "react"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useInView(ref)

  return (
    <section
      ref={ref}
      className={`min-h-[100svh] relative flex items-center justify-center section-animate ${
        isVisible ? 'visible' : ''
      }`}
      style={{
        backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 leading-tight">
          Capturing Life's <span className="italic">Beautiful</span> Moments
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Professional photography & videography for weddings, portraits, and special events
        </p>
      </div>
    </section>
  )
}
