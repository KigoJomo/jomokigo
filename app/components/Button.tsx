'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { forwardRef } from 'react'

interface ButtonProps {
  text: string
  className?: string
  secondary?: boolean
  onClick?: () => void
  link?: boolean
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

// Use React.forwardRef to allow ref forwarding
const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      className,
      secondary = false,
      link = false,
      href = '/',
      target = '_self',
      onClick,
    },
    ref
  ) => {
    const handleClick = () => {
      if (onClick) {
        onClick()
      }
    }

    const classes = `${className} ${
      secondary
        ? 'border-transparent px-0 hover:border-b-foreground hover:px-2'
        : 'border-foreground hover:text-background hover:bg-foreground rounded-full px-6'
    } flex items-center gap-2 border py-1 w-fit capitalize`

    return link ? (
      <Link
        href={href}
        className={classes}
        target={target}
        onClick={handleClick}
        ref={ref as React.Ref<HTMLAnchorElement>} // Specify the ref type explicitly for <Link>
      >
        <p className='text-nowrap'>{text}</p>
        <ArrowUpRight size={18} />
      </Link>
    ) : (
      <button
        className={classes}
        onClick={handleClick}
        ref={ref as React.Ref<HTMLButtonElement>} // Specify the ref type explicitly for <button>
      >
        <p className='text-nowrap'>{text}</p>
        <ArrowUpRight size={18} />
      </button>
    )
  }
)

// Assign a display name for debugging purposes
Button.displayName = 'Button'

export default Button
