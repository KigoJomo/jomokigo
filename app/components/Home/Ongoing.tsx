'use client'

import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const projects = [
  {
    name: 'Bag Bar',
    description:
      'A web store for the Bag Bar brand, built with Next.js and Wix CMS, featuring MPesa Payment Gateway. Hosted on Vercel.',
    images: [
      {
        src: '/images/projects/bag-bar-1.webp',
        alt: 'Bag Bar',
      },
      {
        src: '/images/projects/bag-bar-2.webp',
        alt: 'Bag Bar',
      },
    ],
  },
  {
    name: 'FundiCentre',
    description:
      'An e-commerce platform for local Kenyan furniture, built with Django, Tailwind CSS, MPesa, and PostgreSQL.',
    images: [
      {
        src: '/images/projects/fundicentre-1.webp',
        alt: 'FundiCentre',
      },
      {
        src: '/images/projects/fundicentre-2.webp',
        alt: 'FundiCentre',
      },
    ],
  },
]

interface CarouselProps {
  className?: string
  project?: (typeof projects)[0]
}

const CarouselItem: FC<CarouselProps> = ({ project, className }) => {
  return (
    <div
      className={`w-full aspect-[3/4] md:aspect-[3/1] bg-custom-gray transition-all duration-1000 col-span-1 row-span-1 p-6 grid grid-cols-3 grid-rows-2 gap-4 ${className}`}>
      <div className="col-span-1 row-span-2 order-1">
        <Image
          src={project?.images[0].src || ''}
          alt={project?.images[0].alt || ''}
          width={500}
          height={500}
          className="h-full object-contain hover:rotate-3 image-clip"
        />
      </div>

      <div className="h-full row-span-2 order-2 flex flex-col items-center justify-center gap-6">
        <h3 className="">{project?.name}</h3>

        <p className="text-center">{project?.description}</p>
      </div>

      <div className="col-span-1 row-span-2 w-full order-4">
        <Image
          src={project?.images[1].src || ''}
          alt={project?.images[1].alt || ''}
          width={500}
          height={500}
          className="h-full object-contain hover:rotate-3 image-clip-bottom"
        />
      </div>
    </div>
  )
}

interface AccordionProps {
  className?: string
  project?: (typeof projects)[0]
  open: boolean
  onClick: () => void
}

const AccordionItem: FC<AccordionProps> = ({
  project,
  className,
  open,
  onClick,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6500,
  }

  return (
    <ScrollAnimationWrapper
      delay={1.5}
      className={`w-full flex flex-col ${
        open ? 'gap-4' : 'gap-0'
      } bg-custom-gray p-4 overflow-hidden ${className}`}>
      <button className="w-full flex items-center gap-4" onClick={onClick}>
        <h4 className="uppercase">{project?.name}</h4>
        <ChevronDown className={`${open ? 'rotate-180' : ''} ml-auto`} />
      </button>

      <div
        className={`${
          open ? 'opacity-100 h-fit' : 'p-0 gap-0 h-0 opacity-0'
        } w-full flex flex-col gap-2`}>
        <div className="w-full aspect-square">
          <Slider {...settings}>
            {project?.images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className='w-full h-full image-clip'
               />
            ))}
          </Slider>
        </div>

        <p className="text-sm md:text-base">{project?.description}</p>
      </div>
    </ScrollAnimationWrapper>
  )
}

const Ongoing: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [openItem, setOpenItem] = useState<number | null>(0)

  const handlePrevious = () => {
    // if current is 0, set current to the last index
    // else decrement current by 1
    setCurrent(current === 0 ? projects.length - 1 : current - 1)
  }

  const handleNext = () => {
    // if current is the last index, set current to 0
    // else increment current by 1
    setCurrent(current === projects.length - 1 ? 0 : current + 1)
  }

  const handleToggle = (index: number) => {
    if (index === openItem) {
      setOpenItem(null)
    } else {
      setOpenItem(index)
    }
  }

  return (
    <section className="overflow-visible">
      <ScrollAnimationWrapper
        delay={1.5}
        className="w-full flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="">ongoing projects...</h2>
        <p className="text-sm md:text-base md:w-2/5">
          Here are some of the projects I am currently working on. Stay tuned
          for more updates and exciting features!
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType='slideInBottom' className="carousel w-full aspect-[3/4] md:aspect-[3/1] overflow relative hidden md:grid grid-cols-1 grid-rows-1">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            project={project}
            className={`${
              index === current
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
        ))}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 border p-4 backdrop-blur-sm rounded-full hover:bg-foreground hover:text-background"
          onClick={() => handlePrevious()}>
          <ChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border p-4 backdrop-blur-sm rounded-full hover:bg-foreground hover:text-background"
          onClick={() => handleNext()}>
          <ChevronRight />
        </button>
      </ScrollAnimationWrapper>

      <div className="accordion w-full flex md:hidden flex-col gap-4">
        {projects.map((project, index) => (
          <AccordionItem
            key={index}
            project={project}
            open={index === openItem}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Ongoing
