// components/Loader.js
'use client'

import React, { useState, useEffect, useRef } from 'react'
import SlideText from './SlideText'

const Loader = ({ duration, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const spinnerRef = useRef(null)
  const titleRef = useRef(null)
  const logoRef = useRef(null)
  const progressRef = useRef(null)
  const loaderRef = useRef(null)
  // const nameRef = useRef(null)
  const sloganRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          spinnerRef.current.classList.add('opacity-0')
          logoRef.current.classList.add('opacity-100')
          titleRef.current.classList.add('opacity-0')
          progressRef.current.classList.add('opacity-0')

          setTimeout(() => sloganRef.current.classList.add('opacity-100'), 1000)

          // Start fade-out animation for the entire loader
          setTimeout(() => {
            loaderRef.current.classList.add('opacity-0')
            // Notify parent component that loading is complete after fade-out
            setTimeout(() => onLoadingComplete(), 1000) // fade-out duration
          }, 5000) // delay before starting fade-out - 5000

          return 100
        }
        return prevProgress + 1
      })
    }, duration / 100)

    return () => clearInterval(timer)
  }, [duration, onLoadingComplete])

  const phrases = [
    'Crafting Excellence',
    'Designing Brilliance',
    'Unleashing Creativity',
    'Shaping Innovation',
    'Curating Masterpieces',
  ]

  return (
    <div
      ref={loaderRef}
      className="h-full w-full flex items-center justify-center"
    >
      <div className="loader w-full h-[40vh] flex-grow-0 flex flex-col items-center justify-center gap-8 relative">
        <div ref={titleRef} className="h-1/5 flex items-center w-full">
          <SlideText phrases={phrases} interval={1800} />
        </div>

        <div className="relative w-full h-3/5 flex justify-center items-center">
          <div
            ref={spinnerRef}
            className={`spinner w-[168px] h-[124px] absolute z-40`}
          ></div>

          <div
            ref={logoRef}
            className="logo opacity-0 w-[168px] h-[124px] flex flex-col items-center select-none cursor-pointer absolute z-50"
          >
            <span
              className={`w-[100%] h-8 border-2 border-b-0 border-primary`}
            ></span>

            <p
              className={`name text-[2rem] cinzel text-primary text-nowrap`}
            >
              jomo kigo
            </p>

            <p
              ref={sloganRef}
              className={`slogan opacity-0 duration-1000 text-xs tracking-widest lato text-primary w-[120%] text-center`}
            >
              Unwavering Creativity
            </p>

            <span
              className={`w-[100%] h-8 border-2 border-t-0 border-primary`}
            ></span>
          </div>
        </div>

        <div ref={progressRef} className="h-1/5 flex items-center">
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
