import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ReportsSliceReducer from './slices/reports/reports.slice';

export const store = configureStore({
  reducer: {
    ReportsSlice: ReportsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
