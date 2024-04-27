import multer from "multer";
import path from "path";

const storage = multer.diskStorage({}); // Use default storage for simplicity

const fileFilter = (req: Request, file: Express.Multer.File, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
    return cb(new Error("Only images are allowed"), false);
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default upload.single("image"); // Configure to handle a single file named 'image'
