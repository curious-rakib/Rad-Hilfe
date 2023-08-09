import { configureStore, createStore } from '@reduxjs/toolkit';
import inputSliceReducer from '../features/cyclist/cyclistSignup-slice';
import signinInputSliceReducer from '../features/cyclist/cyclistSignIn-slice';
import commuteSliceReducer from '../features/cyclist/commuteDetails-slice';
import recreationalSliceReducer from '../features/cyclist/recreationalCommute-slice';
import bikeInputSliceReducer from '../features/cyclist/bikeDetails-slice';

import rootSetBikeReducer from '../features/cyclist/setUpBike-slice';
export const store = configureStore({
  reducer: {
    input: inputSliceReducer,
    signInInput: signinInputSliceReducer,
    commute: commuteSliceReducer,
    recreation: recreationalSliceReducer,
    bikeDetails: bikeInputSliceReducer,
    rootSetBikeReducer: rootSetBikeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
