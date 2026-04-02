import type { Metadata } from "next"
import "./globals.css"
import { CustomCursor } from "@/app/components/CustomCursor"
import { ScrollToTop } from "@/app/components/ScrollToTop"

export const metadata: Metadata = {
  title: "Abdul Basit Shakeel | Frontend Developer & Web Developer",
  description: "Creative Frontend Developer crafting engaging user interfaces and seamless web experiences with React, Next.js, and Three.js. Based in Hyderabad, Pakistan.",
  keywords: ["Frontend Developer", "Web Developer", "React Developer", "Next.js Developer", "Full Stack Developer", "UI/UX Developer"],
  authors: [{ name: "Abdul Basit Shakeel", url: "https://github.com/abdulbasitshakeel" }],
  creator: "Abdul Basit Shakeel",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  openGraph: {
    title: "Abdul Basit Shakeel | Frontend Developer",
    description: "Creative Frontend Developer crafting engaging user interfaces and seamless web experiences with React, Next.js, and Three.js",
    type: "website",
    locale: "en_US",
    siteName: "Abdul Basit Shakeel Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased cursor-none">
        <CustomCursor />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
