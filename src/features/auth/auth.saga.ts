import {PayloadAction} from '@reduxjs/toolkit';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import Container from 'typedi';

import {User} from './auth.model';
import AuthService from './auth.service';
import {authActions, selectAccessToken} from './auth.slice';

export function* handleLogin(
  action: PayloadAction<{email: string; password: string}>,
) {
  try {
    const authService = Container.get(AuthService);
    const result: {access_token: string} = yield call(
      authService.loginApi,
      action.payload,
    );

    yield put({type: authActions.loginSuccess.type, payload: result});
  } catch (error) {
    console.log(error);
    yield put({type: authActions.loginFailed.type});
  }
}

export function* handleGetMe() {
  try {
    const authService = Container.get(AuthService);
    const accessToken: string = yield select(selectAccessToken);
    const result: User = yield call(authService.getMeApi, {
      accessToken,
    });

    yield put({type: authActions.getMeSuccess.type, payload: result});
  } catch (error) {
    console.log(error);
    yield put({type: authActions.getMeFailed.type});
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.type, handleLogin),
    takeLatest(authActions.getMe.type, handleGetMe),
  ]);
}
