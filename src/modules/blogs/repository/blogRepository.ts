// Repository
import Blog from "../../../database/models/BlogsModel";

// Post blog
const postBlog = async (blogData: {
  title: string;
  summary: string;
  cover: string;
  article: string;
}) => {
  // Create a new blog
  const newBlog = new Blog(blogData);

  // Save the blog to the database
  await newBlog.save();

  return newBlog;
};

// Get all blogs
const getBlogs = async () => {
  return Blog.find().sort({ postedAt: -1 });
};

// Get single blog
const getBlogById = async (id: string) => {
  return Blog.findById(id); // Pass the ID directly as a string
};

// Delete blog by ID
const deleteBlogById = async (id: string) => {
  return (await Blog.findOneAndDelete({ _id: id })) ? true : false;
};

// Update blog by ID a
const updateBlogById = async (id: string, updatedData: any): Promise<any> => {
  try {
    // Find the blog document by ID and update it with the new data
    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Run validators to ensure data is updated correctly
    });

    return updatedBlog;
  } catch (error) {
    throw new Error("Error updating blog in the database: ");
  }
};

export default {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
};
