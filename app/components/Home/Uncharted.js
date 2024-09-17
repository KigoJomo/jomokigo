import Image from 'next/image'
import react from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import AnimatedText from '../AnimatedText'
import CurvedText from '../CurvedText'

const Uncharted = () => {
  return (
    <section className="pt-[16vh] flex flex-col items-center justify-start gap-4">
      <ScrollAnimationWrapper className="w-3/4 md:w-1/4 aspect-[2/3] relative flex items-center justify-center before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-10">
        <Image
          src="/images/fella.webp"
          alt="jomo kigo web designer developer"
          width={600}
          height={400}
          className="h-full"
        />

        <div className="absolute flex flex-col items-center gap-0">
          <AnimatedText text={'to be one of'} className="uppercase" />
          <AnimatedText text={'a kind'} className="uppercase" />
        </div>

        <div className="spin absolute -top-16 -right-12">
          <CurvedText
            text="•  develop  •  design  •  develop  •  design  •"
            width={150}
            height={150}
            className="cinzel"
          />
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <p className="text-center">The magic of timeless, creative design</p>
      </ScrollAnimationWrapper>
    </section>
  )
}

export default Uncharted
