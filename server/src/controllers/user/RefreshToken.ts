import dayjs from "dayjs";
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { GenerateRefreshToken } from "../../provider/generateRefreshToken";
import { GenerateToken } from "../../provider/generateToken";

export class RefreshToken {
  async handle(request: Request, response: Response) {
    const { refresh_token } = request.body;

    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      return response.status(404).json({ message: "Refresh token invalid!" });
    }

    const sessionExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(refreshToken.userId);

    if (sessionExpired) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId,
        },
      });

      return response.status(401).json({ message: "Session expired!" });
    }

    await prismaClient.refreshToken.deleteMany({
      where: {
        userId: refreshToken.userId,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const newRefreshToken = await generateRefreshToken.execute(
      refreshToken.userId
    );

    return response.status(200).json({
      token,
      refreshToken: {
        id: newRefreshToken.id,
      },
    });
  }
}
