/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Project management
 * 
 * /project:
 *   post:
 *     summary: Create a new project
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Project image
 *               description:
 *                 type: string
 *                 description: Description
 *               title:
 *                 type: string
 *                 description: Project title
 *               startTime:
 *                 type: string
 *                 description: Project name
 *               endTime:
 *                 type: string
 *                 description: Project description
 *               externalLink:
 *                 type: string
 *                 description: Project name
 *              
 *     responses:
 *       '201':
 *         description: Project created successfully
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
 *                 projectData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The project ID
 *                     name:
 *                       type: string
 *                       description: The project name
 *                     description:
 *                       type: string
 *                       description: The project description
 *                     image:
 *                       type: string
 *                       description: The project image URL
 *                     createdAt:
 *                       type: string
 *                       description: The date when the project was created
 *       '400':
 *         description: Bad request. Project image not provided.
 *       '500':
 *         description: Internal server error
 * 
 *   get:
 *     summary: Get all projects
 *     responses:
 *       '200':
 *         description: A list of projects
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
 *                         description: The project ID
 *                       name:
 *                         type: string
 *                         description: The project name
 *                       description:
 *                         type: string
 *                         description: The project description
 *                       image:
 *                         type: string
 *                         description: The project image URL
 *                       createdAt:
 *                         type: string
 *                         description: The date when the project was created
 *       '500':
 *         description: Internal server error
 * 
 * /project/{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the project to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Project deleted successfully
 *       '404':
 *         description: Project not found
 *       '500':
 *         description: Internal server error
 */

import express from "express";

import projectsController from "../modules/projects/controller/projectsController";
import uploadProjetImage from "../middlewares/uploadProjectsImageMiddleware";
import multer from "../middlewares/multerSetup";
const projectsRouter = express.Router();

// Create project route
projectsRouter.post("/",multer.single("file"), projectsController.postProject);
// Get all projects route
projectsRouter.get("/", projectsController.getAllProjects);
// Delete Project
projectsRouter.delete("/:id",projectsController.deleteProject);
// 
export default projectsRouter;
