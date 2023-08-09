import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface BikeInputState {
  brand: string;
  model: string;
  serialNumber: number;
  purchaseMonth: string;
  purchaseYear: number;
  isRevised: boolean;
  revisionMonth: string;
  revisionYear: number;
}
const initialState: BikeInputState = {
  brand: '',
  model: '',
  serialNumber: 0,
  purchaseMonth: '',
  purchaseYear: 0,
  isRevised: false,
  revisionMonth: '',
  revisionYear: 0,
};

const bikeInputSlice = createSlice({
  name: 'bikeInput',
  initialState,
  reducers: {
    bikeDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { bikeDetails } = bikeInputSlice.actions;
export default bikeInputSlice.reducer;
