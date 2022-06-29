import { Router } from "express";
import { CreateUser } from "./controllers/user/CreateUser";

const router = Router();

const createUserController = new CreateUser();

router.post("/users", createUserController.handle);

export { router };
