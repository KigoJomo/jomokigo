// SlideText.js
'use client'

import { useEffect, useState } from 'react'
import { Rect, useRect } from 'react-use-rect'

const SlideText = ({ phrases, interval = 2000, className = '' }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [rect, setRect] = useState(null)
  const [rectRef] = useRect(setRect)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItemIndex((index) =>
        index === phrases.length - 1 ? 0 : index + 1
      )
    }, interval)
    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <div
      className={`slide-text text-[1.5rem] leading-[1.5rem] md:text-[4rem] md:leading-[4rem] lowercase ${className}`}
      style={{
        display: 'inline-flex',
        overflowY: 'hidden',
        overflowX: 'visible',
        position: 'relative',
        // width: `${rect?.width}px`,
        height: `${rect?.height}px`,
        transition: 'all 0.5s ease-in-out',
      }}
    >
      {/* <span style={{ visibility: 'hidden' }}>{phrases[currentItemIndex]}</span> */}
      {phrases.map((phrase, index) => (
        <span
          ref={currentItemIndex === index ? rectRef : null}
          style={{
            position: 'absolute',
            top: (rect?.height ?? 0) * 2,
            transform: `translateY(${
              currentItemIndex === index ? `-${(rect?.height ?? 0) * 2}px` : 0
            })`,
            transition: 'all .75s ease',
          }}
          key={index}
        >
          {phrase}
        </span>
      ))}
    </div>
  )
}

export default SlideText
