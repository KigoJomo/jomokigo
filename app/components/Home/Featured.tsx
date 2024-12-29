import React, { FC } from 'react'
import ProjectCard from './ProjectCard'
import Button from '../Button'

const projects = [
  {
    id: 1,
    title: 'Ambient graphics',
    description:
      'Exploring the intersection of art and technology through immersive graphic designs.',
    images: [
      '/images/projects/ambient.png',
      '/images/projects/ambient-2.png',
      '/images/projects/ambient-3.png',
    ],
    link: 'https://ambientgraphics.vercel.app',
  },
  {
    id: 2,
    title: 'Brittocharette',
    description:
      "Luxurious Interior andIndustrial Design. Modern Elegance: Designs featuring clean lines, neutral palettes, and high-quality materials.",
    images: [
      '/images/projects/brit.png',
      '/images/projects/brit-2.png',
      '/images/projects/brit-3.png',
    ],
    link: 'https://britt-interior.vercel.app/',
  },
  {
    id: 3,
    title: 'Consol Cargo',
    description:
      'Providing reliable and efficient shipping solutions for businesses worldwide.',
    images: [
      '/images/projects/consol.png',
      '/images/projects/consol-2.png',
      '/images/projects/consol-3.png',
    ],
    link: 'https://consolcargo.co.ke',
  },
]

const Featured: FC = () => {
  return (
    <section className="h-fit flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
        <h2>latest work...</h2>

        <Button link href="/projects" text="view all" className="md:ml-auto" />
      </div>

      <div className="w-full h-fit flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index + 1}
            title={project.title}
            description={project.description}
            images={project.images}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Featured
