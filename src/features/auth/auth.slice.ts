import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/features/store';
import {AuthState, LoginPayload, User} from './auth.model';

const initialState: AuthState = {
  accessToken: undefined,
  currentUser: undefined,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(_state, _action: PayloadAction<LoginPayload>) {},
    loginSuccess(state, action: PayloadAction<{access_token?: string}>) {
      state.accessToken = action.payload.access_token;
      state.isAuthenticated = true;
    },
    loginFailed(state) {
      state.accessToken = undefined;
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },

    getMe() {},
    getMeSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    getMeFailed(state) {
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },

    logout(state) {
      state.accessToken = undefined;
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },
  },
});

export const authActions = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;
