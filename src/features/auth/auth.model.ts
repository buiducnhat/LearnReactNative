export interface User {
  id: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  phoneNumber?: string;
  lastLoginTime?: string;
  creationTime: string;
  roleNames?: any;
  homeAddress?: any;
  addressOfBirth?: any;
  dateOfBirth?: any;
  gender?: any;
  nationality?: any;
  profilePictureId?: any;
  imageUrl?: any;
  phanKhuId?: any;
  houseId?: any;
  identityNumber?: any;
  qrCodeBase64?: any;
  stateFriend?: number;
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

export interface RegisterPayload {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse?: string;
  isCitizen?: boolean;
  phoneNumber?: string;
  address?: string;
  gender?: string;
  dateOfBirth?: string;
}

export interface GetMeApiParams {
  accessToken: string;
}
