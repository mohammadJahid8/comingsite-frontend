/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { resizeFile } from "../../utils/ImageHandler";

const BlogBodyInput = ({
  pairs,
  setPairs,

  currentPair,
  setCurrentPair,
}) => {
  const handleImageChange = (file, index) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const resizedImage = await resizeFile(file);

      const updatedPairs = [...pairs];
      updatedPairs[index] = { ...updatedPairs[index], image: resizedImage };

      setPairs(updatedPairs);
      setCurrentPair({ ...currentPair, image: resizedImage });
    };

    reader.readAsDataURL(file);
  };

  const handleDescriptionChange = (event, index) => {
    const updatedPairs = [...pairs];
    updatedPairs[index] = {
      ...updatedPairs[index],
      description: event.target.value,
    };

    setCurrentPair({ ...currentPair, description: event.target.value });

    setPairs(updatedPairs);
  };

  const addPair = () => {
    if (currentPair.image && currentPair.description) {
      setCurrentPair({ image: null, description: "" });
      setPairs([...pairs, { image: null, description: "" }]);
    }
  };

  return (
    <div>
      {pairs?.map((pair, index) => (
        <div key={index}>
          <div className="mb-6">
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Upload Body Image {index + 1}{" "}
                <span className="text-red-600">*</span>
              </label>
              <img src={pair.image} alt="" className="mb-2 w-24" />
              <input
                className="block w-full text-sm h-[43px] rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-900 border-gray-600 placeholder-gray-400 add-blog-file"
                id="file_input"
                type="file"
                accept="image/*"
                // value={pair.image}
                onChange={(e) => handleImageChange(e.target.files[0], index)}
              />
            </div>
          </div>
          <div className="mb-6">
            <div>
              <label
                htmlFor="bodyDescription"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Body Description {index + 1}{" "}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                id={`description`}
                // name={`bodyDescription_${index}`}
                value={pair.description}
                onChange={(e) => handleDescriptionChange(e, index)}
                required
                rows={4}
                className="block p-2.5 w-full text-sm   rounded-lg border  bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Body description..."
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={addPair}
          className="bg-green-500 text-white py-1 px-2 rounded uppercase text-xs"
          disabled={
            !currentPair.image ||
            !currentPair.description ||
            pairs?.length >= 10
          }
        >
          Add Body
        </button>

        <p className="text-white">{pairs?.length}/10</p>
      </div>
    </div>
  );
};

export default BlogBodyInput;
