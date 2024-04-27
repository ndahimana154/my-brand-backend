import exress, { Request, Response } from "express";
import projectsRepository from "../repository/projectsRepository";

// Post project
const postProject = async (req: Request, res: Response) => {
  try {
    const { title, description, startTime, endTime, externalLink } = req.body;
    const image = (req as any).file.filename;
    const newProject = await projectsRepository.newProject({
      title,
      description,
      image,
      startTime,
      endTime,
      externalLink,
    });

    res.status(201).json({
      success: true,
      message: "Project is saved successfully.",
      newProject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `An error occured, ${error}`,
    });
  }
};

// Get all projects
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectsRepository.getProjects();
    if (projects.length < 1) {
      return res
        .status(404)
        .json({ success: false, message: "No projects found" });
    }
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `An error occured, ${error}`,
    });
  }
};

// Delete project
const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const isDeleted = await projectsRepository.deleteProjectFx(id);
    if (!isDeleted) {
      throw new Error("Can't delete task");
    } else {
      res.status(200).json({
        success: true,
        message: `Task deleted successfully.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `An error occured, ${error}`,
    });
  }
};

export default {
  postProject,
  getAllProjects,
  deleteProject,
};
