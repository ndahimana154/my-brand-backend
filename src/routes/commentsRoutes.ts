import express from "express";
import commentsController from "../modules/comments/controller/commentsController";

const commentsRoute = express.Router();

// Post comments
commentsRoute.post("/:blogId", commentsController.postBlogComment);

export default commentsRoute;
