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
