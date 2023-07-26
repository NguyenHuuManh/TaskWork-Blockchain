import { NextFunction, Request, Response } from "express";
import { addTask, completeTask, getTask } from "../smartContract/taskToken/taskToken";

export async function getTaskController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { privateKey } = req.query;
    console.log(req, "====privateKey===");
    const response = await getTask(privateKey as string);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

export async function addTaskController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { privateKey, taskName } = req.body;
    console.log(privateKey, "====body===");
    const response = await addTask(privateKey,taskName);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

export async function completeTaskController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { privateKey, taskId } = req.body;
    console.log(privateKey,taskId, "====body===");
    const response = await completeTask(privateKey,taskId);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

