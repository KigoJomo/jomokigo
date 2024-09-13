import Boundless from './components/Home/Boundless'
import Hero from './components/Home/Hero'
import Unknown from './components/Home/Unknown'
import ScrollScalingWrapper from './components/ScrollScalingWrapper'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollScalingWrapper>
        <h1 className='mix-blend-difference text-[2rem] md:text-[3.5rem] uppercase text-center'>This ain&apos;t no ordinary portfolio</h1>
      </ScrollScalingWrapper>
      <Boundless />
      <Unknown />
    </>
  )
}
