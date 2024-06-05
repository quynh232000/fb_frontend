import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/post";

interface SomeState {
  isOpen: boolean;
  ids: number[];
  listChatUsers: UserModel[];
}


const initialState: SomeState = {
  isOpen: false,
  ids: [],
  listChatUsers: [],
};

const chatBoxReducer = createSlice({
  name: "chatbox",
  initialState,
  reducers: {
    openChat(state, data) {
      state.isOpen = true;
      const checkUser = state.listChatUsers.find(
        (item) => item.id == data.payload.id
      );
      if(!checkUser){
        state.listChatUsers =[data.payload,...state.listChatUsers]
      }
    },
    closeChat(state, data) {
      state.isOpen = false;
      state.ids = state.ids.filter((item) => item != data.payload);
      state.listChatUsers = state.listChatUsers.filter(
        (item) => item.id != data.payload
      );
    },
    // Other reducers can be defined here
  },
});

export const { openChat, closeChat } = chatBoxReducer.actions;
export default chatBoxReducer.reducer;
