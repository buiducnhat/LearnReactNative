import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/features/store';
import {AuthState, LoginPayload, RegisterPayload, User} from './auth.model';

const initialState: AuthState = {
  accessToken: undefined,
  currentUser: undefined,
  isAuthenticated: false,
  isPendingGetMe: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Handle login
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

    // Handle register
    register(_state, _action: PayloadAction<RegisterPayload>) {},
    registerSuccess(state, action: PayloadAction<{access_token?: string}>) {
      state.accessToken = action.payload.access_token;
      state.isAuthenticated = true;
    },
    registerFailed(state) {
      state.accessToken = undefined;
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },

    // Handle get me
    getMe(state) {
      state.isPendingGetMe = true;
    },
    getMeSuccess(state, action: PayloadAction<User>) {
      state.isPendingGetMe = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    getMeFailed(state) {
      state.isPendingGetMe = false;
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },

    // Handle logout
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
export const selectIsPendingGetMe = (state: RootState) =>
  state.auth.isPendingGetMe;

export default authSlice.reducer;
