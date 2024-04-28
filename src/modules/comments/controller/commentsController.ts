import express, { Request, Response } from "express";
import commentsRepository from "../repository/commentsRepository";

const postBlogComment = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, comment } = req.body;
    const { blogId } = req.params;
    const newComment = await commentsRepository.postCommentFx({
      firstname,
      lastname,
      email,
      comment,
      blogId,
    });
    res
      .status(201)
      .json({ success: true, message: "Sending Comment succed", newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occured while sending Comment",
    });
  }
};

const getBlogComments = async (req: Request, res: Response) => {
  const { blogId } = req.params;
  try {
    const blogComments = await commentsRepository.getComments(blogId);
    res
      .status(200)
      .json({ success: true, message: "Comments fetched", blogComments });
  } catch (error) {
    console.error("Error fetching comments", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching comments" });
  }
};
export default {
  postBlogComment,
  getBlogComments,
};
