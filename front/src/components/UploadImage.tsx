import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>();

  return (
    <div>
      <h1>Upload image here</h1>

      {selectedImage && (
        <div>
          <img
            alt="upload image"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      
      <input
        type="file"
        onChange={(event) => {
          let files = (event.target as HTMLInputElement).files
          setSelectedImage(files ? files[0] : null);
        }}
      />
    </div>
  );
};

export default UploadImage;
