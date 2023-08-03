import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { SessionData } from '../../interfaces/session.interface';
import { OTP } from '../../interfaces/account.interface';

import { getSession, createSession, destroySession } from '../../middlewares/sessionManagement';
import { sendOTP } from './mailer.controller';
import { addCyclistAddress, addCyclistPlan, createCyclist, findCyclistByEmail, updateCyclistPassword } from '../../models/cyclist/cyclist.query';
import { getWeatherData } from '../../apis/weather.apis';

let storedOTP: OTP | null = null;

const signUp = async (req: Request, res: Response) => {
	try {
		const { name, email, password, phone, role = 'cyclist', plan = 'basic', homeAddress = '', workAddress = '' } = req.body;

		if (await findCyclistByEmail(email)) {
			return res.status(401).send('Email already exists!');
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newCyclist = await createCyclist({
			name,
			email,
			password: hashedPassword,
			phone,
			role,
			plan,
			homeAddress,
			workAddress,
		});

		res.status(200).send(newCyclist);
	} catch (error) {
		res.status(500).send('Failed to sign up Cyclist');
	}
};

const signIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const cyclist = await findCyclistByEmail(email);

		if (!cyclist) {
			res.status(400).send('There is no Cyclist with that email!');
			return;
		}

		const isCredentialsOk = await bcrypt.compare(password, cyclist.password);

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

		const cyclist = await findCyclistByEmail(email);

		if (!cyclist) {
			res.status(400).send('There is no Cyclist with that email!');
			return;
		}

		const otp = Math.floor(Math.random() * 10000).toString();
		storedOTP = { email, otp };

		const { name } = cyclist;

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

		const cyclist = await findCyclistByEmail(email);

		if (!cyclist) {
			res.status(400).send('There is no Cyclist with that email!');
			return;
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

		await updateCyclistPassword(email, hashedPassword);
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
			const cyclist = await findCyclistByEmail(session.userEmail);
			res.status(200).send(cyclist);
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

const setUpAddress = async (req: Request, res: Response) => {
	try {
		const { homeAddress, workAddress } = req.body;

		const token = req.cookies.accessToken;
		const session: SessionData | undefined = getSession(token);

		if (session) {
			await addCyclistAddress(session.userEmail, homeAddress, workAddress);

			res.status(200).send('Home address and work address added');
			return;
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('Server Error!');
	}
};

const setUpAddressEdit = async (req: Request, res: Response) => {
	try {
		const { homeAddress, workAddress } = req.body;

		const token = req.cookies.accessToken;
		const session: SessionData | undefined = getSession(token);

		if (session) {
			await addCyclistAddress(session.userEmail, homeAddress, workAddress);

			res.status(200).send('Home address and work address added');
			return;
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('Server Error!');
	}
};

const weatherData = async (req: Request, res: Response) => {
	try {
		const { longitude, latitude } = req.params;

		const weatherData = await getWeatherData(Number(longitude), Number(latitude));

		res.status(200).send(weatherData);
	} catch (error) {
		console.log(error);
		res.status(500).send('Server Error!');
	}
};

const cyclistName = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		const session: SessionData | undefined = getSession(token);

		if (session) {
			const cyclist = await findCyclistByEmail(session.userEmail);
			res.status(200).send(cyclist && cyclist.name);
			return;
		}
	} catch (error) {
		console.log(error);
	}
};

const selectPlan = async (req: Request, res: Response) => {
	try {
		const { plan } = req.body;

		const token = req.cookies.accessToken;
		const session: SessionData | undefined = getSession(token);

		if (session) {
			await addCyclistPlan(session.userEmail, plan);

			res.status(200).send();
			return;
		}
	} catch (error) {
		console.log(error);
	}
};

export { signUp, signIn, forgotPassword, resetPassword, profile, signOut, setUpAddress, setUpAddressEdit, weatherData, cyclistName, selectPlan };
