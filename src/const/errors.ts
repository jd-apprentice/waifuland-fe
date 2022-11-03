import { ErrorCodes } from "../models/types";

/**
 * @description Error codes for Login
 */

export const LOGIN_ERRORS: Record<string, ErrorCodes> = {
  "Invalid credentials": {
    code: 400,
    message: "Username or password is incorrect, please try again.",
  },
};

/**
 * @description Error codes for Server
 */

export const API_ERRORS: Record<string, ErrorCodes> = {
  timeout: {
    code: 400,
    message: "Request timed out, please try again.",
  },
};
