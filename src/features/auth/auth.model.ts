export interface User {
  id: number;
  email: string;
  name?: string;
  avatar?: string;
}

export interface AuthState {
  currentUser?: User;
  isAuthenticated: boolean;
  accessToken?: string;

  isPendingGetMe: boolean;
  isPendingLogin: boolean;
  isPendingRegister: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
  avatar?: string;
}

export interface GetMeApiParams {
  accessToken: string;
}
