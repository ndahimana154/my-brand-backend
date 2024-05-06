import mongoose from "mongoose";
import { Request, Response } from "express";
import blogRepository from "../repository/blogRepository";
import { cloudinary } from "../../../utils/cloudinary";

import uploadImages from "../../../middlewares/uploadBlog";
import asyncHandler from "express-async-handler";

const postBlog = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    // TODO: Get the project detail from req.body
    try {
      console.log("Before file");
      console.log(req.body)
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload an image",
        });
      }
      const result = await uploadImages(req.file);
      console.log(result);
      const blogData = await blogRepository.postBlog({
        title: req.body.title,
        summary: req.body.summary,
        cover: result?.secure_url,
        article: req.body.article,
      });

      res.status(201).json({
        success: true,
        message: "Project is saved successfully.",
        blogData,
      });

      console.log(blogData);
      console.log("After file");
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);

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
// Update a blog
const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    // const result = await uploadImages(req.file);
    const id: string = req.params.id;
    const updatedBlogData = {
      title: req.body.title,
      summary: req.body.summary,
      article: req.body.article,
    };

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ success: false, message: "Invalid Blog ID" });
      return; // Return here to exit the function early
    }
    // Check if the blog exists
    const existingBlog = await blogRepository.getBlogById(id);
    if (!existingBlog) {
      res.status(404).json({ success: false, message: "Blog not found" });
      return; // Return here to exit the function early
    }
    const updatedBlog = await blogRepository.updateBlogById(
      id,
      updatedBlogData
    );
    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the blog",
    });
  }
};

export default { postBlog, getBlogs, getBlogById, deleteBlog, updateBlog };
