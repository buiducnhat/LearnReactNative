import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/features/store';
import {AuthState, LoginPayload, RegisterPayload, User} from './auth.model';

const initialState: AuthState = {
  accessToken: undefined,
  currentUser: undefined,
  isAuthenticated: false,
  isPendingGetMe: false,
  isPendingLogin: false,
  isPendingRegister: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Handle login
    login(state, _action: PayloadAction<LoginPayload>) {
      state.isPendingLogin = true;
    },
    loginSuccess(state, action: PayloadAction<{accessToken?: string}>) {
      state.isPendingLogin = false;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },
    loginFailed(state) {
      state.isPendingLogin = false;
      state.accessToken = undefined;
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },

    // Handle register
    register(state, _action: PayloadAction<RegisterPayload>) {
      state.isPendingRegister = true;
    },
    registerSuccess(state, action: PayloadAction<{access_token?: string}>) {
      state.isPendingRegister = false;
      state.accessToken = action.payload.access_token;
      state.isAuthenticated = true;
    },
    registerFailed(state) {
      state.isPendingRegister = false;
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
