import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetTasksByUserId {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const tasks = await prismaClient.task.findMany({
        where: {
          userId,
        },
      });

      return response.status(200).json({ tasks });
    } catch (err) {
      return response.status(400).json({ message: "Could not get tasks!" });
    }
  }
}
