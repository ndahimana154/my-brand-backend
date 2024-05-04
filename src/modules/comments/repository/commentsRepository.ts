import CommentModal from "../../../database/models/CommentsModel";
const postCommentFx = async (commentData: {
  firstname: string;
  lastname: string;
  email: string;
  comment: string;
  blogId: string;
}) => {
  const newCommentSave = new CommentModal(commentData);

  await newCommentSave.save();

  return newCommentSave;
};

const getComments = async (blog: string) => {
  blogId: {
    return CommentModal.find({ blogId: blog });
  }
};
const getRevComments = async (blog: string) => {
  blogId: {
    return CommentModal.find({ blogId: blog, status: "Reviewed" });
  }
};

const reviewComment = async (comment: string) => {
  comment: {
    return CommentModal.findByIdAndUpdate(
      { _id: comment },
      { status: "Reviewed" },
      { new: true }
    );
  }
};
export default {
  postCommentFx,
  getComments,
  getRevComments,
  reviewComment,
};
