import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://haestus.dev'),
  title: "Haestus | The Execution Layer of AI",
  description: "We ship AI systems that actually work. Production-ready implementation from kickoff to deployment in weeks, not months.",
  keywords: ["AI implementation", "production AI", "AI consulting", "AI development"],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Haestus | The Execution Layer of AI",
    description: "We ship AI systems that actually work. Production-ready implementation in weeks.",
    type: "website",
    siteName: "Haestus",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Haestus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haestus | The Execution Layer of AI",
    description: "We ship AI systems that actually work. Production-ready implementation in weeks.",
    images: ["/logo.png"],
    creator: "@haestus",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}>
        {children}
      </body>
    </html>
  )
}
