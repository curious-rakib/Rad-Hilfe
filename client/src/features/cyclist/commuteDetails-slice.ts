import { createSlice } from '@reduxjs/toolkit';
interface CommuteState {
  days: string[];
  unpavedRoad: number;
  totalDistance: number;
}
const initialState: CommuteState = {
  days: [],
  unpavedRoad: 0,
  totalDistance: 0,
};

const commuteSlice = createSlice({
  name: 'dailyCommute',
  initialState,
  reducers: {
    commuteDays: (state, action) => {
      return { ...state, ...action.payload };
    },
    unpavedRoad: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { commuteDays, unpavedRoad } = commuteSlice.actions;
export default commuteSlice.reducer;
