import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import SelectedImage from "./SelectedImage";

const Ordering = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleImageClick = (image, name) => {
    setSelectedImage(image);
    setImageName(name);
  };

  return (
    <div className="app">
      <h2>귀염 뽀짝</h2>
      <div className="container">
        <ImageGrid onImageClick={handleImageClick} />
        <SelectedImage SelectedImage={selectedImage} />
      </div>
      {imageName && <p className="image-name">{imageName}</p>}
    </div>
  );
};

export default Ordering;
