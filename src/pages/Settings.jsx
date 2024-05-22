import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app, db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { push, set } from 'firebase/database';

const Settings = () => {
   const [images, setImages] = useState([]);
   const navigate = useNavigate();

   const handleGoBack = () => {
      navigate('/');
   };

   const handleImageChange = e => {
      const fileList = e.target.files;
      const selectedFiles = Array.from(fileList).slice(0, 12);
      setImages(selectedFiles);
   };

   const imageUpload = async () => {
      const storage = getStorage(app);
      const imagesRef = ref(db, 'images');

      try {
         await Promise.all(
            images.map(async image => {
               const storageRef = ref(storage, `images/${image.name}`);
               await uploadBytes(storageRef, image);
               const imageUrl = await getDownloadURL(storageRef);
               const snapshot = await push(imagesRef);
               await set(ref(db, `images/${snapshot.key}`), imageUrl);
               console.log(`${image.name} uploaded successfully. URL: ${imageUrl}`);
            }),
         );
      } catch (error) {
         console.error('Error uploading', error);
      }
   };

   return (
      <div>
         <h3>관리자 화면</h3>
         <input type="file" onChange={handleImageChange} multiple accept="image/*" />
         <button onClick={imageUpload}>이미지 업로드</button>
         <button onClick={handleGoBack}>나가기</button>
      </div>
   );
};

export default Settings;
