/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management
 * 
 * /comment/{blogId}:
 *   post:
 *     summary: Create a new comment for a blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to comment on
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *                 description: The comment text
 *               firstname:
 *                 type: string
 *                 description: First name of the commenter
 *               lastname:
 *                 type: string
 *                 description: Last name of the commenter
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the commenter
 *     responses:
 *       '201':
 *         description: Comment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 commentData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The comment ID
 *                     comment:
 *                       type: string
 *                       description: The comment text
 *                     blogId:
 *                       type: string
 *                       description: The ID of the blog the comment belongs to
 *                     createdAt:
 *                       type: string
 *                       description: The date when the comment was created
 *       '400':
 *         description: Bad request. Comment not provided or invalid data.
 *       '500':
 *         description: Internal server error
 * 
 *   get:
 *     summary: Get comments for a blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to get comments for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of comments for the specified blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The comment ID
 *                       comment:
 *                         type: string
 *                         description: The comment text
 *                       blogId:
 *                         type: string
 *                         description: The ID of the blog the comment belongs to
 *                       createdAt:
 *                         type: string
 *                         description: The date when the comment was created
 *       '500':
 *         description: Internal server error
 * 
 * /comment/reviewed/{blogId}:
 *   get:
 *     summary: Get reviewed comments for a blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         description: ID of the blog to get reviewed comments for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of reviewed comments for the specified blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The comment ID
 *                       comment:
 *                         type: string
 *                         description: The comment text
 *                       blogId:
 *                         type: string
 *                         description: The ID of the blog the comment belongs to
 *                       createdAt:
 *                         type: string
 *                         description: The date when the comment was created
 *       '500':
 *         description: Internal server error
 * 
 * /comment/review/{commentId}:
 *   patch:
 *     summary: Review a comment
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: ID of the comment to review
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Comment reviewed successfully
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Internal server error
 */



import express from "express";
import commentsController from "../modules/comments/controller/commentsController";

const commentsRoute = express.Router();

// Post comments
commentsRoute.post("/:blogId", commentsController.postBlogComment);
// Get blog comments
commentsRoute.get("/:blogId", commentsController.getBlogComments);
// Get Reviwed Blog Comments
commentsRoute.get(
  "/reviewed/:blogId",
  commentsController.getReviewedBlogComments
);

// Reviiw the comment
commentsRoute.patch("/review/:commentId", commentsController.reviewComment);

export default commentsRoute;
