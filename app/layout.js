import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Unwavering Creativity',
  description: 'Delve into the world of a creative mind.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen overflow-hidden">
      <body className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col relative pt-[7vh]  bg-secondary">
        <Header />
        <main className="w-full h-fit flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
