// Repository
import Blog from "../../../database/models/BlogsModel";

// Post blog
const postBlog = async(body:any) => {
  return await Blog.create(body);
};

// Get all blogs
const getBlogs = async () => {
  return await Blog.find();
};

// Get single blog
const getBlogById = async (id: string) => {
  return await Blog.findById(id); // Pass the ID directly as a string
};

// Delete blog by ID
const deleteBlogById = async (id: string) => {
  return (await Blog.findOneAndDelete({ _id: id })) ? true : false;
};

// Update blog by ID a
const updateBlogById = async (id: string, updatedData: any)=> {
 return await Blog.findOneAndUpdate({ _id: id}, updatedData,{new:true});
};

export default {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
};
