import { createSlice } from '@reduxjs/toolkit';
import { Case } from '../../../pages/Technician/Dashboard/Agenda';

const initialState: Case[] = [
	{
		_id: '',
		caseNumber: 0,
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
			timeStamp: new Date(),
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
		createCase: (state, action) => {
			return action.payload;
		},
	},
});

export const { createCase } = technicianCasesSlice.actions;
export default technicianCasesSlice.reducer;
