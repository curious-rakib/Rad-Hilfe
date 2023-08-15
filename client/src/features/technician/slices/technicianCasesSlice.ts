import { createSlice } from '@reduxjs/toolkit';
import { Case } from '../../../pages/Technician/Dashboard/Agenda';

const initialState: Case[] = [
	{
		_id: '',
		caseNumber: 0,
		createdTime: '',
		status: '',
		cyclist: undefined,
		technician: undefined,
		bicycle: undefined,
		type: '',
		tags: [],
		order: undefined,
		note: [],
		supportTime: {
			slotName: '',
			slotTime: '',
			timeStamp: '',
		},
		interventionDetails: {
			firstCall: '',
			followUpCall: '',
			supportQuality: 0,
		},
		videoURL: '',
		clientName: '',
	},
];

const technicianCasesSlice = createSlice({
	name: 'technicianCases',
	initialState,
	reducers: {
		createCases: (state, action) => {
			return [...action.payload];
		},
	},
});

export const { createCases } = technicianCasesSlice.actions;
export default technicianCasesSlice.reducer;
