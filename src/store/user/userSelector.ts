import { StateSchema } from 'store/StateSchema';

export const getUser = (state: StateSchema) => state.user.user;
