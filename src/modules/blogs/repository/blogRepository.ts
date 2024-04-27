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
  return Blog.find().sort({ createdAt: -1 });
};

// Get single blog
const getBlogById = async (id: string) => {
  return Blog.findById(id); // Pass the ID directly as a string
};

export default { postBlog, getBlogs, 
    getBlogById 
};
