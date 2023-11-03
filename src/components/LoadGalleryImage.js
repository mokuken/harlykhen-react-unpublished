import React, { useState } from 'react';
import "../styles/Loader.css"

const LoadGallery = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <div>
      <img
        style={{ border: isLoaded ? "var(--border-color)" : "none" }}
        src={src}
        alt={alt}
        onLoadStart={handleLoadStart}
        onLoad={handleImageLoad}
      />
      {isLoading && <div className="loading-indicator"><span class="loader"></span></div>}
    </div>
  );
};

export default LoadGallery;
