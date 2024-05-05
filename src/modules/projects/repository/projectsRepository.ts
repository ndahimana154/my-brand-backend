import mongoose from "mongoose";
import express from "express";
import projectModal from "../../../database/models/ProjectsModel";

// Function to save the Project
const newProject = async (projectData: {
  title: string;
  description: string;
  image: string;
  startTime: string;
  endTime: string;
  externalLink: string;
}) => {
  const newProject = new projectModal(projectData);
  await newProject.save();
  return newProject;
};

// Function to get all projects
const getProjects = async () => {
  return projectModal.find().sort({ startTime: -1 });
};

// Function to delete projects
const deleteProjectFx = async (id:string) => {
  try {
    const deleteVar = await projectModal.findByIdAndDelete(id);
    if (deleteVar) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(`Error deleting project: ${error}`);
  }
};

export default {
  newProject,
  getProjects,
  deleteProjectFx,
};
