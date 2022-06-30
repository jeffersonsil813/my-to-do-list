import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateTask {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { title, description, status } = request.body;

    try {
      const task = await prismaClient.task.create({
        data: {
          title,
          description,
          status,
          userId,
        },
      });

      return response.status(201).json({ task });
    } catch (err) {
      return response.status(400).json({ message: "Could not create task!" });
    }
  }
}
