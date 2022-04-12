import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '@/features/store';
import {AppState} from './app.model';

const initialState: AppState = {
  themeType: 'os',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeType: (state, action) => {
      state.themeType = action.payload;
    },
  },
});

export const {setThemeType} = appSlice.actions;

export const selectThemeType = (state: RootState) => state.app.themeType;

export default appSlice.reducer;
