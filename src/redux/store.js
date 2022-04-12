import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bankReducer from 'redux/banks/banksReducer';

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

const bankListPersistConfig = {
  key: 'orders',
  storage,
};

const rootReducer = combineReducers({
  banks: bankReducer,
});

const persistedReducer = persistReducer(bankListPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);
export { store, persistor };
