import express from "express";
import commentsController from "../modules/comments/controller/commentsController";

const commentsRoute = express.Router();

// Post comments
commentsRoute.post("/:blogId", commentsController.postBlogComment);
// Get blog comments 
commentsRoute.get("/:blogId", commentsController.getBlogComments);

export default commentsRoute;
