import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { SessionData } from '../../interfaces/session.interface';
import { OTP } from '../../interfaces/account.interface';

import { createUser, findUserByEmail, updateUserPassword } from '../../models/account/user.query';
import { getSession, createSession, destroySession } from '../../middlewares/sessionManagement';
import { sendOTP } from './mailer.controller';

let storedOTP: OTP | null = null;

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber, address, role } = req.body;

    if (await findUserByEmail(email)) {
      return res.status(401).send('Email already exists!');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
    });

    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send('Failed to sign up user');
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      res.status(400).send('There is no user with that email!');
      return;
    }

    const isCredentialsOk = await bcrypt.compare(password, user.password);

    if (!isCredentialsOk) {
      res.status(401).send('Invalid password!');
      return;
    }

    const token = createSession(email);
    res.cookie('accessToken', token, {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
    });

    res.status(200).send({ accessToken: token });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      res.status(400).send('There is no user with that email!');
      return;
    }

    const otp = Math.floor(Math.random() * 10000).toString();
    storedOTP = { email, otp };

    const { name } = user;

    await sendOTP(name, email, otp);

    res.status(200).send('OTP has been sent to your email!');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, newPassword, otp } = req.body;

    if (!storedOTP || storedOTP.email !== email || storedOTP.otp !== otp) {
      res.status(400).send('Invalid OTP or email!');
      return;
    }

    const user = await findUserByEmail(email);

    if (!user) {
      res.status(400).send('There is no user with that email!');
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await updateUserPassword(email, hashedPassword);
    storedOTP = null;

    res.status(200).send('Password has been reset successfully!');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const profile = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);

    if (session) {
      const profile = await findUserByEmail(session.userEmail);
      res.status(200).send(profile);
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const signOut = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;
    if (!destroySession(token)) {
      res.status(400).send('No session to logout.');
      return;
    }

    res.status(200).send('successfully logged out!');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export { signUp, signIn, forgotPassword, resetPassword, profile, signOut };
