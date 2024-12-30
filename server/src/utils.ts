import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashStr(str: string): Promise<string> {
  return await bcrypt.hash(str, saltOrRounds);
}

export async function hashCompare(str: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(str, hash);
}
