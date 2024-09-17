import Image from 'next/image'
import AnimatedText from '../AnimatedText'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import ScrollScalingWrapper from '../ScrollScalingWrapper'
import CurvedText from '../CurvedText'

const Excellence = () => {
  return (
    <ScrollScalingWrapper
      className={
        "px-[2rem] md:px-[24rem] flex flex-col items-center gap-0 bg-[url('/images/marble2.webp')] md:bg-[url('/images/marble.webp')] bg-center bg-no-repeat bg-fixed      before:pointer-events-none before:-z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-opacity-75 before:bg-black"
      }
    >
      <div className="flex md:hidden flex-col items-center relative">
        <AnimatedText smaller text={'welcome'} className="" />
        <AnimatedText smaller text={'to the'} className="" />
        <AnimatedText text={'uncharted'} className="" />
      </div>

      <div className="hidden md:flex flex-col items-center">
        <AnimatedText text={'welcome to the'} className="" smaller />
        <AnimatedText text={'uncharted'} className="uppercase" />
      </div>

      <ScrollAnimationWrapper className={'w-full flex justify-center'}>
        <div className="-my-[10%] spin">
          <div className="scale-[0.4]">
            <CurvedText
              text={'• Unwavering  •  Creativity'}
              width={150}
              height={150}
              fontSize={24}
              className=""
            />
          </div>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper className={'w-full flex items-center'}>
        <h4 className="capitalize w-1/2 mr-4">
          This ain&apos;t no ordinary portfolio
        </h4>

        <Image
          alt="jomo kigo web developer designer"
          src="/images/programmer.webp"
          width={600}
          height={400}
          className="w-1/2"
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper duration={2} className={'w-full flex items-center'}>
        <Image
          alt="jomo kigo web developer designer"
          src="/images/dude.webp"
          width={600}
          height={400}
          className="w-1/2 aspect-[2/3]"
        />

        <h4 className="capitalize w-1/2 ml-4">
          It&apos;s a testament of what could be
        </h4>
      </ScrollAnimationWrapper>
    </ScrollScalingWrapper>
  )
}

export default Excellence
