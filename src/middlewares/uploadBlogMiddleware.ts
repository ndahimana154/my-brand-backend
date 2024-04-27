import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    const uploadDir = "./uploads/blogs";

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: function (_req, _file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = `${uniqueSuffix}.jpeg`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default upload;
