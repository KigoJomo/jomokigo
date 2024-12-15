import { Mouse } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="h-screen overflow-hidden flex flex-col items-center gap-6 relative">
      <div className="flex flex-col items-center justify-end md:justify-center gap-0 md:gap-6 h-[50vh] md:h-[70vh]">
        <h1 className="z-[5] md:z-[1] md:text-[10rem] md:h-[10rem] mix-blend-exclusion">software</h1>
        <h1 className="z-[5] md:text-[10rem] md:h-[10rem]">Engineer</h1>
      </div>

      <div className="absolute z-[2] top-0 h-[50vh] md:h-[70vh] w-auto object-contain image-tint overflow-hidden hover:*:scale-105">
        <Image
          src="/images/hero.png"
          alt="jomo kigo"
          width={1000}
          height={1000}
          className="h-full w-full object-right md:object-contain transition-all duration-500"
        />
      </div>

      <p className='z-[5]'>Hello, 👋 I&apos;m Jomo Kigo</p>

      <Mouse className='animate-bounce' size={32} />

      <div className="w-full h-24 bg-custom-gray"></div>

    </section>
  )
}

export default Hero
