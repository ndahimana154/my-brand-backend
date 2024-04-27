import { Router } from "express";
import messagesRouter from "./mesagesRoutes";
import usersRouter from "./usersRoutes";
import blogsRouter from "./blogsRoutes";
import projectsRouter from "./projectsRoutes";

const router = Router();

router.use("/message", messagesRouter);
router.use("/user", usersRouter);
router.use("/blog", blogsRouter);
router.use("/project", projectsRouter);

export default router;
