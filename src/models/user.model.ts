export interface User {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
