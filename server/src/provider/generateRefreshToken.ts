import dayjs from "dayjs";
import { prismaClient } from "../database/prismaClient";

export class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(5, "minute").unix();

    const generateRefreshToken = await prismaClient.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
