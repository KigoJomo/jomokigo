import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jomo Kigo | Software Developer',
  description: 'Meet Jomo Kigo, a software developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-hidden">
      <body className="scrollbar-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
