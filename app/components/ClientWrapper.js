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
    return <Loader duration={duration} onLoadingComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
};

export default ClientWrapper;