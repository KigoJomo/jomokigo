"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useRef } from 'react'
import Button from '@/components/Button'
import { Github, Linkedin, Send } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface SocialLink {
  name: string
  url: string
  icon: React.ElementType
  iconProps?: React.SVGProps<SVGSVGElement>
}

const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:kigojomo@gmail.com',
    icon: Send
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kigo-jomo',
    icon: Linkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/KigoJomo',
    icon: Github
  }
]

const SocialLink: FC<SocialLink> = ({ name, url, icon:Icon, iconProps})=>{
  const defaultIconProps = {
    className: 'group-hover:animate-pulse',
    size: 24
  }

  const mergedIconProps = {...defaultIconProps, ...iconProps}

  return(
    <Link
      href={url}
      target='_blank'
      className='flex flex-col items-center gap-2 border hover:border-transparent p-4 rounded-full relative group'
      title={`Contact me on ${name}`}
    >
      <Icon {...mergedIconProps} />

      <p className='text-sm absolute left-1/2 -translate-x-[50%] top-8 opacity-0 group-hover:top-full group-hover:opacity-100'>{name}</p>
    </Link>
  )
}

interface NavPage {
  name: string
  link: string
}

const NavPages: NavPage[] =[
  {
    name: 'about',
    link: '/about'
  },
  {
    name: 'projects',
    link: '/projects'
  },
  {
    name: 'services',
    link: '/services'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]

const Footer: FC = () => {
  const pathname = usePathname()
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const onClick = () => {
    buttonRef.current?.classList.add('motion-preset-confetti')
    setTimeout(() => {
      buttonRef.current?.classList.remove('motion-preset-confetti')
    }, 2000);
  }

  return (
    <footer className="bg-background mx-4 md:mx-8 mb-4 p-6 md:p-8">
      <div className="w-full flex items-start md:items-center justify-between">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="jomo kigo logo"
            width={500}
            height={500}
            className="object-contain w-24 md:w-32"
          />
        </Link>

        <div className="flex items-center flex-col md:flex-row gap-8">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} name={link.name} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>

      <div className="w-full -mt-24 md:-mt-12 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0">
        <h3 className='md:w-1/4 order-1'>Seize the day, let&apos;s have a discussion!</h3>

        <div className="image w-1/2 md:w-1/5 md:order-2 aspect-square overflow-hidden md:rotate-12">
          <Image
            src={'/images/typing.webp'}
            alt={'jomo kigo software developer'}
            width={500}
            height={500}
            className='w-full h-full image-clip'
           />
        </div>

        <Button text="let's start your project" link href='/contact' onClick={onClick} ref={buttonRef} className='order-3' />
      </div>

      <hr className='mt-8 opacity-20' />

      <div className="w-full md:w-2/5 mt-8 md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {NavPages.map((page, index) => (
          <Link href={page.link} key={index} className={`uppercase text-xs md:text-sm border-b-2 pb-1 px-2 w-fit hover:border-white ${pathname.match(page.link) ? 'border-white' : 'border-transparent'}`}>
            {page.name}
          </Link>
        ))}
      </div>

      <div className="w-full md:w-fit mt-8 mx-auto flex items-center pt-2 px-8 border-t border-white/20">
        <p className='text-sm md:text-base opacity-0 md:opacity-100'>©2025 Jomo Kigo.</p>
      </div>
    </footer>
  )
}

export default Footer
