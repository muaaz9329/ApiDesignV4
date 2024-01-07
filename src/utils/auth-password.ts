import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPass = await bcrypt.hash(
    password,
    Number(process.env.BCRYPT_SALT)
  );
  return hashedPass;
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const match = await bcrypt.compare(password, hash);

  if (match) {
    return match;
  } else {
    throw new Error("Password not matched");
  }
};
