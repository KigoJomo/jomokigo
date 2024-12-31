import React, { FC } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Button from '../Button'
import ImageCarousel from './ImageCarousel'

interface ProjectCardProps {
  index: number
  title: string
  description: string
  images: string[]
  link: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  description,
  images,
  link,
}) => {
  return (
    <ScrollAnimationWrapper
      animationType="scaleIn"
      threshHold={0.2}
      className={`w-full flex gap-6 md:gap-24 md:items-center border-t ${
        index === 3 && 'border-b'
      } border-white/20 py-8 md:py-6`}>
      <div className="w-1/12 md:w-fit md:text-2xl opacity-60">(0{index})</div>

      <div className="w-10/12 md:w-2/3 flex flex-col md:flex-row items-center md:gap-24">
        <h4 className='mr-auto mb-4 uppercase lato md:hidden'>{title}</h4>

        <ImageCarousel
          images={images}
          className={`w-full md:w-1/2 aspect-video`}
        />

        <div className={`w-full md:w-1/2 flex flex-col gap-2`}>
          <h3 className="uppercase hidden md:flex">{title}</h3>
          <p className="text-sm lg:text-base">{description}</p>
          <Button link href={link} target="_blank" text="visit" secondary />
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ProjectCard
