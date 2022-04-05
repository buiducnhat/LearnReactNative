import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '@/features/store';
import {AppState} from './app.model';
import Container from 'typedi';
import ThemeService from './theme.service';

const initialState: AppState = {
  themeType: 'os',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeType: (state, action) => {
      const themeService = Container.get(ThemeService);
      state.themeType = action.payload;
      themeService.saveToLocal(action.payload);
    },
  },
});

export const {setThemeType} = appSlice.actions;

export const selectThemeType = (state: RootState) => state.app.themeType;

export default appSlice.reducer;
