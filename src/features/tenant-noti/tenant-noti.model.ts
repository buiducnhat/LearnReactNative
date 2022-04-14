export const GET_TENANT_NOTIFICATION_TYPE = {
  APARTMENT: 1,
  GENERAL: 2,
};

export interface TenantNotification {
  id: number;
  countComment: number;
  countFollow: number;
  name: string;
  data: string;
  fileUrl?: any;
  type: 1 | 2;
  userId?: any;
  tenantId?: any;
  deleterUserId?: any;
  deletionTime?: any;
  isDeleted?: boolean;
  follow?: any;
  creationTime: string;
  creatorUserId: number;
}
