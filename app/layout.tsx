import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import "./globals.css"

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-eb-garamond',
})

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "Professional photography services for all your special moments",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} scroll-smooth`}>
      <body className={`${ebGaramond.className} antialiased`}>{children}</body>
    </html>
  )
}