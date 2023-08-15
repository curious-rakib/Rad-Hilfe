import { createSlice } from '@reduxjs/toolkit';
import { ObjectId } from 'mongoose';

export interface TabularCase {
	'Case Id': ObjectId | string;
	'Case No': string;
	'Case Type': string;
	Status: string;
	'Client Name': string;
	'Date Created': Date;
	'Bicycle Health': Number;
	Action: null;
}

const initialState: TabularCase[] = [
	{
		'Case Id': '',
		'Case No': '',
		'Case Type': '',
		Status: '',
		'Client Name': '',
		'Date Created': new Date(),
		'Bicycle Health': 0,
		Action: null,
	},
];

const casesPresentationSlice = createSlice({
	name: 'presentableCases',
	initialState,
	reducers: {
		createPresentableCases: (state, action) => [...action.payload],
	},
});

export const { createPresentableCases } = casesPresentationSlice.actions;
export default casesPresentationSlice.reducer;
