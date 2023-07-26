import { Request, Response } from "express";
import {
  addTaskController,
  completeTaskController,
  getTaskController
} from "../controllers/taskhandle";
import { airDrop } from "../smartContract/taskToken/taskToken";

const { Router } = require("express");

const router = Router();
router.get("/get-task", getTaskController);
router.post("/add-task", addTaskController);
router.get("/complete-task", completeTaskController);
router.post("/airdrop", airDrop);
router.get("/checking", (req: Request, res: Response) =>
  res.json("server running")
);

export default router;
