/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";

const BlogImageUploader = ({
  onChange,
  label,
  value,
  disabled,
  base64,
  setBase64,
}) => {
  const handleChange = useCallback(
    (base64) => {
      onChange(base64);
    },
    [onChange]
  );

  const resizeFile = (file) =>
    new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        150,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleDrop = useCallback(
    (files) => {
      const file = files[0];

      const reader = new FileReader();

      reader.onload = async (e) => {
        const resizedImage = await resizeFile(file);

        setBase64(resizedImage);
        handleChange(resizedImage);
      };

      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <div
      {...getRootProps({
        className:
          " mx-auto p-8 text-white text-center border-2 border-dotted rounded",
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center justify-center">
          <img
            src={base64}
            height="100"
            width="100"
            alt="image"
            id="blogPreview"
          />
        </div>
      ) : (
        <p className="text-white text-sm">
          {label} <span className="text-red-600">*</span>
        </p>
      )}
    </div>
  );
};

export default BlogImageUploader;
