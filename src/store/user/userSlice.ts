import { createSlice } from '@reduxjs/toolkit';

export interface MailState {
  sendMessageIsOpen: boolean;
}

const initialState: MailState = {
  sendMessageIsOpen: false,
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
  },
});

export const { actions: mailActions } = mailSlice;
export const { reducer: mailReducer } = mailSlice;
