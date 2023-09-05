import { Secret } from "jsonwebtoken";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      NODE_ENV: "test" | "development" | "product";
      JWT_SECRET: jwt.Secret;
      JWT_EXPIRE: any;
      JWT_COOKIE_EXPIRE: number;
    }
  }
}
