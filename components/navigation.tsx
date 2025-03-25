"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()
  const scrollPosition = useScrollPosition()
  const showLogo = scrollPosition > 100

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="relative w-8 md:w-10 h-8 md:h-10">
            <Image
              src="/images/branding/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className={`object-contain transition-opacity duration-300 ${
                showLogo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
          <span
            className={`text-lg md:text-xl font-serif transition-opacity duration-300 ${
              showLogo ? 'opacity-0' : 'opacity-100'
            }`}
          >
            be.adventurous
          </span>
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-gray-600 transition-all relative ${
                activeSection === link.href.slice(1)
                  ? "text-black after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden -mr-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[385px]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-lg transition-colors hover:text-black ${
                    activeSection === link.href.slice(1)
                      ? "text-black font-medium"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
