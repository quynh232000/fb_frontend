import { createSlice } from '@reduxjs/toolkit';

interface SomeState {
  isOpen: boolean;
  ids:number[];
}

const initialState: SomeState = {
  isOpen: false,
  ids:[],
};

const chatBoxReducer = createSlice({
  name: 'chatbox',
  initialState,
  reducers: {
    openChat(state,data) {
      state.isOpen = true;
      state.ids=[...new Set([...state.ids,data.payload])];
    },
    closeChat(state,data) {
      state.isOpen =false;
      state.ids=state.ids.filter(item=> item!=data.payload);
    },
    // Other reducers can be defined here
  },
});

export const { openChat, closeChat } = chatBoxReducer.actions;
export default chatBoxReducer.reducer;