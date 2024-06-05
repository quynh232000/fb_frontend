import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './testReducer';
import chatBoxReducer from './chatBoxReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  someReducer,
  chatBoxReducer,
  authReducer,
  appReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;