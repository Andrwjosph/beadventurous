"use client"

import { useRef } from "react"
import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useInView } from "@/hooks/useIntersectionObserver"

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useInView(ref)

  return (
    <section
      id="services"
      ref={ref}
      className={`min-h-screen py-20 bg-gray-50 section-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="heading-mix text-3xl md:text-4xl lg:text-5xl text-center mb-12">
          Our <span>Adventures</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="civil-weddings">
            <AccordionTrigger className="text-xl">Civil Weddings</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-gray-700">
                <li>Intimate ceremony coverage</li>
                <li>Couple portraits</li>
                <li>Family and group photos</li>
                <li>Candid moments</li>
                <li>Online gallery</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mehendi">
            <AccordionTrigger className="text-xl">Mehendi Celebrations</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-gray-700">
                <li>Mehendi application documentation</li>
                <li>Artistic shots of mehendi designs</li>
                <li>Candid guest interactions</li>
                <li>Cultural rituals and traditions</li>
                <li>Online gallery</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="birthdays">
            <AccordionTrigger className="text-xl">Birthday Parties</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-gray-700">
                <li>Celebrant portraits</li>
                <li>Cake cutting and gift-opening moments</li>
                <li>Guest interactions and candids</li>
                <li>Decor and detail shots</li>
                <li>Online gallery</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
