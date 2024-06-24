import UserModel from "../models/user.model";
import { APP_ORIGIN } from "../constants/env";
import {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
  UNPROCESSABLE_CONTENT,
} from "../constants/http";
import {
    ONE_DAY_MS,
    fiveMinutesAgo,
    oneHourFromNow,
    oneYearFromNow,
    thirtyDaysFromNow,
} from "../utils/date";
  import {
    RefreshTokenPayload,
    refreshTokenSignOptions,
    signToken,
    verifyToken,
} from "../utils/jwt";
import appAssert from "../utils/appAssert";
import VerificationCodeModel from "../models/verificationCode.model";
import VerificationCodeType from "../constants/verificationCodeType";
import SessionModel, { SessionDocument } from "../models/session.model";

type CreateAccountParams = {
    email: string;
    password: string;
    userAgent?: string;
};

export const createAccount = async (data: CreateAccountParams) => {
    // verify email is not taken
    const existingUser = await UserModel.exists({
      email: data.email,
    });
    appAssert(!existingUser, CONFLICT, "Email already in use");
  
    //create user
    const user = await UserModel.create({
      email: data.email,
      password: data.password,
    });

    //create an verification code
    const userId = user._id;
    const verificationCode = await VerificationCodeModel.create({
      userId,
      type: VerificationCodeType.EmailVerification,
      expiresAt: oneYearFromNow(),
    });
    const url = `${APP_ORIGIN}/email/verify/${verificationCode._id}`;
  
    // send verification email
    // const { error } = await sendMail({
    //   to: user.email,
    //   ...getVerifyEmailTemplate(url),
    // });
    // // ignore email errors for now
    // if (error) console.error(error);
  
    // create session
    const session = await SessionModel.create({
      userId,
      userAgent: data.userAgent,
    });
  
    // create a sign access token & refrsh token
    const refreshToken = signToken(
      {
        sessionId: session._id,
      },
      refreshTokenSignOptions
    );
    const accessToken = signToken({
      userId,
      sessionId: session._id,
    });


    return {
      user: user.omitPassword(),
      accessToken,
      refreshToken,
    };
  };
  
  type LoginParams = {
    email: string;
    password: string;
    userAgent?: string;
  };