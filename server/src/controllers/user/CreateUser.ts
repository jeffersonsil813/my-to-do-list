import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class CreateUser {
  async handle(request: Request, response: Response) {
    const { fullname, username, password } = request.body;

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      return response
        .status(400)
        .json({ status: "Error", message: "Username already in use!" });
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        fullname,
        username,
        password: passwordHash,
      },
    });

    return response.status(201).json({ status: "Success", user });
  }
}
