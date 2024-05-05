/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Message management
 *
 * /message:
 *   post:
 *     summary: Post a message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: The message content
 *     responses:
 *       '201':
 *         description: Message posted successfully
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
 *                 messageData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The message ID
 *                     message:
 *                       type: string
 *                       description: The message content
 *                     createdAt:
 *                       type: string
 *                       description: The date when the message was created
 *       '400':
 *         description: Bad request. Message not provided.
 *       '500':
 *         description: Internal server error
 *
 *   get:
 *     summary: Get all brand messages
 *     responses:
 *       '200':
 *         description: A list of brand messages
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
 *                         description: The message ID
 *                       message:
 *                         type: string
 *                         description: The message content
 *                       createdAt:
 *                         type: string
 *                         description: The date when the message was created
 *       '500':
 *         description: Internal server error
 *
 * /message/{id}:
 *   delete:
 *     summary: Delete a brand message by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Message deleted successfully
 *       '404':
 *         description: Message not found
 *       '500':
 *         description: Internal server error
 */

import express from "express";
import messageController from "../modules/messages/controller/messageController";

const messagesRouter = express.Router();

// Post the message
messagesRouter.post("/", messageController.postMessage);
// Get brand messages
messagesRouter.get("/", messageController.getBrandMessages);
messagesRouter.delete("/:id", messageController.deleteBrandMessage);

export default messagesRouter;
