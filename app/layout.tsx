import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/* Updated metadata for CV website */
export const metadata: Metadata = {
  title: "Darren O'Donnell - Interactive CV",
  description:
    "Interactive CV website showcasing professional experience, education, and achievements with modern design and dark mode functionality",
  keywords: ["Darren O'Donnell", "CV", "Resume", "Stripe", "Migrations Specialist", "Ireland", "Sydney", "Australia"],
  authors: [{ name: "Darren O'Donnell" }],
  creator: "Darren O'Donnell",
  openGraph: {
    title: "Darren O'Donnell - Interactive CV",
    description: "Interactive CV website showcasing professional experience, education, and achievements",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren O'Donnell - Interactive CV",
    description: "Interactive CV website showcasing professional experience, education, and achievements",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/Helixa-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/Callestany.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
