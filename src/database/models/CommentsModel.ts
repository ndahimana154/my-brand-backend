import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  comment: {
    type: String,
    required: true,
  },
  blogId: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentModal = mongoose.model("Comments", CommentsSchema);

export default CommentModal;
