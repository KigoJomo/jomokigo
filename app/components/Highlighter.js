// components/Highlighter.js
"use client"
import React from 'react';

const Highlighter = ({ sentence, highlight, direction = 'left', repeatCount = 100, className = ' ' }) => {
  const upperSentence = sentence.toUpperCase();
  const highlightUpper = highlight.toUpperCase();

  // Split the sentence by the highlight word to style it separately
  const parts = upperSentence.split(new RegExp(`(${highlightUpper})`, 'g'));

  return (
    <div className={`w-screen overflow-hidden whitespace-nowrap`}>
      <div 
        className={`animate-scroll flex items-center space-x-1 md:space-x-4 text-2xl md:text-6xl font-bold ${className}`}
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse', // controls scroll direction
        }}
      >
        {[...Array(repeatCount)].map((_, idx) => (
          <React.Fragment key={idx}>
            {parts.map((part, i) => (
              <span key={i} className={`${part === highlightUpper ? 'opacity-100 ' : 'opacity-10'} cinzel lowercase`}>
                {part}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </div>
  );
};

export default Highlighter;
