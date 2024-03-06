/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_LOGIN_URL: string;
    REACT_APP_FOODS_URL: string;
  }
}
