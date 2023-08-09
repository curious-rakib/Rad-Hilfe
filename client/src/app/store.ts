import { configureStore } from '@reduxjs/toolkit';
import inputSliceReducer from '../features/cyclist/cyclistSignup-slice';
import signinInputSliceReducer from '../features/cyclist/cyclistSignIn-slice';
import commuteSliceReducer from '../features/cyclist/commuteDetails-slice';
export const store = configureStore({
  reducer: {
    input: inputSliceReducer,
    signInInput: signinInputSliceReducer,
    commute: commuteSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
