import express from "express";

import userController from "../modules/users/controller/userController";

const usersRouter = express.Router();

// Post the message
usersRouter.post("/new", userController.register);
usersRouter.post("/login", userController.login);

export default usersRouter;
