import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const users: any[] = [];

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({ message: "User created successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET! || "your-secret-key",
    { expiresIn: "1h" }
  );

  res.json({ token });
};

export const logout = (req: Request, res: Response) => {
  res.json({ message: "Logout successful" });
};
