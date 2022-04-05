import {Message} from './message.model';
import {User} from './user.model';

export interface Conversation {
  id: number | string;
  name: string;
  type: 'private' | 'group';
  messages: Message[];
  users: User[];
  createdAt: Date;
}
