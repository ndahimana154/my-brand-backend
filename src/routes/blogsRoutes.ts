/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management
 * 
 * securityDefinitions:
 *   jwt_auth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * 
 * /blog/:
 *   post:
 *     summary: Create a new blog
 *     security:
 *       - jwt_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Cover image for the blog
 *                 in: formData
 *               title:
 *                 type: string
 *                 description: Blog title
 *                 in: formData
 *               summary:
 *                 type: string
 *                 description: Blog summary
 *                 in: formData
 *               article:
 *                 type: string
 *                 description: Blog article
 *                 in: formData
 *     responses:
 *       '201':
 *         description: Blog created successfully
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
 *                 blogData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The blog ID
 *                     title:
 *                       type: string
 *                       description: The blog title
 *                     summary:
 *                       type: string
 *                       description: The blog summary
 *                     cover:
 *                       type: string
 *                       description: The blog cover image URL
 *                     article:
 *                       type: string
 *                       description: The blog article
 *                     postedAt:
 *                       type: string
 *                       description: The date when the blog was posted
 *       '400':
 *         description: Bad request. Image not provided.
 *       '500':
 *         description: Internal server error
 * 
 *   get:
 *     summary: Get all blogs
 *     responses:
 *       '200':
 *         description: A list of blogs
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
 *                         description: The blog ID
 *                       title:
 *                         type: string
 *                         description: The blog title
 *                       summary:
 *                         type: string
 *                         description: The blog summary
 *                       cover:
 *                         type: string
 *                         description: The blog cover image URL
 *                       article:
 *                         type: string
 *                         description: The blog article
 *                       postedAt:
 *                         type: string
 *                         description: The date when the blog was posted
 *       '500':
 *         description: Internal server error
 * 
 * /blog/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to get
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single blog object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The blog ID
 *                     title:
 *                       type: string
 *                       description: The blog title
 *                     summary:
 *                       type: string
 *                       description: The blog summary
 *                     file:
 *                       type: string
 *                       description: The blog cover image URL
 *                     article:
 *                       type: string
 *                       description: The blog article
 *                     postedAt:
 *                       type: string
 *                       description: The date when the blog was posted
 *       '404':
 *         description: Blog not found
 *       '500':
 *         description: Internal server error
 *   
 *   delete:
 *     summary: Delete a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Blog deleted successfully
 *       '404':
 *         description: Blog not found
 *       '500':
 *         description: Internal server error
 * 
 *   patch:
 *     summary: Update a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to update
 *         schema:
 *           type: string
 *     security:
 *       - jwt_auth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Cover image for the blog
 *                 in: formData
 *               title:
 *                 type: string
 *                 description: Blog title
 *                 in: formData
 *               summary:
 *                 type: string
 *                 description: Blog summary
 *                 in: formData
 *               article:
 *                 type: string
 *                 description: Blog article
 *                 in: formData
 *     responses:
 *       '200':
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The blog ID
 *                     title:
 *                       type: string
 *                       description: The blog title
 *                     summary:
 *                       type: string
 *                       description: The blog summary
 *                     cover:
 *                       type: string
 *                       description: The blog cover image URL
 *                     article:
 *                       type: string
 *                       description: The blog article
 *                     postedAt:
 *                       type: string
 *                       description: The date when the blog was posted
 *       '404':
 *         description: Blog not found
 *       '500':
 *         description: Internal server error
 */

import express from "express";
import uploadBlog from "../middlewares/uploadBlog"
import blogsController from "../modules/blogs/controller/blogController";
import uploadImages from "../middlewares/uploadBlog";
import multer from "../middlewares/multerSetup";
import verifyToken from "../middlewares/verifyToken";
const blogsRouter = express.Router();  

// Post blog
blogsRouter.post("/",verifyToken, multer.single('file'), blogsController.postBlog);
// Get blogs

blogsRouter.get("/", blogsController.getBlogs);
// Get a single blog
blogsRouter.get("/:id", blogsController.getBlogById);

// Delete blog
blogsRouter.delete("/:id",blogsController.deleteBlog);
// Delete blog
blogsRouter.patch("/:id",blogsController.deleteBlog);

export default blogsRouter;
