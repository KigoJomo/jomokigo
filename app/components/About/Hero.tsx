import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Button from '../Button'
import { CircleCheckBig } from 'lucide-react'

const Hero: FC = () => {
  const heroSections = [
    {
      title: 'origins',
      buttonText: 'A little look at my roots',
      href: '#',
      content: [
        "I'm Jomo Kigo, born and raised in Nyahururu, Kenya.",
        "In primary school, I was what you'd call a nerd ... and an introvert too!",
        'Went on to love science and engineering in high school ...',
        'Then ended up doing Information Technology in college.',
      ],
    },
    {
      title: 'profession',
      buttonText: "How I'm changing the world",
      href: '#',
      content: [
        'I specialize in building user-friendly web applications using React and Next.js.',
        'Currently pursuing a BSc in IT at Dedan Kimathi University of Technology.',
        'Passionate about solving real-world problems through clean, efficient code.',
        'Aspiring to create impactful software that improves lives and businesses.',
      ],
    },
  ]

  return (
    <section className="relative md:py-6 pr-8 md:pr-16">
      <SideText />

      <div className="w-full aspect-[2.25/1] grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4">
        {/* Left Image */}
        <div className="md:col-span-1 md:row-span-4 flex items-center justify-center">
          <Image
            src="/images/cool.webp"
            alt="about jomo kigo"
            width={1000}
            height={1000}
            className="w-full h-full image-clip"
          />
        </div>

        <div className="md:col-span-2 md:row-span-1 p-0 flex flex-col justify-end gap-4">
          <h1 className="italic lowercase md:text-[11rem] md:leading-[9rem] text-nowrap opacity-20">
            about me
          </h1>
        </div>

        {heroSections.map((section, index) => (
          <HeroSection key={index} {...section} />
        ))}
      </div>
    </section>
  )
}

interface HeroSectionProps {
  title: string
  buttonText: string
  href: string
  content: string[]
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  buttonText,
  href,
  content,
}) => {
  return (
    <div className="bg-background border border-white/10 col-span-1 row-span-3 p-6 flex flex-col items-center justify-center gap-0 group">
      <h2 className="italic lowercase">{title}</h2>
      <Button text={buttonText} link secondary href={href} className='scale-75 md:scale-100 mb-4 md:m-0' />

      <div className="border border-transparent w-full h-0 opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 justify-end">
        {content.map((text, index) => (
          <div key={index} className="flex gap-2">
            <CircleCheckBig size={16} className="flex-shrink-0" />
            <p className="text-sm">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const SideText: FC = () => (
  <div className="absolute z-[5] right-1 md:right-8 top-1/2 translate-y-[-50%] flex flex-col items-center gap-4">
    <p
      className="uppercase text-sm rotate-180 opacity-30 hover:opacity-100"
      style={{ writingMode: 'vertical-lr' }}>
      unwavering creativity
    </p>
    <div className="h-[30vh] w-[1px] bg-foreground opacity-30 hover:opacity-100"></div>
    <Link
      href="https://github.com/KigoJomo"
      className="rotate-180 opacity-30 hover:opacity-100"
      style={{ writingMode: 'vertical-lr' }}>
      @KigoJomo
    </Link>
  </div>
)

export default Hero
