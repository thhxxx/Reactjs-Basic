import { configureStore } from '@reduxjs/toolkit';
import LocationReducer from '../reducers/LocationReducer.js';

export default configureStore({
  reducer: {
    LocationReducer
  }
});