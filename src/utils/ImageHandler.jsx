/* eslint-disable no-unused-vars */

import Resizer from "react-image-file-resizer";
export const resizeFile = (file) =>
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
