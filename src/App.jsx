import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import SelectedImage from "./components/SelectedImage";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const handleImageClick = (image, name) => {
    setSelectedImage(image);
    setImageName(name);
  };
  console.log(imageName);
  return (
    <div className="app">
      <h2>귀염 뽀짝</h2>
      <div className="container">
        <ImageGrid onImageClick={handleImageClick} />

        <SelectedImage selectedImage={selectedImage} />
      </div>
      {imageName && <h1 className="image-name">{imageName}</h1>}
    </div>
  );
};

export default App;
