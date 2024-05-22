import React, { useState, useEffect } from 'react';
import ImageGrid from '../components/ImageGrid';
import SelectedImage from '../components/SelectedImage';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { onValue, ref } from 'firebase/database';
// import { ref } from 'firebase/storage';

const Ordering = () => {
   const [selectedImage, setSelectedImage] = useState([]);
   const [firebaseImages, setFirebaseImages] = useState([]);

   useEffect(() => {
      const imagesRef = ref(db, 'images');
      onValue(imagesRef, snapshot => {
         const data = snapshot.val();
         if (data) {
            const urls = Object.values(data);
            setFirebaseImages(urls);
         }
      });
   }, []);

   const handleImageClick = (image, name, price) => {
      setSelectedImage(prev => {
         // 이미지가 추가됐는지 확인
         const isSelected = prev.find(img => img.url === image);
         // 이미지가 선택 되지 않았을 경우
         if (!isSelected) {
            // 선택한 이미지를 리스트에 추가
            return [...prev, { url: image, name, price }];
         } else {
            // 선택한 이미지를 리스트에서 제거
            return prev.filter(img => img.url !== image);
         }
      });
   };

   return (
      <div className="app">
         <Link to="/settings">
            <button>Settings</button>
         </Link>
         <h2>귀염 뽀짝</h2>
         <div className="container">
            <ImageGrid images={firebaseImages} onImageClick={handleImageClick} />
            <SelectedImage selectedImage={selectedImage} onImageClick={handleImageClick} />
         </div>
      </div>
   );
};

export default Ordering;
