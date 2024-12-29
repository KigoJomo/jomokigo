'use client'

import React, { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface CarouselProps {
  images: string[]
  className?: string
}

const ImageCarousel: FC<CarouselProps> = ({ images, className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  }

  return (
    <div className={`${className}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="jomo kigo"
            width={1000}
            height={1000}
            className="w-full"
          />
        ))}
      </Slider>
    </div>
  )
}

export default ImageCarousel
