"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollScalingWrapper = ({ children, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Animate scaling as user scrolls
    gsap.fromTo(
      wrapperRef.current,
      { scale: 0.25, backgroundSize: '300%', transformOrigin: 'center center' }, // Initial scale
      {
        scale: 1.1, // Full viewport scale
        backgroundSize: '100%',
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
    <section ref={wrapperRef} style={{ width: '100vw', height: '105vh' }} className={`flex-shrink-0 ${className}`}>
      {children}
    </section>
  );
};

export default ScrollScalingWrapper;
