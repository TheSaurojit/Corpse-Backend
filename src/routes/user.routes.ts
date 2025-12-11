import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { validate } from "../middlewares/validate";
import { CreateUserSchema, UpdateUserSchema } from "../dto/UserDTO";

const router = Router();

router.post("/", validate(CreateUserSchema), UserController.create);
router.get("/", UserController.all);
router.get("/:id", UserController.single);
router.put("/:id", validate(UpdateUserSchema), UserController.update);

export default router;
