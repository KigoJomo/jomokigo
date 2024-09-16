// components/ClientWrapper.js
'use client'

import React, { useState } from 'react';
import Loader from './Loader';

const ClientWrapper = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const duration = 10; // Main loading duration - 10000

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  if (!showContent) {
    return <div className="w-screen h-screen flex-col items-center justify-center fixed top-0 left-0" style={{background: "url('/images/gggrain.svg') center/cover no-repeat"}}>
      <Loader duration={duration} onLoadingComplete={handleLoadingComplete} />
    </div>;
  }

  return <>{children}</>;
};

export default ClientWrapper;