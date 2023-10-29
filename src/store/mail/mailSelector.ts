import { StateSchema } from 'store/StateSchema';

export const getSendMessageIsOpen = (state: StateSchema) =>
  state.mail.sendMessageIsOpen;

export const getSelectedMail = (state: StateSchema) => state.mail.selectedMail;
