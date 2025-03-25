"use client"

import Image from "next/image"
import { useRef } from "react"
import { useInView } from "@/hooks/useIntersectionObserver"

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useInView(ref)

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen py-20 section-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="heading-mix text-3xl md:text-4xl lg:text-5xl">
              <span>be.adventurous</span> with us
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              "At be.adventurous, we believe your special moments should be captured exactly as they are - genuine,
              spontaneous, and full of emotion. We specialize in intimate events like civil weddings, mehendis, and
              birthdays, ensuring that every fleeting moment of happiness is preserved for you to relive for years to
              come."
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              "Our approach is personal and unobtrusive, allowing you to fully immerse yourself in your special day
              while we document the raw emotions, candid interactions, and beautiful details that make your event
              uniquely yours."
            </p>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/about/about-image.jpg"
              alt="Intimate event photography example"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
