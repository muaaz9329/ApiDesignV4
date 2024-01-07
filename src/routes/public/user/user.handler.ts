import prisma from "../../../db";
import { HandlerFunction } from "../../../types/function";
import { createJWT } from "../../../utils/auth-jwt";
import { comparePassword, hashPassword } from "../../../utils/auth-password";

const createNewUserHandler: HandlerFunction<{
  userName: string;
  password: string;
}> = async (req, res) => {
  const { userName, password } = req.body;
  console.log({
    userName,
    password,
  });
  try {
    const hashedPass = await hashPassword(password);
    console.log("hashedPass ", hashedPass);
    const user = await prisma.user.create({
      data: {
        userName,
        password: hashedPass,
      },
    });

    const JwtToken = await createJWT({
      userName: user.userName,
      id: user.id,
    });
    res.status(200).json({ message: "user created", token: JwtToken });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const signInUserHandler: HandlerFunction<{
  userName: string;
  password: string;
}> = async (req, res) => {
  const { userName, password } = req.body;

  //* find user by userName
  const userByName = await prisma.user.findUnique({
    where: {
      userName,
    },
  });
  if (!userByName) {
    res.status(404).json({ message: "user not found" });
  }

  //*comparing password
  const match = await comparePassword(password, userByName.password);
  if (!match) {
    res.status(401).json({ message: "password or username is invalid" });
  }

  //*creating token
  try {
    const JwtToken = await createJWT({
      userName: userByName.userName,
      id: userByName.id,
    });
    res.status(200).json({ message: "Success", token: JwtToken });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export { createNewUserHandler, signInUserHandler };
