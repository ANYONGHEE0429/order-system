import React from 'react';

const ImageGrid = ({ onImageClick }) => {
   const images = [
      { url: require('../assets/images/ice1.jpeg'), name: '이미지1', price: '1000' },
      { url: require('../assets/images/ice2.jpeg'), name: '이미지2', price: '2000' },
      { url: require('../assets/images/ice3.jpeg'), name: '이미지3', price: '3000' },
      { url: require('../assets/images/ice4.jpeg'), name: '이미지4', price: '4000' },
   ];
   return (
      <div className="image-grid">
         {images.map((image, index) => (
            <img
               key={index}
               src={image.url}
               alt={`Image ${index + 1}`}
               onClick={() => onImageClick(image.url, image.name, image.price)}
            />
         ))}
      </div>
   );
};

export default ImageGrid;
