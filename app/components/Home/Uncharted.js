import Image from 'next/image'
import react from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import AnimatedText from '../AnimatedText'
import CurvedText from '../CurvedText'

const Uncharted = () => {
  return (
    <section className="pt-[16vh] h-fit flex flex-col md:flex-row items-center md:items-end justify-start md:justify-center gap-24 md:gap-12">
      <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center justify-start gap-4 flex-grow-0">
        <ScrollAnimationWrapper className="w-3/4 md:w-1/2 aspect-[2/3] relative flex items-center justify-center before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-10">
          <Image
            src="/images/fella.webp"
            alt="jomo kigo web designer developer"
            width={600}
            height={400}
            className="h-full"
          />
          <ScrollAnimationWrapper
            duration={2.5}
            className="absolute mt-24 flex flex-col items-center gap-0"
          >
            <AnimatedText text={'to be one of'} className="uppercase" />
            <AnimatedText text={'a kind'} className="uppercase" />
          </ScrollAnimationWrapper>
          <div className="spin absolute -top-16 -right-12">
            <CurvedText
              text="•  develop  •  design  •  develop  •  design  •"
              width={150}
              height={150}
              className="cinzel"
            />
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper duration={2.5}>
          <p className="text-center">The magic of timeless, creative design</p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper variant='fadeIn' duration={2.5} className="h-12 w-[1px] bg-primary md:"></ScrollAnimationWrapper>
      </div>

      <div className="order-2 md:order-1 w-full md:w-1/4 flex md:flex-col justify-between md:justify-end gap-6 md:gap-2">
        <ScrollAnimationWrapper
          variant="slideInBottom"
          className={'w-1/2 aspect-[2/3]'}
        >
          <Image
            src="/images/nova.webp"
            alt="jomo kigo web designer developer"
            width={600}
            height={400}
            className="h-full"
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper
          className={'w-1/2 md:w-full flex flex-col items-end md:items-start'}
        >
          <AnimatedText text={'leave a'} smaller className="md:-mb-4" />
          <AnimatedText text={'mark'} smaller />

          <p className="text-right md:text-left mt-8 md:m-0 text-sm">
            I make digital masterpieces that set you apart from the competition
          </p>
        </ScrollAnimationWrapper>
      </div>

      <div className="flex md:hidden order-3 -my-8 spin">
        <CurvedText
          text="•  imagine  •  create  •  Innovate  •  repeat  •"
          width={150}
          height={150}
          className="cinzel"
        />
      </div>

      <div className="order-4 w-full md:w-1/4 flex md:flex-col items-center md:items-end justify-between md:justify-end gap-6 md:gap-2">
        <ScrollAnimationWrapper className={'w-1/2 md:w-3/4 flex flex-col md:items-end gap-8 md:gap-2'}>
          <AnimatedText smaller text={'captivate'} />
          <p className='md:text-right'>
            It&apos;s about time you gave your brand a{' '}
            <strong>mindblowing</strong> online presence.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className={'w-1/2 aspect-[2/3]'} duration={2}>
          <Image
            alt="jomo kigo web developer designer"
            src="/images/extrovert.webp"
            width={600}
            height={400}
            className='h-full'
          />
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default Uncharted
