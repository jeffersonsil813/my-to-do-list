import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateTask {
  async handle(request: Request, response: Response) {
    const { userId, taskId } = request.params;
    const { title, description, status } = request.body;

    try {
      const task = await prismaClient.task.findFirst({
        where: {
          id: taskId,
          userId,
        },
      });

      if (!task) {
        return response.status(404).json({ message: "Could not update task!" });
      }

      const taskUpdated = await prismaClient.task.update({
        where: {
          id: task.id,
        },
        data: {
          title,
          description,
          status,
        },
      });

      return response.status(200).json({ task: taskUpdated });
    } catch (err) {
      return response.status(400).json({ message: "Could not update task!" });
    }
  }
}
