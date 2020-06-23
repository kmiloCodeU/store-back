import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private envConfig: { [key: string]: string };

  constructor() {
    this.init();
  }

  init() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
    if (!isDevelopmentEnv) {
      this.envConfig = {
        PORT: process.env.PORT,
      };
      return;
    }
    const envFilePath = __dirname + '/../../.env';
    const existsPath = fs.existsSync(envFilePath);
    if (!existsPath) {
      process.exit(0);
    }
    this.envConfig = parse(fs.readFileSync(envFilePath));
  }

  get(key: string) {
    return this.envConfig[key];
  }
}
