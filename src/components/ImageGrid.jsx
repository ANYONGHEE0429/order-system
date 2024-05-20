import React, { useState } from 'react';

const ImageGrid = ({ onImageClick }) => {
   const images = [
      { url: require('../assets/images/ice1.jpeg'), name: '이미지1' },
      { url: require('../assets/images/ice2.jpeg'), name: '이미지2' },
      { url: require('../assets/images/ice3.jpeg'), name: '이미지3' },
      { url: require('../assets/images/ice4.jpeg'), name: '이미지4' },
   ];
   return (
      <div className="image-grid">
         {images.map((image, index) => (
            <img
               key={index}
               src={image.url}
               alt={`Image ${index + 1}`}
               onClick={() => onImageClick(image.url, image.name)}
            />
         ))}
      </div>
   );
};

export default ImageGrid;
