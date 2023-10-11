import * as bcrypt from 'bcrypt';

export const generateHash = async (password: string | Buffer) => {
  const salt = 10;
  return await bcrypt.hash(password, salt);
};

export const compareHash = async (password: string | Buffer, hash: string) => {
  return await bcrypt.compare(password, hash);
};
