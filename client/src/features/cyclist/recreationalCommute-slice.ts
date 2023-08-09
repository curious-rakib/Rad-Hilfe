import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface Recreational {
  days: string[];
  activityType: string;
  lengthOfRide: string;
}
const initialState: Recreational = {
  days: [],
  activityType: '',
  lengthOfRide: '',
};
const recreationalSlice = createSlice({
  name: 'recreational',
  initialState,
  reducers: {
    days: (state, action) => {
      return { ...state, ...action.payload };
    },
    activityType: (state, action) => {
      return { ...state, ...action.payload };
    },
    lengthOfRide: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { days, activityType, lengthOfRide } = recreationalSlice.actions;
export default recreationalSlice.reducer;
