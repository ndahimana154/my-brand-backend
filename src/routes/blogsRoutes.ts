import express from "express";
import uploadBlog from "../middlewares/uploadBlog"

import blogsController from "../modules/blogs/controller/blogController";
import uploadImages from "../middlewares/uploadBlog";
import multer from "../middlewares/multerSetup";
const blogsRouter = express.Router();  

// Post blog
blogsRouter.post("/",multer.single('file'), blogsController.postBlog);
// Get blogs
blogsRouter.get("/", blogsController.getBlogs);
// Get a single blog
blogsRouter.get("/:id", blogsController.getBlogById);

// Delete blog
blogsRouter.delete("/:id",blogsController.deleteBlog);

export default blogsRouter;
