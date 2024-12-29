'use client'
import { ChevronDown } from 'lucide-react'
import React, { FC, useReducer } from 'react'
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

const Service: FC<ServiceProps> = ({ title, description, index }) => (
  <ScrollAnimationWrapper
    delay={index * 0.5}
    animationType="slideInBottom"
    className="flex flex-col gap-4">
    <p className="md:text-2xl">(0{index})</p>
    <hr />
    <h3>{title}</h3>
    <p className="text-sm md:text-base">{description}</p>
  </ScrollAnimationWrapper>
)

const AccordionItem: FC<ServiceProps> = ({
  title,
  description,
  index,
  open,
  onClick,
}) => {
  const contentClass = open
    ? 'opacity-100 h-fit'
    : 'opacity-0 h-0 overflow-hidden'

  return (
    <div
      className={`w-full bg-custom-gray p-4 flex flex-col gap-${open ? 4 : 0}`}>
      <button
        className="w-full flex items-center gap-4"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={`accordion-item-${index}`}>
        <p className="md:text-2xl">(0{index})</p>
        <h4 className="uppercase">{title}</h4>
        <ChevronDown
          className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={`accordion-item-${index}`}
        className={`transition-all ${contentClass}`}>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

type Action = { type: 'toggle'; index: number }
const reducer = (state: number | null, action: Action): number | null =>
  state === action.index ? null : action.index

const Services: FC = () => {
  const [openItem, dispatch] = useReducer(reducer, null)

  return (
    <section className="flex flex-col gap-8">
      <ScrollAnimationWrapper>
        <h2 className="">my expertise...</h2>
      </ScrollAnimationWrapper>

      <div className="hidden md:grid gap-32 grid-cols-3">
        {services.map(({ title, description }, index) => (
          <Service
            key={index}
            title={title}
            description={description}
            index={index + 1}
          />
        ))}
      </div>

      <div className="accordion grid md:hidden grid-cols-1 gap-4">
        {services.map(({ title, description }, index) => (
          <AccordionItem
            key={index}
            title={title}
            description={description}
            index={index + 1}
            open={openItem === index}
            onClick={() => dispatch({ type: 'toggle', index })}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
