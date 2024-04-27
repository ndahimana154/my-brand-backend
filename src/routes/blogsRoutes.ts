import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/blogs");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, `${uniqueSuffix}.jpeg`);
  },
});

const upload = multer({ storage });

import blogsController from "../modules/blogs/controller/blogController";

const blogsRouter = express.Router();

// Post blog
blogsRouter.post("/", upload.single("file"), blogsController.postBlog);
// Get blogs
blogsRouter.get("/", blogsController.getBlogs);
// Get a single blog
blogsRouter.get("/:id", blogsController.getBlogById);

export default blogsRouter;
