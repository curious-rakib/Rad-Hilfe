import axios from 'axios';
import { config } from '../../../config';
const baseUrl = config.SERVER_URL;

export const TechnicianSignUpService = async (signUpData: Object) => {
	try {
		return await axios({
			url: `${baseUrl}/technician/sign-up`,
			method: 'POST',
			withCredentials: true,
			headers: { 'Content-Type': 'application/json' },
			data: signUpData,
		})
			.then((res) => res.data)
			.catch((error) => console.error('Error from Server!', error.message));
	} catch (error) {
		console.error('Error in Sign up service!');
	}
};

export const TechnicianSignInService = async (signInData: Object) => {
	try {
		return await axios({
			url: `${baseUrl}/technician/sign-in`,
			method: 'POST',
			withCredentials: true,
			headers: { 'Content-Type': 'application/json' },
			data: signInData,
		})
			.then((res) => res.data)
			.catch((error) => console.error('Error from Server!', error.message));
	} catch (error) {
		console.error('Error in Sign in service!');
	}
};

export const TechnicianSetUpService = async (setUpData: Object) => {
	try {
		return await axios({
			url: `${baseUrl}/technician/set-up-technician`,
			method: 'POST',
			withCredentials: true,
			headers: { 'Content-Type': 'application/json' },
			data: setUpData,
		})
			.then((res) => res.data)
			.catch((error) => console.error('Error from Server!', error.message));
	} catch (error) {
		console.error('Error in Set up service!');
	}
};
