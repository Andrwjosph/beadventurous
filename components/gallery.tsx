"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/useIntersectionObserver"
import Image from "next/image"

export function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useInView(ref)

  return (
    <section
      id="gallery"
      ref={ref}
      className={`py-20 section-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Featured <span className="italic">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'gallery-1.jpg',
            'gallery-2.jpg',
            'gallery-3.jpg',
            'gallery-4.jpg',
            'gallery-5.jpg',
            'gallery-6.jpg',
          ].map((image, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden group">
              <Image
                src={`/images/gallery/${image}`}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
