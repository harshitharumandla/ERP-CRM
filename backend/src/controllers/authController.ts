import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {

  const { email, password } = req.body;

  console.log("LOGIN DATA:", email, password);

  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({
      success: true,
      token: "admin-token",
      message: "Login successful"
    });
  }

  return res.json({
    success: false,
    message: "Invalid email or password"
  });
};