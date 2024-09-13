import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import ClientWrapper from './components/ClientWrapper'

export const metadata = {
  title: 'Unwavering Creativity',
  description: 'Delve into the world of a creative mind.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <body className="w-screen h-fit pt-[10vh] overflow-x-hidden overflow-y-scroll flex flex-col relative bg-secondary">
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
