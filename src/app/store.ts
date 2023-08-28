import { configureStore } from '@reduxjs/toolkit'
import trackingReducer from '../features/documentSlice';
import thunkMiddleware from 'redux-thunk';


export const store = configureStore({
  reducer: {
    tracking: trackingReducer,
  },
  middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch