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

  export const loginUser = async ({
    email,
    password,
    userAgent,
  }: LoginParams) => {

    //get the uset by email
    const user = await UserModel.findOne({ email });
    appAssert(user, UNAUTHORIZED, "Invalid email or password");
  
    //validate password
    const isValid = await user.comparePassword(password);
    appAssert(isValid, UNAUTHORIZED, "Invalid email or password");
  
    //create a session
    const userId = user._id;
    const session = await SessionModel.create({
      userId,
      userAgent,
    });
  
    const sessionInfo: RefreshTokenPayload = {
      sessionId: session._id,
    };
  
    //create a sign access token & refresh token
    const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
    const accessToken = signToken({
      ...sessionInfo,
      userId,
    });
    return {
      user: user.omitPassword(),
      accessToken,
      refreshToken,
    };
  };
  
  export const refreshUserAccessToken = async (refreshToken: string) => {
    const { payload } = verifyToken<RefreshTokenPayload>(refreshToken, {
      secret: refreshTokenSignOptions.secret,
    });
    appAssert(payload, UNAUTHORIZED, "Invalid refresh token");
  
    const session = await SessionModel.findById(payload.sessionId);
    const now = Date.now();
    appAssert(
      session && session.expiresAt.getTime() > now,
      UNAUTHORIZED,
      "Session expired"
    );
  
    // refresh the session if it expires in the next 24hrs
    const sessionNeedsRefresh = session.expiresAt.getTime() - now <= ONE_DAY_MS;
    if (sessionNeedsRefresh) {
      session.expiresAt = thirtyDaysFromNow();
      await session.save();
    }
  
    const newRefreshToken = sessionNeedsRefresh
      ? signToken(
          {
            sessionId: session._id,
          },
          refreshTokenSignOptions
        )
      : undefined;
  
    const accessToken = signToken({
      userId: session.userId,
      sessionId: session._id,
    });
  
    return {
      accessToken,
      newRefreshToken,
    };
  };