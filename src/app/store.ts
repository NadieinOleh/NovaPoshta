import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trackingReducer from '../features/documentSlice';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  tracking: trackingReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch