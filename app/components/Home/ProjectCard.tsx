import Image from 'next/image'
import React, { FC } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Button from '../Button'

interface ProjectCardProps {
  index: number
  title: string
  description: string
  imageUrl: string
  link: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  description,
  imageUrl,
  link
}) => {
  return (
    <ScrollAnimationWrapper animationType="scaleIn" threshHold={0.2}>
      <div
        className={`w-full flex gap-6 md:gap-24 md:items-center border-t ${
          index === 3 && 'border-b'
        } border-white/20 py-12 md:py-6`}>
        <div className="md:text-2xl opacity-60">(0{index})</div>

        <div className="md:w-2/3 flex flex-col md:flex-row items-center md:gap-24">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className={`w-full md:w-1/2 aspect-video object-contain ${
              index % 2 ? 'order-1' : 'order-3'
            }`}
          />
          <div className={`w-full md:w-1/2 flex flex-col gap-2 order-2`}>
            <h3 className="uppercase">{title}</h3>
            <p className="text-xs lg:text-base">{description}</p>
            <Button link href={link} target='_blank' text='visit' secondary />
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default ProjectCard
