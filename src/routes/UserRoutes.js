import { Router } from "express";
import {
  search,
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/UserController.js";

const router = Router();
router.get("/", search);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);

export default router;
