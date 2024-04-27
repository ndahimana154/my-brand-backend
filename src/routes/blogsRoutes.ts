import express from "express";
import multer from "multer";


import blogsController from "../modules/blogs/controller/blogController";
import uploadBlogCover from "../middlewares/uploadBlogMiddleware";
const blogsRouter = express.Router();  

// Post blog
blogsRouter.post("/", uploadBlogCover.single("cover"), blogsController.postBlog);
// Get blogs
blogsRouter.get("/", blogsController.getBlogs);
// Get a single blog
blogsRouter.get("/:id", blogsController.getBlogById);

// Delete blog
blogsRouter.delete("/:id",blogsController.deleteBlog);

export default blogsRouter;
