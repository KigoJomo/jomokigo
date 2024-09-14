"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollScalingWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Animate scaling as user scrolls
    gsap.fromTo(
      wrapperRef.current,
      { scale: 0.25, transformOrigin: 'center center' }, // Initial scale
      {
        scale: 1.1, // Full viewport scale
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true, // Makes it progress with scroll
        },
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: '100vw', height: '100vh', background: '#f0f0f0' }} className='flex flex-col items-center justify-center flex-shrink-0'>
      {children}
    </div>
  );
};

export default ScrollScalingWrapper;
