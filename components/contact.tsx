"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "@/hooks/useIntersectionObserver"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const ref = useRef<HTMLElement>(null)
  const isVisible = useInView(ref)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        occasion: formData.get('occasion'),
        date: formData.get('date'),
        message: formData.get('message'),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Message sent successfully!")
        setIsSubmitted(true)
        setSubmittedEmail(data.email as string)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen py-20 bg-gray-50 section-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-mix">
          Start Your <span>Adventure</span> With Us
        </h2>
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center space-y-4 py-8">
              <h3 className="text-2xl font-semibold text-gray-800">Thank You for Contacting Us!</h3>
              <p className="text-gray-600">
                We have received your message and will reach out to you at{' '}
                <span className="font-medium">{submittedEmail}</span> shortly.
              </p>
              <p className="text-gray-600">
                Want to send another message?{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-black underline hover:text-gray-600 transition-colors"
                >
                  Click here
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">
                    Occasion
                  </label>
                  <Input
                    type="text"
                    id="occasion"
                    name="occasion"
                    placeholder="e.g., Wedding, Birthday Party, Mehendi"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Event Date
                  </label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>
              <div className="text-center">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
