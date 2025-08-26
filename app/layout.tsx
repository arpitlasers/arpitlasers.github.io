import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Navigation from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arpit Singh - Laser Research Scholar",
  description:
    "Portfolio of Arpit Kumar Singh, Ph.D. - Prime Minister Research Fellow specializing in laser processes and micro-3D printing",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
