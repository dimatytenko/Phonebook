import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { contactsReducer } from './contacts';
import { authReducer } from './auth';

//* config persist
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

//* store
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer.auth),
    contacts: contactsReducer.contacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

const rootStore = { store, persistor };

export default rootStore;
