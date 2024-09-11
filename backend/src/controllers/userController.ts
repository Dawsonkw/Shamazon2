import { Request, Response } from "express";

export const getUserProfile = (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({
    id: req.user.userId,
    username: "John Doe",
    email: "FakeData@example.com",
  });
};

export const updateUserProfile = (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { username, email } = req.body;
  res.json({
    id: req.user.userId,
    username,
    email,
  });
};
