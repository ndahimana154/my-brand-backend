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
export default {
  postCommentFx,
  getComments,
};
