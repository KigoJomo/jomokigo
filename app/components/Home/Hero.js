import React from 'react'
import AnimatedText from '../AnimatedText'

const Hero = () => {
  return(
    <section className='h-[90vh] flex-shrink-0 flex flex-col items-center justify-center relative' style={{ perspective: '1000px' }} >
      <AnimatedText text={'unwavering'} />
    </section>
  )
}

export default Hero