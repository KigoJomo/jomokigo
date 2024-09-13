// components/ClientWrapper.js
'use client'

import React, { useState } from 'react';
import Loader from './Loader';

const ClientWrapper = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const duration = 5000; // Main loading duration

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  if (!showContent) {
    return <div className="w-full h-screen flex-col items-center justify-center">
      <Loader duration={duration} onLoadingComplete={handleLoadingComplete} />
    </div>;
  }

  return <>{children}</>;
};

export default ClientWrapper;