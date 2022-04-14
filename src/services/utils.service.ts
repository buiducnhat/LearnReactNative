import 'reflect-metadata';
import axios, {Method} from 'axios';
import {Service} from 'typedi';

@Service()
export default class UtilsService {
  public async axiosRequest(
    url: string,
    params?: any,
    accessToken?: string,
    data?: any,
    method: Method = 'GET',
  ) {
    const response = await axios({
      url,
      method,
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data,
    });
    return response.data;
  }
}
