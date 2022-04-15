import 'reflect-metadata';
import {Container, Service} from 'typedi';
import {API_ENDPOINT} from '@env';

import {
  GetMeApiParams,
  LoginPayload,
  RegisterPayload,
  User,
} from './auth.model';
import UtilsService from '@/services/utils.service';

@Service()
export default class AuthService {
  async loginApi({
    email,
    password,
  }: LoginPayload): Promise<{accessToken: string}> {
    const utilsService = Container.get(UtilsService);
    const url = `${API_ENDPOINT}/api/TokenAuth/Authenticate`;
    const data = {
      userNameOrEmailAddress: email,
      password,
      rememberClient: true,
    };
    const response = await utilsService.axiosRequest(
      url,
      undefined,
      undefined,
      data,
      'POST',
    );
    return {accessToken: response.result.accessToken};
  }

  async registerApi({
    emailAddress,
    password,
    name,
    surname,
    userName,
    address,
    dateOfBirth,
    gender,
    phoneNumber,
  }: RegisterPayload): Promise<{accessToken: string}> {
    const utilsService = Container.get(UtilsService);

    const url = `${API_ENDPOINT}/api/services/app/Account/Register`;
    const data = {
      emailAddress,
      password,
      name,
      surname,
      userName,
      address,
      dateOfBirth,
      gender,
      phoneNumber,
    };
    await utilsService.axiosRequest(url, undefined, undefined, data, 'POST');

    return this.loginApi({email: emailAddress, password});
  }

  async getMeApi({accessToken}: GetMeApiParams): Promise<User> {
    const utilsService = Container.get(UtilsService);
    const url = `${API_ENDPOINT}/api/services/app/User/GetDetail`;
    const response = await utilsService.axiosRequest(
      url,
      undefined,
      accessToken,
    );

    return response.result;
  }
}
