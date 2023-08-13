import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../../../../config';

const baseUrl = config.SERVER_URL;
interface TechnicianSignInData {
	email: string;
	password: string;
}

export const technicianApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		postTechnician: builder.mutation<TechnicianSignInData, void>({
			query: (technicianSignInData) => ({
				url: '/signin',
				method: 'POST',
				body: technicianSignInData,
			}),
		}),
	}),
});
