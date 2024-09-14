// components/ImageGrid.js
"use client"

import React from 'react'

// Function to shuffle an array (for randomizing images and border radius)
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const ImageGrid = ({ imagePaths }) => {
  // Define the possible border-radius values
  const borderRadiusOptions = ['50%', '4rem']

  // Ensure that each value is used twice
  const borderRadiusValues = shuffleArray([
    ...borderRadiusOptions,
    ...borderRadiusOptions,
  ])

  // Shuffle the image paths for randomness
  const shuffledImages = shuffleArray(imagePaths)

  return (
    <div className="image-container w-full py-8 md:px-24 grid grid-cols-2 md:grid-cols-4 gap-0">
      {shuffledImages.map((image, index) => (
        <>
          <div
            key={index}
            className={`img w-[1/4] aspect-square border-8 border-quaternary -mx-6 relative`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: borderRadiusValues[index],
            }}
          />
        </>
      ))}
    </div>
  )
}

export default ImageGrid
