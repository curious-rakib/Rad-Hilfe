import { createSlice } from '@reduxjs/toolkit';

interface FilterStatus {
	status: string;
}

const initialState: FilterStatus = {
	status: '',
};

export const filterByStatusSlice = createSlice({
	name: 'filterByStatus',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { setFilter } = filterByStatusSlice.actions;
export default filterByStatusSlice.reducer;
