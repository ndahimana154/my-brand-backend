import { Request, Response } from "express";
import blogRepository from "../repository/blogRepository";
import mongoose, { mongo } from "mongoose";
import Blog from "../../../database/models/BlogsModel";

// Post blog
const postBlog = async (req: Request, res: Response) => {
  try {
    const cover: any = req.file?.filename;
    const { title, summary, article } = req.body;
    const newBlog = await blogRepository.postBlog({
      title,
      summary,
      cover,
      article,
    });

    res.status(201).json({
      success: true,
      message: "Blog is posted  successfully",
      newBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occured while posting blog",
    });
  }
};

// Get alll blogs
const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogRepository.getBlogs();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occured while fetching blog",
    });
  }
};
// Get a single blog
const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Blog is not found" });
  }
  try {
    // Now, use blogId for querying the database
    // const blog = await Blog.findById(id);
    const blog = await blogRepository.getBlogById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog was not found" });
    }

    // Return the blog data with a status of 200 (OK)
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);

    // If an error occurs during the database operation, return a 500 (Internal Server Error) status
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching blog",
    });
  }
};

export default { postBlog, getBlogs, getBlogById };
