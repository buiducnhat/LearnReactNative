import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@/features/store';

export type ThemeType = 'light' | 'dark' | 'os';

export interface AppState {
  themeType: ThemeType;
}

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
