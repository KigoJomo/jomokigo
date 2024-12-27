'use client'
import { ChevronDown } from 'lucide-react'
import React, { FC, useState } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'

const services = [
  {
    title: 'Web Development',
    description:
      'I build responsive and high-performance websites and web applications.',
  },
  {
    title: 'UI/UX Design',
    description:
      'I design user-friendly interfaces and experiences for your digital products.',
  },
  {
    title: 'SEO Optimization',
    description:
      'I optimize your website to rank higher on search engine results pages.',
  },
]

interface ServiceProps {
  title: string
  description: string
  index: number
  open?: boolean
  onClick?: () => void
}

const Service: FC<ServiceProps> = ({ title, description, index }) => {
  return (
    <ScrollAnimationWrapper delay={index * 0.5} animationType='slideInBottom' className="flex flex-col gap-4">
      <p className="md:text-2xl">(0{index})</p>
      <hr />
      <h3 className="">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </ScrollAnimationWrapper>
  )
}

const AccordionItem: FC<ServiceProps> = ({
  title,
  description,
  index,
  open,
  onClick,
}) => {
  return (
    <div
      className={`w-full bg-custom-gray p-4 flex flex-col ${
        open ? 'gap-4' : 'gap-0'
      }`}>
      <button className="w-full flex items-center gap-4" onClick={onClick}>
        <p className="md:text-2xl">(0{index})</p>
        <h4 className="uppercase">{title}</h4>
        <ChevronDown className={`${open ? 'rotate-180' : ''} ml-auto`} />
      </button>

      <div
        className={`${open ? 'opacity-100 h-fit' : 'p-0 gap-0 h-0 opacity-0'}`}>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

const Services: FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    if (index === openItem) {
      setOpenItem(null)
    } else {
      setOpenItem(index)
    }
  }

  return (
    <section className="flex flex-col gap-8">
      <ScrollAnimationWrapper>
        <h2 className="">my expertise...</h2>
      </ScrollAnimationWrapper>

      <div className="hidden md:grid gap-32 grid-cols-3">
        {services.map((service, index) => (
          <Service key={index} {...service} index={index + 1} />
        ))}
      </div>

      <div className="accordion grid md:hidden grid-cols-1 gap-4">
        {services.map((service, index) => (
          <AccordionItem
            key={index}
            {...service}
            index={index + 1}
            onClick={() => handleToggle(index)}
            open={openItem === index}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
