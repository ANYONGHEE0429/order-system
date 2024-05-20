import React, { useState } from 'react';

const SelectedImage = ({ selectedImage, onImageClick }) => {
   const [count, setCount] = useState({});
   const [selected, setSelected] = useState(null);
   const handleCountChange = (url, count) => {
      setCount(prev => {
         // 현재 이미지의 카운트 값
         const currentCount = prev[url] || 0;
         // 변경된 카운트 값을 새로운 카운트 값에 적용
         const totalCount = currentCount + count;
         // 새로운 카운트 값을 해당 이미지 값에 적용
         return totalCount < 0 ? { ...prev } : { ...prev, [url]: totalCount };
      });
   };
   const handleImageClick = () => {};
   return (
      <div className="selected-image">
         {selectedImage.map((image, index) => (
            <div
               key={index}
               className="selected-image"
               onClick={() => onImageClick(image.url, image.name, image.price)}>
               {selectedImage && <img src={image.url} alt={image.name} />}

               <p>{image.name}</p>
               <p>{image.price}</p>
               <div className="image-count">
                  <button onClick={() => handleCountChange(image.url, -1)}>-</button>
                  {count[image.url] || 0}
                  <button onClick={() => handleCountChange(image.url, 1)}>+</button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default SelectedImage;
