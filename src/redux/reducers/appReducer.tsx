import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/post";
import { GroupModel } from "../../types/app";

interface SomeState {
  currentUser: UserModel|null;
  isNotify: boolean;
  dataNotify:{
    type:string,
    message:string
  };
  currentGroup:GroupModel|null;
}

const initialState: SomeState = {
  currentUser: null,
  isNotify: false,
  dataNotify:{
    type:"success",
    message:"Thành công!"
  },
  currentGroup:null,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser(state, data) {
      state.currentUser = data.payload;
    },
    closeNotify(state){
      state.isNotify = false;
      state.dataNotify.type = "";
      state.dataNotify.message = "";

    },
    setNotify(state, data) {
      state.isNotify = true;
      state.dataNotify.type = data.payload.type;
      state.dataNotify.message = data.payload.message;
    },
    setCurrentGroup(state, data) {
      state.currentGroup = data.payload;
    },
  },
});

export const { setCurrentUser,setNotify ,closeNotify,setCurrentGroup} = appReducer.actions;
export default appReducer.reducer;
