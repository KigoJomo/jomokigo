import { Sparkle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'

interface PointProps {
  text: string
}

const Point: React.FC<PointProps> = ({ text }) => {
  return (
    <div className="flex gap-4">
      <Sparkle size={24} className="flex-shrink-0 border p-1 rounded-full" />
      <p className='text-sm'>{text}</p>
    </div>
  )
}

const Who: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2>about me ...</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <ScrollAnimationWrapper animationType="slideInBottom" delay={0.25}>
            <p className=''>
            I&apos;m Jomo Kigo, a software developer passionate about creating
            innovative and user-friendly digital solutions. I specialize in
            frontend and backend development, with experience in designing and
            deploying professional websites.
            </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="slideInBottom" delay={0.75}>
          <Image
            src={'/images/nova.webp'}
            alt="jomo kigo software developer"
            width={1000}
            height={1000}
            className="w-full aspect-square image-clip-bottom"
          />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="slideInBottom" delay={1.5}>
          <div className="w-full flex flex-col gap-6">
            <Point text="Successfully developed and deployed a professional website for Consol Cargo, integrating ZohoMail to enhance client communication and operational efficiency." />
            <Point text="Redesigned and modernized the Broadband Communication Networks website, achieving a responsive, user-friendly platform that aligns with the company’s vision." />
            <Point text="Created an art gallery platform using Next.js, TailwindCSS, and Wix CMS, featuring dynamic artwork displays and e-commerce functionality." />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

export default Who
