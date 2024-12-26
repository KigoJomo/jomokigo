import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

interface ButtonProps {
  text: string
  className?: string
  secondary?: boolean
  link?: boolean
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const Button: FC<ButtonProps> = ({ text, className, secondary = false, link = false, href = '/', target = '_self' }) => {
  const classes = `${className} ${secondary ? 'border-transparent hover:border-b-foreground px-2' : 'border-foreground hover:text-background hover:bg-foreground rounded-full px-6'} flex items-center gap-2 border py-1 w-fit capitalize`;

  return (
    <>
    {link ? 
      (<Link href={href} className={classes} target={target}>
        <p>{text}</p>
        <ArrowUpRight size={18} />
      </Link>)
     : 
      (<button className={classes}>
        <p>{text}</p>
        <ArrowUpRight size={18} />
      </button>)
    }
    </>
  )
}

export default Button
