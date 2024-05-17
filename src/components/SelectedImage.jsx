import React from "react";

const SelectedImage = ({ selectedImage }) => {
  return (
    <div className="selected-image">
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default SelectedImage;
