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
import {
  getPasswordResetTemplate,
  getVerifyEmailTemplate,
} from "../utils/emailTemplates";
import appAssert from "../utils/appAssert";
import VerificationCodeModel from "../models/verificationCode.model";
import VerificationCodeType from "../constants/verificationCodeType";
import SessionModel, { SessionDocument } from "../models/session.model";
import { sendMail } from "../utils/sendMail";
import { hashValue } from "../utils/bcrypt";

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
  
    // send verification email
    const url = `${APP_ORIGIN}/email/verify/${verificationCode._id}`;
    const { error } = await sendMail({
      to: user.email,
      ...getVerifyEmailTemplate(url),
    });
    // ignore email errors for now
    if (error) console.error(error);
  
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

  export const verifyEmail = async (code: string) => {

    //get the verification code
    const validCode = await VerificationCodeModel.findOne({
      _id: code,
      type: VerificationCodeType.EmailVerification,
      expiresAt: { $gt: new Date() },
    });
    appAssert(validCode, NOT_FOUND, "Invalid or expired verification code");
  
    //update the user as verified
    const updatedUser = await UserModel.findByIdAndUpdate(
      validCode.userId,
      {
        verified: true,
      },
      { new: true }
    );
    appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to verify email");
  
    //delete verification code
    await validCode.deleteOne();
  
    return {
      user: updatedUser.omitPassword(),
    };
  };


  export const sendPasswordResetEmail = async (email: string) => {
    // Catch any errors that were thrown and log them (but always return a success)
    // This will prevent leaking sensitive data back to the client (e.g. user not found, email not sent).
    try {
      //get the user by email
      const user = await UserModel.findOne({ email });
      appAssert(user, NOT_FOUND, "User not found");
  
      // check for max password reset requests (2 emails in 5min)
      const fiveMinAgo = fiveMinutesAgo();
      const count = await VerificationCodeModel.countDocuments({
        userId: user._id,
        type: VerificationCodeType.PasswordReset,
        createdAt: { $gt: fiveMinAgo },
      });
      appAssert(
        count <= 1,
        TOO_MANY_REQUESTS,
        "Too many requests, please try again later"
      );
  
      const expiresAt = oneHourFromNow();
      const verificationCode = await VerificationCodeModel.create({
        userId: user._id,
        type: VerificationCodeType.PasswordReset,
        expiresAt,
      });
  
      const url = `${APP_ORIGIN}/password/reset?code=${
        verificationCode._id
      }&exp=${expiresAt.getTime()}`;
  
      const { data, error } = await sendMail({
        to: email,
        ...getPasswordResetTemplate(url),
      });
  
      appAssert(
        data?.id,
        INTERNAL_SERVER_ERROR,
        `${error?.name} - ${error?.message}`
      );
      return {
        url,
        emailId: data.id,
      };
    } catch (error: any) {
      console.log("SendPasswordResetError:", error.message);
      return {};
    }
  };
  
  type ResetPasswordParams = {
    password: string;
    verificationCode: string;
  };
  
  export const resetPassword = async ({
    verificationCode,
    password,
  }: ResetPasswordParams) => {
    //get the verification code
    const validCode = await VerificationCodeModel.findOne({
      _id: verificationCode,
      type: VerificationCodeType.PasswordReset,
      expiresAt: { $gt: new Date() },
    });
    appAssert(validCode, NOT_FOUND, "Invalid or expired verification code");
  
    //update password 
    const updatedUser = await UserModel.findByIdAndUpdate(validCode.userId, {
      password: await hashValue(password),
    });
    appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to reset password");
  
    //delete verification code
    await validCode.deleteOne();
  
    // delete all sessions
    await SessionModel.deleteMany({ userId: validCode.userId });
  
    return { user: updatedUser.omitPassword() };
  };

  // re_NBjnaBm9_LxKS18ZCpEiJ4hLXrrNLt5gm
  