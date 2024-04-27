import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  article: { 
    type: String,
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
});


const Blog = mongoose.model("Blog",blogSchema)

export default Blog