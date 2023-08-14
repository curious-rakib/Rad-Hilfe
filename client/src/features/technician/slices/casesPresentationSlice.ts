import { createSlice } from '@reduxjs/toolkit';
import technicianCasesSlice from './technicianCasesSlice';

export interface TabularCase {
	'Case No': string;
	'Case Type': string;
	Status: string;
	'Client Name': string;
	'Date Created': string;
	'Bicycle Health': Number;
	Action: null;
}

const initialState: TabularCase[] = [
	{
		'Case No': '',
		'Case Type': '',
		Status: '',
		'Client Name': '',
		'Date Created': '',
		'Bicycle Health': 0,
		Action: null,
	},
];

const casesPresentationSlice = createSlice({
	name: 'presentableCases',
	initialState,
	reducers: {
		presentableCases: (state, action) => [...action.payload],
	},
});

export const { presentableCases } = casesPresentationSlice.actions;
export default casesPresentationSlice.reducer;
