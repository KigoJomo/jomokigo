import { Mouse } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-background flex flex-col items-center gap-6 relative pt-6 pb-24">
      <div className="flex flex-col items-center justify-end md:justify-center gap-0 md:gap-6 h-[50vh] md:h-[70vh] flex-shrink-0">
        <h1 className="z-[5] md:z-[1] md:text-[14rem] md:leading-[12rem] lowercase select-none mix-blend-exclusion">
          software
        </h1>
        <h1 className="z-[5] md:text-[14rem] md:leading-[12rem] lowercase select-none">
          developer
        </h1>
      </div>

      <div className="absolute z-[2] h-[50vh] md:h-[70vh] w-auto object-contain image-tint overflow-hidden hover:*:scale-105">
        <Image
          src="/images/hero.webp"
          alt="jomo kigo"
          width={1000}
          height={1000}
          className="h-full w-full object-right md:object-contain transition-all duration-500"
        />
      </div>

      <p className="z-[5]">Hello, 👋 I&apos;m Jomo Kigo</p>

      <SideText />

      <Mouse className="animate-bounce" size={32} />
    </section>
  )
}

export default Hero

const SideText: React.FC = () => {
  return (
    <div className="absolute z-[5] right-4 left-auto md:right-auto md:left-8 opacity-30 flex flex-col items-center gap-4">
      <p
        className="rotate-180 text-sm uppercase"
        style={{ writingMode: 'vertical-lr' }}>
          creating an impact
        </p>
      <div className="h-[30vh] md:h-[40vh] w-[1px] bg-foreground"></div>
      <p
        className="rotate-180 text-sm uppercase"
        style={{ writingMode: 'vertical-lr' }}>
          2025
        </p>
    </div>
  )
}
