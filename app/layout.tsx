import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Jomo Kigo | Full Stack Software Developer & Engineer',
  description: 'Jomo Kigo is a professional software developer specializing in web development, cloud solutions, and modern software architecture. Explore portfolio, projects, and technical expertise.',
  keywords: ['software developer', 'full stack developer', 'web development', 'software engineer', 'React', 'TypeScript', 'Node.js'],
  robots: 'index, follow',
  openGraph: {
    title: 'Jomo Kigo | Full Stack Software Developer & Engineer',
    description: 'Professional software developer specializing in web development and modern software solutions',
    type: 'website',
  }
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
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
