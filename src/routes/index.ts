import { Router } from "express";
import messagesRouter from "./mesagesRoutes";
import usersRouter from "./usersRoutes";
import blogsRouter from "./blogsRoutes";

const router = Router();

router.use("/message", messagesRouter);
router.use("/user", usersRouter);
router.use("/blog", blogsRouter);

export default router;
