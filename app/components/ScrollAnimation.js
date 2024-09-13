"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;

    gsap.to(box, {
      backgroundColor: '#ccc5b9',
      width: '100vw',
      height: '100vh',
      duration: 1,
      scrollTrigger: {
        trigger: box,
        start: 'top center', 
        end: 'center center', 
        scrub: true,
        markers: false,
        toggleActions: 'play none none reverse'
      }
    });

    gsap.to(text, {
      rotateX: 0,
      // opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box,
        start: 'top center',
        end: 'center center',
        scrub: true,
        markers: false,
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section style={{ height: '200vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='p-0'>
      <div
        ref={boxRef}
        className='w-[75vw] md:w-[50vw] flex-shrink-0'
        style={{
          height: '40vh',
          backgroundColor: '#6b705c',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6b705c',
          perspective: '1000px'
        }}
      >
        <h1 
          ref={textRef} 
          className='text-4xl mix-blend-difference'
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-90deg)',
          }}
        >
          boundless
        </h1>
      </div>
    </section>
  );
};

export default ScrollAnimation;