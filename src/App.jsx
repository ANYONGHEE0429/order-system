import React, { useState } from "react";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    require("./assets/images/ice1.jpeg"),
    require("./assets/images/ice2.jpeg"),
    require("./assets/images/ice3.jpeg"),
    require("./assets/images/ice4.jpeg"),
  ];

  //   if (images.length <= 12) {
  //     images.push({ name: null });
  //   }
  while (images.length < 12) {
    images.push({ name: null });
  }
  return (
    <div className="app">
      <h2>귀염 뽀짝</h2>
      <div className="container">
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
        );
        <div className="selected-image">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
      </div>
    </div>
  );
};

export default App;
