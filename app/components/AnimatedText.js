'use client'
import React, { useState, useEffect, useRef } from 'react'

const AnimatedText = ({ text, className = '' }) => {
  const [positionPercentage, setPositionPercentage] = useState(null)
  const elementRef = useRef(null)
  const lettersRef = useRef([]) // To hold references to individual letter elements

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // Calculate the center position of the element
        const elementCenterY = (rect.top + rect.bottom) / 2

        // Calculate the distance from the center to the viewport edges
        const distanceFromBottom = viewportHeight - elementCenterY

        // Convert distance to percentage (0 to 100%)
        const distanceFromBottomPercentage = (
          (distanceFromBottom / viewportHeight) *
          100
        ).toFixed(2)

        setPositionPercentage(distanceFromBottomPercentage)

        // Dynamically adjust the rotation for each letter based on scroll
        lettersRef.current.forEach((letterRef, index) => {
          if (letterRef) {
            const letterCount = lettersRef.current.length

            // Calculate the base rotation angle based on scroll position
            const baseRotation = (distanceFromBottomPercentage - 50) * 1.8 // scale 100% -> 90deg, 0% -> -90deg

            // Interpolate letter rotation (first letter -> 0%, last letter -> full rotation)
            const letterRotation = baseRotation * (index / (letterCount - 1))

            letterRef.style.transform = `rotateX(${letterRotation}deg)`
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Trigger the initial position calculation
    handleScroll()

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty dependency array to avoid rerender loops

  // Split text into individual letters
  const letters = text.split('').map((letter, index) => {
    if (letter === ' ') {
      return (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)} // Store reference to each letter
          className="letter cinzel flex"
          style={{ transformStyle: 'preserve-3d' }}
        >
          &nbsp;
        </span>
      )
    } else {
      return (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)} // Store reference to each letter
          className="letter cinzel flex"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {letter}
        </span>
      )
    }
  })

  return (
    <h1
      ref={elementRef}
      className={`text-[2.5rem] md:text-[5rem] lowercase text-center text-nowrap flex flex-nowrap ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {letters}
    </h1>
  )
}

export default AnimatedText
