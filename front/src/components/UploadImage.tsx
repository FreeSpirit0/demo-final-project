import { getIngredients } from "@/services/image-recognition";
import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>();

  return (
    <div>
      <h1 className="text-2xl">Upload image here</h1>

      <input
        type="file"
        onChange={(event) => {
          let files = (event.target as HTMLInputElement).files;
          setSelectedImage(files ? files[0] : null);
        }}
      />

      {selectedImage && (
        <div>
          <img
            alt="upload image"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <div className="flex gap-4 mt-4">
            <button
              className="bg-red-600 text-white rounded-md p-4"
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </button>
            <button
              className="bg-blue-400 text-white rounded-md p-4"
              onClick={() => {
                getIngredients(selectedImage);
              }}
            >
              Submit Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
