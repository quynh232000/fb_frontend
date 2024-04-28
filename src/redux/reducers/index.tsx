import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './testReducer';

const rootReducer = combineReducers({
  someReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;