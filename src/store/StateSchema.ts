import { MailState } from './mail/mailSlice';
import { UserState } from './user/userSlice';

export interface StateSchema {
  mail: MailState;
  user: UserState;
}
