import 'reflect-metadata';
import {Service} from 'typedi';
import axios from 'axios';

import {API_ENDPOINT} from '@env';
import {GetMeApiParams, LoginPayload, User} from './auth.model';

@Service()
export default class AuthService {
  async loginApi({
    email,
    password,
  }: LoginPayload): Promise<{access_token: string}> {
    const response = await axios({
      url: `${API_ENDPOINT}/auth/login`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    });

    return response.data;
  }

  async getMeApi({accessToken}: GetMeApiParams): Promise<User> {
    const response = await axios({
      url: `${API_ENDPOINT}/auth/me`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  }
}
