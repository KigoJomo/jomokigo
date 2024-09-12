import Image from 'next/image'
import Logo from './components/Logo'

export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <Logo />
      </section>
    </>
  )
}
