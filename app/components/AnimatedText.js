'use client'
import React, { useState, useEffect } from 'react'

const AnimatedText = ({ text, className= ' ' }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () =>  window.removeEventListener('scroll', handleScroll);
  }, [])

  return <p className={className}>{scrollY}</p>
}

export default AnimatedText
