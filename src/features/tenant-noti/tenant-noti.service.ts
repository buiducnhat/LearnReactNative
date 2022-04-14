import 'reflect-metadata';
import Container, {Service} from 'typedi';
import {API_ENDPOINT} from '@env';

import UtilsService from '@/services/utils.service';
import {
  GET_TENANT_NOTIFICATION_TYPE,
  TenantNotification,
  TenantNotificationComment,
} from './tenant-noti.model';

@Service()
export default class TenantNotiService {
  public async getGeneralNotificationsApi(): Promise<TenantNotification[]> {
    const url = `${API_ENDPOINT}/api/services/app/UserCityNotification/GetAllNotificationUserTenant`;
    const utilsService = Container.get(UtilsService);
    const response = await utilsService.axiosRequest(url, {
      type: GET_TENANT_NOTIFICATION_TYPE.GENERAL,
    });
    return response.result.data;
  }

  public async getApartmentNotificationsApi(): Promise<TenantNotification[]> {
    const url = `${API_ENDPOINT}/api/services/app/UserCityNotification/GetAllNotificationUserTenant`;
    const utilsService = Container.get(UtilsService);
    const response = await utilsService.axiosRequest(url, {
      type: GET_TENANT_NOTIFICATION_TYPE.APARTMENT,
    });
    return response.result.data;
  }

  public async getNotificationCommentsApi(
    notificationId: number,
  ): Promise<TenantNotificationComment[]> {
    const url = `${API_ENDPOINT}/api/services/app/UserCityNotification/GetAllComment`;
    const utilsService = Container.get(UtilsService);
    const response = await utilsService.axiosRequest(url, {
      NotifiactionId: notificationId,
    });
    return response.result.data;
  }
}
