/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 * 
 * /user/new:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user
 *     responses:
 *       '201':
 *         description: User registered successfully
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
 *                 userData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The username of the user
 *                     createdAt:
 *                       type: string
 *                       description: The date when the user was registered
 *       '400':
 *         description: Bad request. Username or password not provided.
 *       '500':
 *         description: Internal server error
 * 
 * /user/login:
 *   post:
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user
 *     responses:
 *       '200':
 *         description: User logged in successfully
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
 *                 userData:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID
 *                     username:
 *                       type: string
 *                       description: The username of the user
 *                     token:
 *                       type: string
 *                       description: The authentication token for the user
 *       '400':
 *         description: Bad request. Username or password not provided.
 *       '401':
 *         description: Unauthorized. Invalid username or password.
 *       '500':
 *         description: Internal server error
 */


import express from "express";

import userController from "../modules/users/controller/userController";

const usersRouter = express.Router();

// Post the message
usersRouter.post("/new", userController.register);
usersRouter.post("/login", userController.login);

export default usersRouter;
