import React, { useState } from 'react';

const LoadImage = ({ className, src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setIsLoaded(true);
    };
  
    return (
      <img
      className={className}
      src={src}
      alt={alt}
        onLoad={handleImageLoad}
        style={
          isLoaded
            ? { border: '3px solid black' }
            : { border: 'none' }
        }
      />
    );
};

export default LoadImage
