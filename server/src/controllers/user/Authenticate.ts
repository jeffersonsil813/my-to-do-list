import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { GenerateRefreshToken } from "../../provider/generateRefreshToken";
import { GenerateToken } from "../../provider/generateToken";

export class Authenticate {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    if (!userAlreadyExists) {
      return response
        .status(404)
        .json({ message: "User or password incorrect!" });
    }

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      return response
        .status(404)
        .json({ message: "User or password incorrect!" });
    }

    const generateTokenProvider = new GenerateToken();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    await prismaClient.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExists.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExists.id
    );

    return response.status(200).json({ token, refreshToken });
  }
}
