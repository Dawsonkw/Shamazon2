import { Request, Response } from "express";

export const getUserProfile = (req: Request, res: Response) => {
  res.json({
    id: req.user.id,
    username: "John Doe",
    email: "FakeData@example.com",
  });
};

export const updateUserProfile = (req: Request, res: Response) => {
  const { username, email } = req.body;

  res.json({
    id: req.user.id,
    username,
    email,
  });
};
