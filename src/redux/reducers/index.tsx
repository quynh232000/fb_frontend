import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './testReducer';
import chatBoxReducer from './chatBoxReducer';

const rootReducer = combineReducers({
  someReducer,
  chatBoxReducer
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;