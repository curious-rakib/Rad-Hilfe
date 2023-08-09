import { createSlice } from '@reduxjs/toolkit';
interface CommuteState {
  days: string[];
  unpavedRoad: number;
}
const initialState: CommuteState = {
  days: [],
  unpavedRoad: 0,
};

const commuteSlice = createSlice({
  name: 'commute',
  initialState,
  reducers: {
    commuteDays: (state, action) => {
      console.log('data rcvd', { ...state, ...action });

      return { ...state, ...action.payload };
    },
    unpaved: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { commuteDays, unpaved } = commuteSlice.actions;
export default commuteSlice.reducer;
