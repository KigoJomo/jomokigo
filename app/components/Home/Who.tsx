import { CheckCheck } from 'lucide-react'
import React from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import ImageCarousel from './ImageCarousel'

interface PointProps {
  text: string
}

const Point: React.FC<PointProps> = ({ text }) => {
  return (
    <div className="flex gap-4">
      <CheckCheck size={24} className="flex-shrink-0" />
      <p className="text-sm md:text-base">{text}</p>
    </div>
  )
}

const points = [
  'I thrive on creativity and problem-solving, always seeking fresh ways to approach challenges.',
  'When I’m not coding, I enjoy deep conversations, sketching out ideas, or diving into topics that inspire me.',
  'I value continuous learning and believe in the power of collaboration to bring out the best in any project.',
]

const images = [
  '/images/carousel-1.webp',
  '/images/carousel-2.webp',
  '/images/carousel-3.webp',
]

const Who: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>about me...</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <ScrollAnimationWrapper animationType="slideInBottom" delay={0.25}>
          <p className="">
            I’m Jomo Kigo, a software developer with a passion for creating and
            problem-solving. Beyond coding, I’m a curious and creative
            individual who enjoys exploring new ideas, tackling challenges, and
            finding innovative ways to bring concepts to life. <br /> <br /> My
            journey isn’t just about work—it’s about connecting with people,
            learning every step of the way, and making a positive impact
            wherever I can.
          </p>
        </ScrollAnimationWrapper>

        <ImageCarousel images={images} className='w-full aspect-square image-clip-bottom' />

        <ScrollAnimationWrapper
          animationType="slideInBottom"
          delay={1.5}
          className="w-full flex flex-col gap-6">
          {points.map((point, index) => (
            <Point key={index} text={point} />
          ))}
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default Who
