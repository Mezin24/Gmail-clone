import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Mail } from 'types/mail';

export interface MailState {
  sendMessageIsOpen: boolean;
  selectedMail: null | Mail;
}

const initialState: MailState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action: PayloadAction<Mail>) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { actions: mailActions } = mailSlice;
export const { reducer: mailReducer } = mailSlice;
