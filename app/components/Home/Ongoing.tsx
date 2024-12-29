'use client'

import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useState, useCallback, memo, useMemo } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import ImageCarousel from './ImageCarousel'

// Move projects data outside component to prevent recreating on each render
const PROJECTS = [
  {
    name: 'Bag Bar',
    description: 'A web store for the Bag Bar brand, built with Next.js and Wix CMS, featuring MPesa Payment Gateway. Hosted on Vercel.',
    images: ['/images/projects/bag-bar-1.webp', '/images/projects/bag-bar-2.webp'],
  },
  {
    name: 'FundiCentre',
    description: 'An e-commerce platform for local Kenyan furniture, built with Django, Tailwind CSS, MPesa, and PostgreSQL.',
    images: ['/images/projects/fundicentre-1.webp', '/images/projects/fundicentre-2.webp'],
  },
] as const

interface ProjectType {
  name: string
  description: string
  images: readonly string[] | string[]
}

interface CarouselProps {
  className?: string
  project: ProjectType
}

// Memoize CarouselItem to prevent unnecessary re-renders
const CarouselItem = memo<CarouselProps>(({ project, className }) => (
  <div className={`w-full aspect-[3/4] md:aspect-[3/1] bg-custom-gray transition-all duration-1000 col-span-1 row-span-1 p-6 grid grid-cols-3 grid-rows-2 gap-4 ${className}`}>
    <div className="col-span-1 row-span-2 order-1">
      <Image
        src={project.images[0]}
        alt={project.name}
        width={500}
        height={500}
        className="h-full object-contain hover:rotate-3 image-clip"
        priority={true} // Prioritize loading for first image
      />
    </div>

    <div className="h-full row-span-2 order-2 flex flex-col items-center justify-center gap-6">
      <h3>{project.name}</h3>
      <p className="text-center">{project.description}</p>
    </div>

    <div className="col-span-1 row-span-2 w-full order-4">
      <Image
        src={project.images[1]}
        alt={project.name}
        width={500}
        height={500}
        className="h-full object-contain hover:rotate-3 image-clip-bottom"
        loading="lazy" // Lazy load secondary images
      />
    </div>
  </div>
))

CarouselItem.displayName = 'CarouselItem'

interface AccordionProps {
  className?: string
  project: ProjectType
  open: boolean
  onClick: () => void
}

// Memoize AccordionItem to prevent unnecessary re-renders
const AccordionItem = memo<AccordionProps>(({ project, className, open, onClick }) => (
  <ScrollAnimationWrapper
    delay={1.5}
    className={`w-full flex flex-col ${open ? 'gap-4' : 'gap-0'} bg-custom-gray p-4 overflow-hidden ${className}`}>
    <button 
      className="w-full flex items-center gap-4" 
      onClick={onClick}
      aria-expanded={open}
      aria-controls={`accordion-${project.name}`}>
      <h4 className="uppercase">{project.name}</h4>
      <ChevronDown className={`${open ? 'rotate-180' : ''} ml-auto transition-transform duration-200`} />
    </button>

    <div
      id={`accordion-${project.name}`}
      className={`${
        open ? 'opacity-100 h-fit' : 'p-0 gap-0 h-0 opacity-0'
      } w-full flex flex-col gap-2 transition-all duration-200`}>
      <ImageCarousel images={[...project.images]} className='w-full aspect-square image-clip' />
      <p className="text-sm md:text-base">{project.description}</p>
    </div>
  </ScrollAnimationWrapper>
))

AccordionItem.displayName = 'AccordionItem'

const Ongoing: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [openItem, setOpenItem] = useState<number | null>(0)

  // Memoize handlers to prevent recreation on each render
  const handlePrevious = useCallback(() => {
    setCurrent(curr => curr === 0 ? PROJECTS.length - 1 : curr - 1)
  }, [])

  const handleNext = useCallback(() => {
    setCurrent(curr => curr === PROJECTS.length - 1 ? 0 : curr + 1)
  }, [])

  const handleToggle = useCallback((index: number) => {
    setOpenItem(curr => curr === index ? null : index)
  }, [])

  // Memoize carousel items to prevent unnecessary recreation
  const carouselItems = useMemo(() => (
    PROJECTS.map((project, index) => (
      <CarouselItem
        key={project.name}
        project={project}
        className={`${index === current ? 'opacity-100' : 'opacity-0'}`}
      />
    ))
  ), [current])

  // Memoize accordion items to prevent unnecessary recreation
  const accordionItems = useMemo(() => (
    PROJECTS.map((project, index) => (
      <AccordionItem
        key={project.name}
        project={project}
        open={index === openItem}
        onClick={() => handleToggle(index)}
      />
    ))
  ), [openItem, handleToggle])

  return (
    <section>
      <ScrollAnimationWrapper
        delay={1.5}
        className="w-full flex flex-col md:flex-row items-center justify-between mb-8">
        <h2>ongoing projects...</h2>
        <p className="text-sm md:text-base md:w-2/5">
          Here are some of the projects I am currently working on. Stay tuned
          for more updates and exciting features!
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper 
        animationType='slideInBottom' 
        className="carousel w-full aspect-[3/4] md:aspect-[3/1] overflow relative hidden md:grid grid-cols-1 grid-rows-1">
        {carouselItems}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 border p-4 backdrop-blur-sm rounded-full hover:bg-foreground hover:text-background"
          onClick={handlePrevious}
          aria-label="Previous project">
          <ChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border p-4 backdrop-blur-sm rounded-full hover:bg-foreground hover:text-background"
          onClick={handleNext}
          aria-label="Next project">
          <ChevronRight />
        </button>
      </ScrollAnimationWrapper>

      <div className="accordion w-full flex md:hidden flex-col gap-4">
        {accordionItems}
      </div>
    </section>
  )
}

export default memo(Ongoing)