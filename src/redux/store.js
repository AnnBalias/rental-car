import persistReducer from 'redux-persist/es/persistReducer';
import { globalReducer } from './slice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'isFavorite',
  storage,
  whitelist: ['isFavorite'],
};

const persistedReducer = persistReducer(persistConfig, globalReducer);

export const store = configureStore({
  reducer: {
    global: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
