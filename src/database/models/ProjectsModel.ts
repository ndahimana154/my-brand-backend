import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: false,
  },
  externalLink: {
    type: String,
    required: true,
  },
});

const projectModal = mongoose.model("Projects", projectsSchema);

export default projectModal;
