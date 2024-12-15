'use client'

import {
  Blocks,
  EllipsisVertical,
  FileCog,
  House,
  Info,
  Send,
  X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface NavPage {
  name: string
  path: string
}

type IconMapping = {
  [key: string]: React.ElementType
}

const iconMap: IconMapping = {
  home: House,
  about: Info,
  projects: FileCog,
  services: Blocks,
  contact: Send,
}

const navPages: NavPage[] = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="w-screen sticky top-0 z-20 px-4 md:px-8 flex items-center justify-between md:backdrop-blur-xl">
      <Link href="/" className="logo py-2">
        <Image
          src="/images/logo.png"
          alt="jomo kigo logo"
          width={500}
          height={500}
          className="object-contain w-20"
        />
      </Link>

      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <X className="fade-in" />
        ) : (
          <EllipsisVertical className="fade-in" />
        )}
      </button>

      <nav
        className={`absolute md:static z-[19] md:z-20 left-0 w-full md:w-fit h-screen md:h-fit ${
          menuOpen ? 'top-full opacity-100' : '-top-[100vh] opacity-0 md:opacity-100'
        } transition-opacity duration-300 flex flex-col md:flex-row gap-0 md:gap-6 px-4 md:px-0 pt-16 md:py-0 backdrop-blur-3xl md:backdrop-blur-0`}>
        {navPages.map((page) => {
          const Icon = iconMap[page.name]

          return (
            <Link
              key={page.path}
              href={page.path}
              className="flex items-center gap-6 md:gap-0 border-y md:border-t-0 md:border-b-2 border-white/10 md:border-transparent md:hover:border-white py-6 md:py-2 px-2"
              onClick={toggleMenu}>
              {Icon && <Icon className="md:hidden" />}
              <span className="uppercase">{page.name}</span>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
