import express from "express";

import projectsController from "../modules/projects/controller/projectsController";
import uploadProjetImage from "../middlewares/uploadProjectsImageMiddleware";

const projectsRouter = express.Router();

// Create project route
projectsRouter.post("/",uploadProjetImage.single("image"), projectsController.postProject);
// Get all projects route
projectsRouter.get("/", projectsController.getAllProjects);
// Delete Project
projectsRouter.delete("/:id",projectsController.deleteProject);
// 
export default projectsRouter;
