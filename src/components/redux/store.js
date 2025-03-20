import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

let store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;
