import {Conversation} from './conversation.model';
import {User} from './user.model';

export interface Message {
  id: number | string;
  content: string;
  sentUser: Partial<User>;
  conversation?: Partial<Conversation>;
  createdAt: Date;
}
