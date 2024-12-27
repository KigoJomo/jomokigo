"use client"

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationType = 'fadeIn' | 'slideInBottom' | 'slideInLeft' | 'slideInRight' | 'scaleIn';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animationType?: AnimationType;
  className?: string;
  delay?: number;
  threshHold?: number;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  },
  slideInBottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  },
  scaleIn: {
    hidden: { scale: 0.75 },
    visible: { 
      scale: 1,
      transition: { duration: 0.6 }
    }
  }
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children, 
  animationType = 'fadeIn', 
  className = '',
  delay = 0,
  threshHold = 0.5
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshHold }}
      variants={animationVariants[animationType]}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;