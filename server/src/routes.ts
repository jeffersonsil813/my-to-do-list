import { Router } from "express";
import { CreateTask } from "./controllers/task/CreateTask";
import { GetTasksByUserId } from "./controllers/task/GetTasksByUserId";
import { UpdateTask } from "./controllers/task/UpdateTask";
import { Authenticate } from "./controllers/user/Authenticate";
import { CreateUser } from "./controllers/user/CreateUser";
import { RefreshToken } from "./controllers/user/RefreshToken";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUser();
const createTaskController = new CreateTask();
const authenticateController = new Authenticate();
const refreshTokenController = new RefreshToken();

const getTasksByUserIdController = new GetTasksByUserId();

const updateTaskController = new UpdateTask();

router.post("/users", createUserController.handle);
router.post("/tasks/:userId", ensureAuthenticated, createTaskController.handle);
router.post("/login", authenticateController.handle);
router.post("/refresh-token", refreshTokenController.handle);

router.get(
  "/tasks/:userId",
  ensureAuthenticated,
  getTasksByUserIdController.handle
);

router.put(
  "/tasks/:taskId/user/:userId",
  ensureAuthenticated,
  updateTaskController.handle
);

export { router };
