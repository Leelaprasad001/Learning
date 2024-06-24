import catchErrors from "../utils/catchErrors";
import { CREATED, OK, UNAUTHORIZED } from "../constants/http";

import {
    emailSchema,
    loginSchema,
    registerSchema,
    resetPasswordSchema,
    verificationCodeSchema,
} from "./auth.schemas";
import {
    createAccount,
    // loginUser,
    // refreshUserAccessToken,
    // resetPassword,
    // sendPasswordResetEmail,
    // verifyEmail,
} from "../services/auth.service";
import {
  clearAuthCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthCookies,
} from "../utils/cookies";

export const registerHandler = catchErrors(async (req, res) => {
    const request = registerSchema.parse({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });
    const { user, accessToken, refreshToken } = await createAccount(request);
    return setAuthCookies({ res, accessToken, refreshToken })
      .status(CREATED)
      .json(user);
});
  