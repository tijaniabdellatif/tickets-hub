import {scrypt,randomBytes} from 'crypto';
import {promisify} from 'util';
const scryptAsync = promisify(scrypt);

export class PasswordHash {
  static async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString("hex");
    const buffer: any = await scryptAsync(password, salt, 64);
    return `${buffer.toString("hex")}.${salt}`;
  }

  static async compare(
    storedPassword: string,
    suppliedPassword: string
  ): Promise<boolean> {
    const [hashedPassword, salt] = storedPassword.split(".");
    const buffer: any = await scryptAsync(suppliedPassword, salt, 64);
    return buffer.toString("hex") === hashedPassword;
  }
}
