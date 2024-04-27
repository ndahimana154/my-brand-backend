import express from "express";
import messageController from "../modules/messages/controller/messageController";

const messagesRouter = express.Router();

// Post the message
messagesRouter.post("/", messageController.postMessage);

export default messagesRouter;
