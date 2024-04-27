import mongoose from "mongoose";
import {Express,Request,Response} from "express"
import blogRepository from "../repository/blogRepository";

const postBlog =async (req:Request,res:Response)=> {}

// Get all blogs
const getBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await blogRepository.getBlogs();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching blogs",
    });
  }
};

// Get a single blog
const getBlogById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Blog ID" });
    return; // Return here to exit the function early
  }
  try {
    // Now, use blogId for querying the database
    const blog = await blogRepository.getBlogById(id);
    if (!blog) {
      res.status(404).json({ success: false, message: "Blog not found" });
      return; // Return here to exit the function early
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the blog",
    });
  }
};

// Delete a blog
const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Blog ID" });
    return; // Return here to exit the function early
  }
  try {
    const isDeleted = await blogRepository.deleteBlogById(id);
    if (!isDeleted) {
      res.status(404).json({ success: false, message: "Blog not found" });
      return; // Return here to exit the function early
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the blog",
    });
  }
};

export default { postBlog, getBlogs, getBlogById, deleteBlog };
