import { createSlice } from '@reduxjs/toolkit';

interface FilterType {
	status: string;
}

const initialState: FilterType = {
	status: '',
};

export const filterByTypeSlice = createSlice({
	name: 'filterByType',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { setFilter } = filterByTypeSlice.actions;
export default filterByTypeSlice.reducer;
