import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { authReducer } from "./authSlice";
import { RootState } from "../interfaces/authInterface";


const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore actions and paths that contain non-serializable values
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: [
        "payload.headers",
        "payload.config",
        "payload.request",
      ],
    },
    devTools: process.env.NODE_ENV === "development",
  });

const persistConfig: PersistConfig<RootState["auth"]> = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor: Persistor = persistStore(store);
