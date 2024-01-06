import * as bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  let hashedPass;
  bcrypt.hash(password, Number(process.env.BCRYPT_SALT), (err, hash) => {
    if (err) {
      throw new Error(err.message);
    } else {
      hashedPass = hash;
    }
  });

  if (hashedPass) {
    return hashedPass;
  } else {
    throw new Error("Password not hashed");
  }
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  let match;
  bcrypt.compare(password, hash, (err, result) => {
    if (err) {
      throw new Error(err.message);
    } else {
      match = result;
    }
  });

  if (match) {
    return match;
  } else {
    throw new Error("Password not matched");
  }
};
