import express from "express";
import messageController from "../modules/messages/controller/messageController";

const messagesRouter = express.Router();

// Post the message
messagesRouter.post("/", messageController.postMessage);
// Get brand messages
messagesRouter.get("/", messageController.getBrandMessages);
messagesRouter.delete("/:id", messageController.deleteBrandMessage);

export default messagesRouter;
