import axios from 'axios';
import { config } from '../../../config';
const baseUrl = config.SERVER_URL;

export const TechnicianGetAllCasesService = async () => {
	try {
		return await axios({
			url: `${baseUrl}/technician/get-all-cases`,
			method: 'GET',
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.data)
			.catch((error) => console.error(error.message));
	} catch (error) {
		console.error('Error in service !');
	}
};
