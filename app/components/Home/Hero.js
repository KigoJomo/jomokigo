import React from 'react'
import Highlighter from '../Highlighter'
import ImageGrid from './ImageGrid';

const images = [
  'images/dude.webp',
  'images/nova.webp',
  'images/fella.webp',
  'images/extrovert.webp'
];

const Hero = () => {
  return (
    <section
      className="h-[90vh] flex-shrink-0 flex flex-col items-center justify-start gap-8 relative    bg-transparent"
      style={{ perspective: '1000px' }}
    >
      <div className="flex flex-col gap-2">
        <Highlighter
          sentence="Welcome to the Uncharted"
          highlight="Welcome"
          className=""
        />
        <Highlighter
          sentence="Welcome to the Uncharted"
          highlight="to the"
          direction='right'
          // className="-translate-x-8"
        />
        <Highlighter
          sentence="Welcome to the Uncharted"
          highlight="Uncharted"
          // className="-translate-x-16"
        />
      </div>

      <ImageGrid imagePaths={images} />
      
    </section>
  )
}

export default Hero
