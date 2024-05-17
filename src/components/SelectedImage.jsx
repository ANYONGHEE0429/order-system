import React, { useState, useEffect } from "react";

const SelectedImage = ({ selectedImage }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [selectedImage]);

  const handleCountChange = (count) => {
    setCount((prev) => {
      const totalCount = prev + count;
      return totalCount < 0 ? 0 : totalCount;
    });
  };

  return (
    <div className="selected-image">
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" />
          <div className="image-count">
            <button onClick={() => handleCountChange(-1)}>-</button>
            {count}
            <button onClick={() => handleCountChange(1)}>+</button>
          </div>
          <button>확인</button>
        </div>
      )}
    </div>
  );
};

export default SelectedImage;
