import React, { useEffect, useState } from 'react';
import './SelectedImage.css';

const SelectedImage = ({ selectedImage, onImageClick }) => {
   const [count, setCount] = useState({});

   const handleCountChange = (url, count) => {
      setCount(prev => {
         // 현재 이미지의 카운트 값(prev 초기 값 undefined)
         const currentCount = prev[url] !== undefined ? prev[url] : 1;
         // 변경된 카운트 값을 새로운 카운트 값에 적용
         const newCount = currentCount + count;
         // 0보다 작을 경우
         const totalCount = newCount < 0 ? 0 : newCount;
         // 새로운 카운트 값을 해당 이미지 값에 적용
         return { ...prev, [url]: totalCount };
      });
   };

   const handleImageClick = (image, name, price) => {
      onImageClick(image, name, price);
      setCount(prev => {
         // 클릭한 이미지가 없는 상태
         if (!(image in prev)) {
            return { ...prev, [image]: 1 };
         }
         return prev;
      });
   };

   const calTotalPrice = () => {
      let totalPrice = 0;
      if (Object.keys(count).length === 0) {
         alert(Object);
         return 0;
      }
      return totalPrice;
   };

   useEffect(() => {
      if (Object.keys(count).length === 0) {
         alert(Object.keys(count).length);
         return 0;
      }
   }, [count]);
   return (
      <div className="selected-images">
         {selectedImage.map((image, index) => (
            <div key={index} className="selected-image">
               <img
                  src={image.url}
                  alt={image.name}
                  onClick={() => handleImageClick(image.url, image.name, image.price)}
               />
               <p>{image.name}</p>
               <p>{image.price}원</p>
               <div className="image-count">
                  <button onClick={() => handleCountChange(image.url, -1)}>-</button>
                  {count[image.url] !== undefined ? count[image.url] : 1}
                  <button onClick={() => handleCountChange(image.url, 1)}>+</button>
               </div>
            </div>
         ))}
         <button className="total-count">총 : {calTotalPrice}원</button>
      </div>
   );
};

export default SelectedImage;
