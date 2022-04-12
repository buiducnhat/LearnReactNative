import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import appReducer from '@/features/app/app.slice';
import authReducer from '@/features/auth/auth.slice';
import todoReducer from '@/features/todo/todo.slice';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  todo: todoReducer,
});

/**
 * Config redux-persist
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Config redux-saga
 */
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
