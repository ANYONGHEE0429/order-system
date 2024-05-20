import React, { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';
import SelectedImage from './SelectedImage';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { onValue, ref } from 'firebase/database';

const Ordering = () => {
   const [selectedImage, setSelectedImage] = useState(null);
   const [imageName, setImageName] = useState(null);
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

   const handleImageClick = (image, name) => {
      setSelectedImage(image);
      setImageName(name);
   };

   return (
      <div className="app">
         <Link to="/settings">
            <button>Settings</button>
         </Link>
         <h2>귀염 뽀짝</h2>
         <div className="container">
            <ImageGrid images={firebaseImages} onImageClick={handleImageClick} />
            <SelectedImage selectedImage={selectedImage} />
         </div>
         {imageName && <p className="image-name">{imageName}</p>}
      </div>
   );
};

export default Ordering;
