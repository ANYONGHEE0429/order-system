import React, { useState, useEffect } from 'react';

const SelectedImage = ({ selectedImage, imageName }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      setCount(0);
   }, [selectedImage]);

   const handleCountChange = count => {
      setCount(prev => {
         const totalCount = prev + count;
         return totalCount < 0 ? 0 : totalCount;
      });
   };

   return (
      <div className="selected-image">
         {selectedImage && (
            <div>
               <img src={selectedImage} alt={imageName} />
               <div className="image-count">
                  <button onClick={() => handleCountChange(-1)}>-</button>
                  {count}
                  <button onClick={() => handleCountChange(1)}>+</button>
               </div>
            </div>
         )}
      </div>
   );
};

export default SelectedImage;
