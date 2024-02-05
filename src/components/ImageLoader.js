import React, { useState } from 'react';


const ImageLoader = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && <span class="loader"></span>}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </>
  );
};

export default ImageLoader;