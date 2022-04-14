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

export interface TenantNotificationComment {
  id: number;
  cityNotificationId: number;
  fullName: string;
  avatar: string;
  comment: string;
  isLike: boolean;
  tenantId?: any;
  type: number;
  isDeleted: boolean;
  deleterUserId?: number;
  deletionTime?: string;
  lastModificationTime?: string;
  lastModifierUserId?: number;
  creationTime: string;
  creatorUserId: number;
}
