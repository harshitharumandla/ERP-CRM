import prisma from "../prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  res.json({
    message: "User created successfully",
    user
  });
};


export const getUsers = async (req: any, res: any) => {
  const users = await prisma.user.findMany();

  res.json({
    message: "Users fetched successfully",
    users
  });
};