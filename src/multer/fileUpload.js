import multer from "multer";
import { AppError } from "../utils/AppError.js";



let options = (folderName) => {
  const storage = multer.diskStorage({});
  function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new AppError("invalid image", 400), false);
    }
  }

  return multer({ storage, fileFilter });

};

export const uploadSingleFile = (folderName, fieldName) =>  options(folderName).single(fieldName);




export const uploadMixFiles = (folderName, arrayFields) =>  options(folderName).fields(arrayFields);